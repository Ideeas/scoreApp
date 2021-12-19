import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { styles } from "./style";
import { UserData } from "./Container";

import Input from "../../components/Input";

interface Props {
    handleSignUp: (user: UserData) => void
}

const mock = {
    name: 'Teste', 
    email: 'test@email', 
    password: '123', 
    address: '1234', 
    cpf: '123456', 
    occupation: 'Job'
}

export default function SignUpView ({ handleSignUp }: Props) {
    return (
        <View style={styles.container}>
            <Text h2 h2Style={{fontWeight: 'bold'}}>Register</Text>
            <View>
            <Input label="Name" placeholder="Name" name="user-o" size={28} color="#000000"/>
            <Input label="Email" placeholder="Email" name="envelope-o" size={28} color="#000000"/>
            </View>
            <Button title="SignUp" type="outline" onPress={() => {handleSignUp(mock)}}/>
        </View>
    )
}