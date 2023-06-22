import { View, Text, StyleSheet, Pressable } from "react-native";

function ExpenseItem({ id, reason, amount, date, navi }) {
  function onPressHandler() {
    navi.navigate("Manage Expense", { expenseId: id });
  }
  return (
    <Pressable style={styles.container} onPress={onPressHandler} id={id}>
      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, { fontWeight: "bold", fontSize: 16 }]}>
          {reason}
        </Text>
        <Text style={[styles.infoText, { fontSize: 10, letterSpacing: 1 }]}>
          {date}
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>${amount}</Text>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5e4fb3",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  infoContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  infoText: {
    color: "white",
  },
  amountContainer: {
    justifyContent: "flex-end",
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
  },
  amountText: {
    color: "#594457",
    fontWeight: "bold",
  },
});
