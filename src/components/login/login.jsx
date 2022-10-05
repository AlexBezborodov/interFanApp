import React, { useContext, useState } from 'react';
import { Alert, ImageBackground } from 'react-native';
import { Title, Button, Colors } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import { Box } from '../basic_components/box';
import { useStyles } from "./styles";
import { BasicInput } from "../inputs/basic_input";
import { useStateInputHandler } from "../../hooks/use_input_handler/use_input_handler";
import { CurrentUserContext } from '../../providers/current_user_provider';


export const Login = () => {
    const navigate = useNavigate()
    const image = `https://mfiles.alphacoders.com/973/973553.png`;
    const mockLoginData = { email: "abe@test.com", password: "q1w2e3r4" };

    const { setCurrentUser } = useContext(CurrentUserContext);

    const [values, setValues] = useState({});
    const { inputHandler } = useStateInputHandler(setValues);

    const fakeFetch = (data) => {
        const { email, password } = mockLoginData;
        if (email === data.email.toLowerCase() && password === data.password) {
            return {status: 200, user: getMockUser()}
        } else {
            return {status: 404, error: "Wrong email or password"}
        }
    }

    const login = () => {
        const res = fakeFetch(values);
        setTimeout(() => {
            if (res.status === 200) {
                setCurrentUser(res.user);
                navigate("/news");
                setValues({});
            } else {
                Alert.alert(res.error);
            }
        }, 500);
        
    }

    return (
        
        <ImageBackground source={{ uri: image}} resizeMode="cover" style={{ width: '100%', height: '100%', alignItems:'center', justifyContent:'center'}}>
          
            <Box backgroundColor="#rgba(2, 2, 3, 0.8)"  justifyContent="center" alignItems="center" borderRadius={10} height="100%" width="100%">
                <Box borderRadius={12} p={8} backgroundColor="white" width="80%">
                    {LabelLogin()}
                    <Box py={8}>
                        <BasicInput
                            name="email"
                            label="Email*"
                            value={values?.email || ""}
                            onChangeText={inputHandler}
                             />
                    </Box>
                    <Box py={8}>
                        <BasicInput
                            secureTextEntry={true}
                            name="password"
                            label="Password*"
                            value={values?.password || ""}
                            onChangeText={inputHandler}
                        />
                    </Box>
                    <Box py={8}>
                        <Button onPress={login}><Title>En</Title><Title style={{ color: Colors.blue600}}>ter</Title></Button>
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

function getMockUser() {
    return {
        id: 1235532943358769,
        name: "Alex",
        surname: "Bezborodov",
        birthDate: "23.11.1987",
        nickName: "ABE",
        email: "abe@test.com",
        phone: "0987654321",
        country: "Ukraine",
        city: "Che",
    }
}