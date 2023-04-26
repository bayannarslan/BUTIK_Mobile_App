import { MyButikProps } from './types/MyButikProfileProps';
import { MyProfileName } from './MyButikProfileName';
import { MyProfileInfo } from './MyButikProfileInfo';
import  MyButikStoreProvider  from '../../context/MyButikStoreProvider';
import { MyButikOrdersButton } from './MyButikOrdersButton';
import { MyProfileLastSeen } from './MyButikProfileLastSeen';

const MyButik: React.FC<MyButikProps> = () => {
  return (
    <MyButikStoreProvider>
      <MyProfileName />
      <MyProfileInfo />
      <MyProfileLastSeen />
      <MyButikOrdersButton />
    </MyButikStoreProvider>


    
  );
};

export default MyButik;
