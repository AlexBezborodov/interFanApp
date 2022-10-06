import React, { useEffect, useState } from 'react';
import { AppHeader } from '../header/header';
import { Layout } from '../layout'
import { Colors } from 'react-native-paper';
import { ShortArticle } from './short_article';
import { ScrollView } from 'react-native';
import { EmptyNews } from './empty_news'
import { useMatch } from "react-router-native";
import { useRequestBuilder } from "../../hooks";

export const News = () => {
    const matchNews = useMatch("/news");
    const [news, setNews] = useState([]);

    const [,fetchArticles] = useRequestBuilder("GET", "https://jsonplaceholder.typicode.com/posts");
    const fetchNews = async() => {
        const res = await fetchArticles();
        if (res.status === 200) {
            setNews(res.body);
        } else {
            Alert.alert("Something went wrong");
        }
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
