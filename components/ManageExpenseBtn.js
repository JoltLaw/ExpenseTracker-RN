import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../assets/styles/GlobalStyles";

function ManageExpenseBtn({ title }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default ManageExpenseBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.darkPurple,
  },
  text: {
    color: GlobalStyles.colors.darkPurple,
  },
});
