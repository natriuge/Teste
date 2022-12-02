import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home</Text>
      <Icon name="smileo" size={90} color="#64348470" margin={50} />
      <Text style={styles.title}>Você está logado!</Text>
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

export default HomeScreen;
