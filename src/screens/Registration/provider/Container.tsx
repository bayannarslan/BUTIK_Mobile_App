import { View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = (props) => {
  return <View>{props.children}</View>;
};
