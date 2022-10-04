import React, { useEffect } from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Colors, Subheading, Title } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import { Box } from '../basic_components/box';


export const Splashscrenn = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, 5000)
    }, [])
    return (
        
        <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/7a/b3/5b/7ab35b6de7705d691ea62e5989905402.jpg'}} resizeMode="cover" style={{ width: '100%', height: '100%', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity
                onPress={() => navigate('/main')}
                style={{ width: "80%" }}
                activeOpacity={0.9}>
            <Box backgroundColor="rgba(154, 184, 230, 0.9)"  justifyContent="center" alignItems="center" borderRadius={10} height={180}>
                <Title style={{textAlign: "center", color: Colors.blue500}}>Welcome</Title>
                <Subheading style={{textAlign: "center"}}>to Inter family</Subheading>
            </Box>
            </TouchableOpacity>
            
        </ImageBackground>
  )
}
