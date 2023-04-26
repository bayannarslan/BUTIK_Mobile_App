import { useContext } from 'react';
import { Text } from 'react-native';
import { AuthenticationContext } from '../../screens/Authentication/provider/index';

export function MyProfileLastSeen() {
    const authProvider = useContext(AuthenticationContext);

    return(
        <Text
        style={{
            fontSize: 15,
            marginTop: 5,
        }}
        >
            {'Last Seen: Today' }
        </Text>
    );
}