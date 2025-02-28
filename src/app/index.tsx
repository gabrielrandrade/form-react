import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button/index"
import Input from "../components/input";
import { useState } from "react";

function Index() {
  const [name, setName] = useState<String>(""); // Inferindo a tipagem
  const [name1, setName1] = useState(""); // Tipo  Explicitamente declarado
  

  function handleSubmit() {
    const name = "Gabriel";
    alert(`Olá, ${name}`);
  }

  function onChangeText(text:string){
    console.log(text);
    setName(text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {name}</Text>
      <Input label={"Nome"} onChangeText={(text) => onChangeText(text)}/>
      <Input label={"Idade"} />
      <Button label={"Enviar"} onPress={handleSubmit} activeOpacity={1}/>
      <Button label={"Salvar"} onPress={handleSubmit} />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 26,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 12,
  },
});
export default Index;
