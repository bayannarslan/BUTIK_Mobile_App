import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  MainTabsParamList,
  MainStackParamList
} from '../../../navigation/types';

export type MyButikProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabsParamList, 'MyButik'>,
  NativeStackScreenProps<MainStackParamList>
>;
