import { TextInput, TextInputProps } from "react-native";
import styles from "./style";


function Input({ ...rest }: TextInputProps) {
  return <TextInput style={styles.input} {...rest} />;
}

export default Input;
