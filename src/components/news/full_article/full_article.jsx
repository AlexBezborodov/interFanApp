import React, { useContext, useEffect, useState } from 'react';

import PropTypes from "prop-types";
import { Subheading, Title, Button } from 'react-native-paper';
import { Box } from '../../basic_components';
import { useParams, useNavigate } from "react-router-native";
import { AppHeader } from '../../header/header';
import { useRequestBuilder } from "../../../hooks";
import { Alert, Image, ScrollView } from 'react-native';
import { Layout } from '../../layout';
//import { SnackBarContext } from "../../../providers";


export const FullArticle = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const articleUrl = `https://jsonplaceholder.typicode.com/posts/${id}`
    const [currentArticle, setCurrentArticle] = useState({});
    const [isFetching, fetchArticle] = useRequestBuilder("GET", articleUrl);

    const getArticle = async () => {
        const res = await fetchArticle();
        if (res.status === 200) {
            setCurrentArticle(res.body);
        } else {
            Alert.alert("Something went wrong");
        }
    }
    useEffect(() => {
        getArticle();
    }, [])
    return (
        <>
        <AppHeader onPress={() => navigate('/news')} title={`Article #${id}`} />
        <ScrollView>
          <Layout>
            <Box py={16}>
                <Title style={{ textAlign: "center"}}>{currentArticle.title}</Title>
            </Box>
            <Image style={{ width: "100%", height: 300}} source={{ uri: `https://picsum.photos/7${id <10 ? `0${id}`: id}` }} />
            <Box py={4}>
              <Subheading>{currentArticle.body}</Subheading>
             </Box>
            </Layout> 
          </ScrollView>
          <Box mt="auto" pb={24} px={12}>
                <Button mode="contained" onPress={() => {}}>discuss</Button>
          </Box>
        </>
        
        
  )
}

FullArticle.propTypes = {};