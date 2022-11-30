import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Controller } from "react-hook-form";

const CustomInput = ({
  value,
  setValue,
  name,
  placeholder,
  secureTextEntry,
  icon_name,
}) => {
  return (
    <View
      style={styles.container}
    >
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />

      <Icon style={styles.icon} name={icon_name} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginVertical: 10,
  },
  input: {
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    width: "25%",
    color: "#64348470",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default CustomInput;
