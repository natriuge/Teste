import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  icon_name,
  onChangeHandler
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={value => onChangeHandler(value)}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, {}]}
              secureTextEntry={secureTextEntry}
            />

            <Icon style={styles.icon} name={icon_name} size={20} />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {" "}
              {error.message || "Erro"}
            </Text>
          )}
        </>
      )}
    />
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
