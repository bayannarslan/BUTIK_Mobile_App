import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { MainStackParamList, MainTabsParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { supabase } from '../supabase';
import { AuthContext } from '../provider/AuthProvider';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import plaidDress from '../images/plaidmididress.png';
import lipstick from "../images/sheermattelipstick.png";
import hemDress from "../images/hemminidress.png";
import liner from "../images/liquideyeliner.png";
import concealer from "../images/stretchconcealer.png";
import likedheart from "../images/liked_heart.png"
import {Image} from 'react-native';

export type MyProfileProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabsParamList, 'Likes'>,
  NativeStackScreenProps<MainStackParamList>
>;

// type Props = NativeStackScreenProps<MainTabsParamList, 'Home'>;

const Likes: React.FC<MyProfileProps> = ({ navigation }) => {
  const auth = useContext(AuthContext);
  const userId = auth.session?.user!.id;
  const [users, setUsers] = useState<any>([]);
  // get all the users
  useEffect(() => {
    // console.log(auth.session?.access_token);
    const fetcher = async () => {
      // await supabase.auth.signOut();
      const user = await supabase
        .from('profile')
        .select('*')
        .filter('user_id', 'not.eq', userId);
      if (!user.data) {
        throw new Error('what?!');
      }
      setUsers(user.data);
    };
    fetcher();
  }, []);

  const productList = [
    {
      name: "Eye Liner",
      price: "$100.00",
      img: liner
    },
    {
      name: "Concealer",
      price: "$299.99",
      img: concealer
    },
    {
      name: "Lip Stick",
      price: "$450.00",
      img: lipstick
    },
    {
      name: "Hemmin Dress",
      price: "$500.00",
      img: hemDress
    },
    {
      name: "Plaid Dress",
      price: "$700.00" ,
      img: plaidDress
    }
  ]

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      marginLeft: '100%',
      marginTop: '50%'
    },
  });


  return (

    <ScrollView
    contentContainerStyle={{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }}> 
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Liked Products</Text>
      {productList .map((product: any) => {
        return (
          <Pressable
            key={product.name}
            style={{
              padding: 25,
              margin: 10,
              backgroundColor: '#ffffff',
              width: '75%'
            }}
          >
          
            <Image source={product.img} />
            <Image source={likedheart}/>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
          </Pressable>
        );
      })}
    </View>
    </ScrollView>
  );
};

export default Likes;