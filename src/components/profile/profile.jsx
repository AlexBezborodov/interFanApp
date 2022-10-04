import React from 'react';
import { Box } from "../basic_components/box";
import { Title } from 'react-native-paper';
import { AppHeader } from '../header/header';
import { Layout } from '../layout'

export const UserProfile = () => {
    return (
        <>
        <AppHeader title="Profile" />
        <Layout>
            <Box justifyContent="center" alignItems="center" flex={1} borderWidth={2}>
            <Title>Profile</Title>   
            </Box>  
        </Layout>
        </>
        
  )
}
