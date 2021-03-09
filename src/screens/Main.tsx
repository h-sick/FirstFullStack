import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import jwtDecode from 'jwt-decode';

const Main = (props) => {
  const user = useSelector((state: any) => state.user);
  const back = () => {
    Actions.pop();
  };
  return (
    <View>
      <TouchableOpacity onPress={back}>
        <Text>Main page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
