import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signInAPI} from '../apis/auth';
import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import {setBasicInfo} from '../reducers/user';

const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const jwtToken = await AsyncStorage.getItem('jwtToken');
    if (jwtToken !== null && jwtToken !== '' && jwtToken !== undefined) {
      signInAPI({json_token: jwtToken}).then((json) => {
        if (json.success) {
          Actions.main();
          dispatch(setBasicInfo(json.basic));
        } else {
          alert(json.message);
          AsyncStorage.removeItem('jwtToken');
          Actions.signup();
          return false;
        }
      });
    } else {
      Actions.signup();
    }
  };

  return (
    <View>
      <Text>this is splash</Text>
    </View>
  );
};

export default Splash;
