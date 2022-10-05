import React from 'react';
import { Alert } from 'react-native';
import PropTypes from "prop-types";
import { Title, Card, Subheading } from 'react-native-paper';
import { Box } from '../../basic_components';
import { useNavigate } from 'react-router-native';


export const ShortArticle = ({ id, title, body }) => {
    const navigate = useNavigate();
    return (
        <Box py={4}>
            <Card onPress={() => navigate(`/news/${id}`)}>
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