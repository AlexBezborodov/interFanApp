import React from 'react'
import PropTypes from "prop-types";
import { Box } from '../../basic_components';
import {Title } from 'react-native-paper';
import { ImageBackground } from 'react-native';

export const EmptyNews = () => {
  const image = "https://www.vidimsoft.com/sites/default/files/styles/blog_lg/public/articles/nonewsyet.jpg?itok=51EKSfgX";
  return (
    <Box alignItems="center" justifyContent="center" height="90%">
      <ImageBackground
        source={{ uri: image }}
         style={{ width: '100%', height: 300, alignItems:'center', justifyContent:'center'}}
      />
      </Box>
  )
}
