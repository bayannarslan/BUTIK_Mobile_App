import { useContext } from 'react';
import { Pressable, Text } from 'react-native';
import  MyButikOrders  from '../../screens/MyButik/MyButikOrders';


export function MyButikOrdersButton({navigation}: any) {

    function pressHandler () {
        navigation.navigate('MyButikOrders');
    }
    return (
        <Pressable
          onPress={pressHandler}
          style={{
            backgroundColor: '#E2A5AE',
            padding: 20,
            margin: 50,
            width: 315,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 24,
            }}
          >
            View Orders
          </Text>
        </Pressable>
      );
}