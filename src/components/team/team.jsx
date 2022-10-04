import React from 'react';
import { Box } from "../basic_components/box";
import { Title } from 'react-native-paper';
import { AppHeader } from '../header/header';
import { Layout } from '../layout'
import { Colors } from 'react-native-paper';

export const Team = () => {
    return (
        <>
        <AppHeader title="Team" bgc={Colors.blueGrey800}/>
        <Layout>
            <Box justifyContent="center" alignItems="center" flex={1}>
            <Title>Team</Title>   
            </Box>  
        </Layout>
        </>
        
  )
}
