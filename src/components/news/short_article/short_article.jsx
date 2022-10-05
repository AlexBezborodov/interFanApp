import React from 'react';
import { Alert } from 'react-native';
import PropTypes from "prop-types";
import { Title, Card, Subheading } from 'react-native-paper';
import { Box } from '../../basic_components';


export const ShortArticle = ({id, title, body}) => {
    return (
        <Box py={4}>
            <Card onPress={() => Alert.alert("navigate to article")}>
            <Card.Cover source={{ uri: `https://picsum.photos/7${id <10 ? `0${id}`: id}` }} />
                <Card.Content>
                    <Title>{title}</Title>
                    <Box>
                        <Subheading>
                            {body.slice(0,50)}...  more
                    </Subheading>
                    </Box>
                    

            </Card.Content> 
        </Card>
        </Box>
        
  )
}

ShortArticle.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  };