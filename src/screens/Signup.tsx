import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {postSignUpAPI} from '../apis/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setBasicInfo} from '../reducers/user';

const Signup = (props) => {
  // useEffect(() => {
  //   const token = getMyStringValue();
  // }, []);

  // const getMyStringValue = async () => {
  //   console.log('getMyStringValue');
  //   const jsonValue = await AsyncStorage.getItem('jwtToken');
  //   console.log(jsonValue);
  //   console.log('Done.');
  // };
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickName: '',
  });
  const [visibleLoader, setVisibleLoader] = useState(false);

  const onChangeText = (text: string, key: string) => {
    setInput({
      ...input,
      [key]: text,
    });
  };

  const setJwtToken = async (value) => {
    try {
      await AsyncStorage.setItem('jwtToken', value);
    } catch (e) {
      // read error
    }

    console.log('Done.');
  };

  const onPress = () => {
    if (input.password !== input.passwordCheck) {
      alert('password check is not same with password');
      return false;
    }

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const emailResult = re.test(input.email);

    if (!emailResult) {
      alert('email is not valid');
    }

    if (input.email === '') {
      //regex...
      alert('email should be inserted');
      return false;
    }

    setVisibleLoader(true);
    try {
      postSignUpAPI({
        email: input.email,
        password: input.password,
        nick_name: input.nickName,
      }).then((json) => {
        if (json.success) {
          // Actions.main();
          // setJwtToken(json.jwt_token);
          dispatch(setBasicInfo(json.basic));
        } else {
          alert(json.message);
        }
        setVisibleLoader(false);
      });
    } catch (e) {
      setVisibleLoader(false);
    }
  };

  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text, 'email')}
        value={input.email}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text, 'password')}
        placeholder="insert password"
        secureTextEntry={true}
        value={input.password}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text, 'passwordCheck')}
        value={input.passwordCheck}
        secureTextEntry={true}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text, 'nickName')}
        value={input.nickName}
        placeholder="nick name"
      />
      <TouchableOpacity style={{backgroundColor: 'gray'}} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      {visibleLoader && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.2)',
            width: windowWidth,
            height: windowHeight,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>spinner</Text>
          <ActivityIndicator size="large" color="#442dc9" />
        </View>
      )}
    </View>
  );
};

export default Signup;
