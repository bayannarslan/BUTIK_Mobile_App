import { NavigatorScreenParams } from '@react-navigation/native';
import { MainTabsParamList } from './MainTabsParamList';

export type MainStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
  MyButik: {
    userId: string;
  };
  Beauty: undefined;
  Womens: undefined;
};
