import React from 'react';
import { Box } from "../basic_components/box";
import { ActivityIndicator, Title } from 'react-native-paper';

export const Main = () => {
    return (
        <Box justifyContent="center" alignItems="center" flex={1}>
            <Title>Main</Title>   
            <ActivityIndicator />
        </Box>  
  )
}
