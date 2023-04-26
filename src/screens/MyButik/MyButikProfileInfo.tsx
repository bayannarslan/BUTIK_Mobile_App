import { useContext } from 'react';
import { Text } from 'react-native';
import { AuthenticationContext } from '../../screens/Authentication/provider/index';

export function MyProfileInfo() {
    const authProvider = useContext(AuthenticationContext);

    return(
        <Text
        style={{
            fontSize: 15,
            marginTop: 25,
        }}
        >
            {'Joined: 2023/02/23' }
        </Text>
    );
}