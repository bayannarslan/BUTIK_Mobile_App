import { MyButikProps } from './types/MyButikProfileProps';
import { MyProfileName } from './MyButikProfileName';
import  MyButikStoreProvider  from '../../context/MyButikStoreProvider';

const MyButik: React.FC<MyButikProps> = () => {
  return (
    <MyButikStoreProvider>
      <MyProfileName />
    </MyButikStoreProvider>
  );
};

export default MyButik;
