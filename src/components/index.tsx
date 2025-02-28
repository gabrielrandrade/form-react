import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps & {
    label:String;
};

function Button({label, ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.button} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
export default Button;
