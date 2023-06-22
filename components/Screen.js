import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../assets/styles/GlobalStyles";

function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: GlobalStyles.colors.darkPurple,
  },
});
