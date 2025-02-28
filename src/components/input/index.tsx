import { TextInput, TextInputProps } from "react-native";

function Input({ ...rest }: TextInputProps){
    return <TextInput {...rest}/>
}

export default Input;