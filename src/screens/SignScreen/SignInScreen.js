import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  TextInput,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import epistemicLogo from "../../../assets/images/epistemic-logo.png";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import api from "../../../api/api";


const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    console.warn("Cadastre-se");

  };

  const onTermsPressed = () => {
    console.warn("Termos de Uso");
  };

  return (
    <View style={styles.root}>
      <Image source={epistemicLogo} style={styles.logo} />

      <CustomInput
        placeholder="E-mail"
        rules={{ required: "O uso do e-mail é obrigatório" }}
        name="email"
        icon_name="user"
      />
      <CustomInput
        placeholder="Senha"
        rules={{
          required: "O uso da senha é obrigatório",
          minLength: {
            value: 5,
            message: "A senha deve conter no mínimo 5 caracteres",
          },
        }}
        name="password"
        icon_name="lock1"
        secureTextEntry={true}
      />

      <CustomButton text="ENTRAR" onPress={handleSubmit(onSignInPressed)} />
      <CustomButton
        text="Esqueceu sua senha? Clique Aqui"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
      <Text style={styles.line} />
      <CustomButton
        text="Não tem uma conta? Cadastre-se"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
      <CustomButton
        text="Termos de Uso"
        onPress={onTermsPressed}
        type="TERMS"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 0.7,
    backgroundColor: "#FFFFFF90",
    alignItems: "center",
    borderRadius: 20,
    margin: 30,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
    bottom: -90,
  },
  logo: {
    width: "55%",
    resizeMode: "contain",
    flex: 1,
    margin: 10,
  },
  line: {
    backgroundColor: "#a646ac40",
    margin: 5,
    height: 2,
    width: 190,
  },
});

export default SignInScreen;
