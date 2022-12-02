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
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(0);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    formState: { errors },
    watch,
  } = useForm();

  const typedEmail = "abc@epistemic";
  const typedPassword = "epistemic";

  const onSignInPressed = () => {
    if (counter > 3) {
      navigation.navigate("Block");
    }
    if (email === typedEmail && password === typedPassword) {
      navigation.navigate("Home");
    } else {
      setCounter(counter + 1);
    }
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
        control={control}
        onChangeHandler={setEmail}
        rules={{
          required: "O uso do e-mail é obrigatório",
          validate: (value) => [value === typedEmail || "E-mail está incorreto", console.log(value)],
        }}
        name="email"
        icon_name="user"
      />
      <CustomInput
        placeholder="Senha"
        control={control}
        onChangeHandler={setPassword}
        rules={{
          required: "O uso da senha é obrigatório",
          minLength: {
            value: 5,
            message: "A senha deve conter no mínimo 5 caracteres",
          },
          validate: (value) =>
            value === typedPassword || "Senha está incorreta",
        }}
        name="password"
        icon_name="lock1"
        secureTextEntry={true}
      />
      <CustomButton text="ENTRAR" onPress={onSignInPressed} />
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
