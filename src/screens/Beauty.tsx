import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Beauty: React.FC = () => {
  const clothingList = [
    {
      name: "Beauty 1",
      price: "$100",
      img: '../images/clearlipgloss.png'
    },
    {
      name: "Beauty 2",
      price: "$299",
      img: '../images/liquideyeliner.png'
    },
    {
      name: "Beauty 3",
      price: "$350",
      img: '../images/sheermattelipstick.png'
    },
    {
      name: "Beauty 4",
      price: "$500",
      img: '../images/stretchconcealer.png'
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {}
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

export default Beauty;
