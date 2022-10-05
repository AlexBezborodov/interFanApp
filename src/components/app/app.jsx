import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { Login } from '../login/login';
import { Splashscrenn } from '../splashscreen';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Colors,
} from "react-native-paper";
import { BottomNavLayout } from '../bottom_navigation';
import { CurrentUserProvider } from '../../providers/current_user_provider';

export const Application = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.blue500,
      background: Colors.white,
      success: Colors.green500,
      activeChoice: Colors.blue50,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <CurrentUserProvider>
        <NativeRouter>
          <Routes>
            <Route path='/' element={<Splashscrenn />} />
            <Route path='/login' element={<Login />} />
            <Route path='/news' element={<BottomNavLayout />} />
            <Route path='/chat' element={<BottomNavLayout />} />
            <Route path='/team' element={<BottomNavLayout />} />
            <Route path='/profile' element={<BottomNavLayout />} />
          </Routes>
        </NativeRouter>
      </CurrentUserProvider>
    </PaperProvider>
    
      
      
  )
}
