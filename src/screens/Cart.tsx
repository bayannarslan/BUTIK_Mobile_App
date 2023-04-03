// import React, { useContext, useEffect, useState } from 'react';
// import { View, Text, Pressable } from 'react-native';
// import { MainStackParamList, MainTabsParamList } from '../navigation/types';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { supabase } from '../supabase';
// import { AuthContext } from '../provider/AuthProvider';
// import { CompositeScreenProps } from '@react-navigation/native';
// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// export type MyProfileProps = CompositeScreenProps<
//   BottomTabScreenProps<MainTabsParamList, 'Home'>,
//   NativeStackScreenProps<MainStackParamList>
// >;

// // type Props = NativeStackScreenProps<MainTabsParamList, 'Home'>;

// const Home: React.FC<MyProfileProps> = ({ navigation }) => {
//   const auth = useContext(AuthContext);
//   const userId = auth.session?.user!.id;
//   const [users, setUsers] = useState<any>([]);
//   // get all the users
//   useEffect(() => {
//     // console.log(auth.session?.access_token);
//     const fetcher = async () => {
//       // await supabase.auth.signOut();
//       const user = await supabase
//         .from('profile')
//         .select('*')
//         .filter('user_id', 'not.eq', userId);
//       if (!user.data) {
//         throw new Error('what?!');
//       }
//       setUsers(user.data);
//     };
//     fetcher();
//   }, []);

//   const productList = [
//     {
//       name: "Purse",
//       price: "100"
//     },
//     {
//       name: "Shoes",
//       price: "299"
//     }
//   ]


//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}
//     >
//       <Text>This is the Home tab</Text>
//       {productList .map((product: any) => {
//         return (
//           <Pressable
//             key={product.name}
//             style={{
//               padding: 25,
//               margin: 10,
//               backgroundColor: '#ebebeb',
//               width: '75%'
//             }}
//           >
//             <Text>{product.name}</Text>
//             <Text>{product.price}</Text>
//           </Pressable>
//         );
//       })}
//     </View>
//   );
// };

// export default Home;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {/* Render cart items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Cart;
