import { useContext } from 'react';
import { Image } from 'react-native';
import { MyButikStoreContext }  from '../../context/MyButikStoreProvider';
import { ContextProps } from '../../context/ContextProps';

export function MyProfileAvatar() {
  const storeProvider: any | ContextProps = useContext(MyButikStoreContext);

  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: storeProvider.profile.image }}
    />
  );
}
