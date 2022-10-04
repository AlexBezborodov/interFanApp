import React from 'react';
import { Box } from "../basic_components/box";
import { ActivityIndicator, Title } from 'react-native-paper';
import { AppHeader } from '../header/header';
import { Layout } from '../layout'
import { Colors } from 'react-native-paper';

export const Chat = () => {
    return (
        <>
        <AppHeader title="Chat"/>
        <Layout>
            <Box justifyContent="center" alignItems="center" flex={1} borderWidth={2}>
            <Title>Chat</Title>   
            <ActivityIndicator />
            </Box>  
        </Layout>
        </>
        
  )
}
