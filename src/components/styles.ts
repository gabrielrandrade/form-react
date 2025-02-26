//Quando vc vai criar só uma função sem exportar um elemento vc deve usar só o .ts ao inves de .tsx
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#993A0B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
export default styles;
