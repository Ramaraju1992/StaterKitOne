/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

// Scenes
import HomePage from '@containers/Home/HomePage';
import PostPreview from '@containers/PostPreview/PostPreview';
/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'}>
    <Scene
      hideNavBar
      key={'splash'}
      component={HomePage}
    />
     <Scene
      hideNavBar
      key={'postPreview'}
      component={PostPreview}
    />
    
  </Scene>,
);