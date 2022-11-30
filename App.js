
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/screens/SignScreen/SignInScreen";
import { LinearGradient } from "expo-linear-gradient";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <View style={styles.root}>
      <LinearGradient colors={["#643484", "#a646ac"]} style={styles.root}>
        <Navigation />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
