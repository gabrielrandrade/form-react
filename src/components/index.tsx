import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}></Text>
    </TouchableOpacity>
  );
}
export default Button;
