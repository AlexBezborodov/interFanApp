import React, { useEffect, useState } from 'react';
import { AppHeader } from '../header/header';
import { Layout } from '../layout'
import { Colors } from 'react-native-paper';
import { ShortArticle } from './short_article';
import { ScrollView } from 'react-native';
import { EmptyNews } from './empty_news'

export const News = () => {
    const [news, setNews] = useState([]);
    const fetchNews = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setNews(json))
    }

    useEffect(() => {
        fetchNews();
    },[])
    return (
        <>
            <AppHeader title="News" bgc={Colors.blueGrey800} />
            <ScrollView>
                <Layout>  
                    {news.length ? (news?.map(article => <ShortArticle key={article.id} {...article} />)) : (<EmptyNews />)}
                </Layout>
            </ScrollView>
        </>
        
  )
}
