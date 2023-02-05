import { useContext } from 'react';
import { Image } from 'react-native';
import { MyProfileStoreContext } from './MyProfileStoreProvider';

export function MyProfileAvatar() {
  const storeProvider = useContext(MyProfileStoreContext);

  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: storeProvider.profile.image }}
    />
  );
}
