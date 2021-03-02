import React from 'react';
import {
  Scene,
  Router,
  ActionConst,
  Tabs,
  Stack,
} from 'react-native-router-flux';

import Intro from '../screens/Intro';
import Login from '../screens/Login';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="intro"
          hideNavBar
          component={Intro}
          gesturesEnabled={false}
          panHandlers={null}
        />
        <Scene
          key="login"
          hideNavBar
          component={Login}
          gesturesEnabled={false}
          panHandlers={null}
        />

        {/*
        <Scene key="signup" hideNavBar component={Signup} />
				*/}
      </Stack>
    </Router>
  );
};

export default RouterComponent;
