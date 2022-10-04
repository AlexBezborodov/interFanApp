import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { Login } from '../login/login';
import { Main } from '../main/main';
import { Splashscrenn } from '../splashscreen';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Colors,
} from "react-native-paper";

export const Application = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.blue500,
      background: Colors.white,
      accent: "yellow",
      success: Colors.green500,
      activeChoice: Colors.blue50,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<Splashscrenn />} />
          <Route path='/login' element={<Login />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </NativeRouter>
    </PaperProvider>
      
      
  )
}
