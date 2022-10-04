import React from 'react';
import { ImageBackground } from 'react-native';
import { Title, Button, Colors } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import { Box } from '../basic_components/box';
import { useStyles } from "./styles";
import { BasicInput } from "../inputs/basic_input";


export const Login = () => {
    const navigate = useNavigate()
    const image = `https://mfiles.alphacoders.com/973/973553.png`;
    return (
        
        <ImageBackground source={{ uri: image}} resizeMode="cover" style={{ width: '100%', height: '100%', alignItems:'center', justifyContent:'center'}}>
          
            <Box backgroundColor="#rgba(2, 2, 3, 0.8)"  justifyContent="center" alignItems="center" borderRadius={10} height="100%" width="100%">
                <Box borderRadius={12} p={8} backgroundColor="white" width="80%">
                    {LabelLogin()}
                    <Box py={8}>
                        <BasicInput name="email" label="Email*"/>
                    </Box>
                    <Box py={8}>
                        <BasicInput label="Password*"/>
                    </Box>
                    <Box py={8}>
                        <Button onPress={() => navigate('/news')}><Title>En</Title><Title style={{ color: Colors.blue600}}>ter</Title></Button>
                    </Box>
                </Box>
            </Box>
          
            
        </ImageBackground>
  )
}

const LabelLogin = () => {
    const styles = useStyles();
    return (
        <Box flexDirection="row"  justifyContent="center">
            <Title style={styles.blackChar}>L</Title>
            <Title style={styles.blueChar}>O</Title>
            <Title style={styles.blackChar}>G</Title>
            <Title style={styles.blueChar}>I</Title>
            <Title style={styles.blackChar}>N</Title>
        </Box>
    )
    
}