import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../assets/styles/GlobalStyles";

function AddExpense({ onPress }) {
  return (
    <Pressable
      style={({ pressed }) => {
        return pressed ? [styles.container, styles.pressed] : styles.container;
      }}
      onPress={onPress}
    >
      <Ionicons name="add" style={styles.icon} />
    </Pressable>
  );
}

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  icon: {
    color: GlobalStyles.colors.textColor,
    fontSize: 35,
  },
  pressed: {
    opacity: 0.5,
  },
});
