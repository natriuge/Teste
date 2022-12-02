import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ForgotPasswordScreen = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn("Recuperação de senha");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Recuperação de Senha</Text>
      <Text style={styles.line} />
      <CustomInput
        placeholder="E-mail"
        control={control}
        name="email"
        icon_name="user"
      />
      <CustomButton text="Confirmar" onPress={onConfirmPressed} />
      <CustomButton
        text="Voltar para o Login"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 0.5,
    backgroundColor: "#FFFFFF90",
    alignItems: "center",
    borderRadius: 20,
    margin: 30,
    padding: 30,
    marginVertical: 100,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#6B52A3",
    margin: 15,
  },
  text: {
    fontSize: 16,
    color: "white",
    margin: 10,
  },
  line: {
    backgroundColor: "#a646ac40",
    margin: 5,
    height: 2,
    width: 190,
  },
});

export default ForgotPasswordScreen;
