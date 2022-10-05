import React from 'react';

import PropTypes from "prop-types";
import { Title } from 'react-native-paper';
import { Box } from '../../basic_components';
import { useParams, useNavigate } from "react-router-native";
import { AppHeader } from '../../header/header';


export const FullArticle = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <>
        <AppHeader onPress={() => navigate('/news')} title={`Article ${id}`} />
         <Box py={4}>
           <Title>{id}</Title>  
         </Box>
        </>
        
        
  )
}

FullArticle.propTypes = {};