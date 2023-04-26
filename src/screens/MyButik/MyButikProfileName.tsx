import { useContext } from 'react';
import { Text } from 'react-native';
import { MyButikStoreContext } from '../../context/MyButikStoreProvider';

export function MyProfileName() {
  const storeProvider = useContext(MyButikStoreContext);

  return (
    <Text
      style={{
        fontSize: 25,
        marginTop: 15,
        
      }}
    >
      {storeProvider?.profile.name ? storeProvider?.profile?.name : 'Your Profile' }
    </Text>
  );
}
