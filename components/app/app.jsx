import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { Main } from '../main/main';
import { Splashscrenn } from '../splashscreen';

export const Application = () => {
    return (
      <NativeRouter>
            <Routes>
                <Route path='/' element={<Splashscrenn />} />
                <Route path='/main' element={<Main />} />
            </Routes>
      </NativeRouter>
      
  )
}
