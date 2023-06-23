import { View, Text, FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import ExpenseItem from "./ExpenseItem";
import { ExpensesContext } from "../store/context/Expenses-Context";
import { useContext } from "react";

function ExpenseList({ navigation, data }) {
  const context = useContext(ExpensesContext);

  if (data.length <= 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No expenses yet</Text>
      </View>
    );
  } else {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <ExpenseItem
              id={data.indexOf(item)}
              reason={item.reason}
              amount={item.amount}
              date={item.date}
              navi={navigation}
            />
          );
        }}
      />
    );
  }
}

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: GlobalStyles.colors.textColor,
  },
});
