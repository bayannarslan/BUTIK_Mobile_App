import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Womens: React.FC = () => {
  const makeupList = [
    {
      name: "Dress 1",
      price: "$100",
      img: '../images/plaidmididress.png'
    },
    {
      name: "Dress 2",
      price: "$299",
      img: '../images/hemminidress.png'
    },
    {
      name: "Dress 3",
      price: "$599",
      img: '../images/corsetmididress.png'
    }
  ]
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

export default Womens;
