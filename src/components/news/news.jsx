import React, { useEffect, useState } from 'react';
import { AppHeader } from '../header/header';
import { Layout } from '../layout'
import { Colors } from 'react-native-paper';
import { ShortArticle } from './short_article';
import { ScrollView } from 'react-native';
import { EmptyNews } from './empty_news'
import { useLocation, useMatch } from "react-router-native";

export const News = () => {
    const { pathname, state } = useLocation();
    const matchNews = useMatch("/news");
    const [news, setNews] = useState([]);
    const fetchNews = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setNews(json))
    }

    useEffect(() => {
        !!matchNews ? fetchNews() : null;
    },[matchNews])
    return (
        <>
            <AppHeader title="News" bgc={Colors.blueGrey800} />
            {!news?.length && <EmptyNews />}
            <ScrollView>
                <Layout>  
                    {news?.map(article => <ShortArticle key={article.id} {...article} />)}
                </Layout>
            </ScrollView>
        </>
        
  )
}
