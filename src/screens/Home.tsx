import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Pressable, Image, TextInput, ScrollView } from 'react-native';
import { MainStackParamList, MainTabsParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { supabase } from '../supabase';
import { AuthContext } from '../provider/AuthProvider';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import beautycard from '../images/beautycard.png';
import womenscard from '../images/womenscard.png';
import BeautyScreen from '../screens/Beauty';
import WomenScreen from '../screens/Womens';


export type MyProfileProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabsParamList, 'Home'>,
  NativeStackScreenProps<MainStackParamList>
>;

const Home: React.FC<MyProfileProps> = (props) => {
  const auth = useContext(AuthContext);
  const userId = auth.session?.user!.id;
  const [users, setUsers] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const productList = [
    {
      name: 'Beauty',
      image: beautycard,
      //price: '100',
    },
    {
      name: "Womens",
      image: womenscard,
      //price: '299',
    },
  ];

  // get all the users
  useEffect(() => {
    const fetcher = async () => {
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



  // Navigate to a different screen based on the product name
  async function handleProductNavigation(name: any) {
    return props.navigation.navigate(name)
  }

  const filteredProductList = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView
    contentContainerStyle={{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }}
  >
  <Text
    style={{
      marginTop: 10,
      left: 0,
      right: 0,
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333333',
    }}
  >Shop</Text>

  <TextInput
    style={{
      width: '90%',
      height: 40,
      color: '#c8c7c7',
      backgroundColor: '#ffffff',
      borderColor:'#ececec',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    }}
    placeholder="Search"
    onChangeText={setSearchQuery}
    value={searchQuery}
  />
  {filteredProductList.map((product: any) => {
    return (
      <Pressable
        key={product.name}
        style={{
          marginTop: 10,
          backgroundColor: '#fff',
          width: '100%',
        }}
        onPress={() => handleProductNavigation(product.name)}
      >
        <View style={{ position: 'relative' }}>
          <Image source={product.image} style={{ width: '100%', height: 412 }} />
        </View>
        {/*<Text>{product.price}</Text>*/}
      </Pressable>
    );
  })}
</ScrollView>
  );
};

export default Home;
