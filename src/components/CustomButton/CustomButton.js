import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 8,
  },
  container_PRIMARY: {
    backgroundColor: "#6B52A3",
    marginVertical: 10,
  },
  container_TERTIARY: {},

  text: {
    color: "white",
    fontSize: 17,
  },

  text_TERTIARY: {
    color: "#6B52A3",
    fontSize: 16,
  },

  text_TERMS: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
});

export default CustomButton;
