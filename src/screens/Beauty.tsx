import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Beauty: React.FC = () => {
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

export default Beauty;
