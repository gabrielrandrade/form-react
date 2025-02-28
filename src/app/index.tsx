import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import Button from "@/components/button/index";
import Input from "@/components/input";

function Index() {
  const [name, setName] = useState("usuário");

  function handleSubmit() {
    const name = "Gabriel";
    alert(`Olá, ${name}`);
  }

  function handleNext() {
    router.navigate("/onboarding");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {name}</Text>
      <Input label={"Nome"} onChangeText={setName} />
      <Input label={"Idade"} />
      <Button label={"Saudação"} onPress={handleSubmit} activeOpacity={1} />
      <Button label={"Continuar"} onPress={handleNext} />
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
