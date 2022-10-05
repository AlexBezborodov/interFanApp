import React, { useState, useEffect } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { useNavigate, useMatch } from 'react-router-native';
import { Chat } from '../chat';
import { News } from '../news';
import { UserProfile } from '../profile';
import { Team } from '../team';

export const BottomNavLayout = () => {
  const navigate = useNavigate();
    const matchNews = useMatch("/news");
    const matchChat = useMatch("/chat");
    const matchTeam = useMatch("/team");
    const matchProfile = useMatch("/profile");
    
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'news', title: 'News', icon: 'newspaper-variant', url: "/news"},
    { key: 'chat', title: 'Chat', icon: 'forum', url: "/chat"},
    { key: 'team', title: 'Team', icon: 'soccer-field', url: "/team" },
    { key: 'profile', title: 'Profile', icon: 'account', url: "/profile" },
  ]);
    
  const onChange = key => {
    setIndex(key);
    navigate(routes[key].url, {
      state: createRouteState(routes[key].url),
    });
  };

  const renderScene = BottomNavigation.SceneMap({
    news: News,
    chat: Chat,
    team: Team,
    profile: UserProfile,
  });
    
  useEffect(() => {
    if (matchNews) setIndex(0);
      if (matchChat) setIndex(1);
      if (matchTeam) setIndex(2);
      if (matchProfile) setIndex(3);
  }, [matchNews,matchChat,matchTeam,matchProfile]);

  return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={onChange}
        renderScene={renderScene}
    />
  );
};

function createRouteState(key) {
    switch (key) {
      case "/profile":
        return { refreshProfile: true };
      case "/chat":
            return { refreshChat: true };
      case "/team":
        return { refreshTeam: true };
      case "/team":
        return { refreshNews: true };
      default:
        return;
    }
  }