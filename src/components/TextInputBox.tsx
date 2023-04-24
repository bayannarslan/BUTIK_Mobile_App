import { StyleSheet } from 'react-native';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData
} from 'react-native';

import { Input } from '@rneui/themed';

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  secureTextEntry?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  containerStyle?: any;
  inputStyle?: any;
  style?: any;
}

const TextInputBox: React.FC<Props> = (props) => {
  return (
    <Input
      onChangeText={props.setValue}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
      value={props.value}
      secureTextEntry={props.secureTextEntry || false}
      autoCorrect={false}
      autoCapitalize="none"
      containerStyle={props.containerStyle}
      inputStyle={props.inputStyle}
      style={props.style}
    />
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10
//   }
// });

export default TextInputBox;
