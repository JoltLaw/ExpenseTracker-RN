import { View, StyleSheet, Pressable } from "react-native";
import Screen from "../components/Screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { ExpensesContext } from "../store/context/Expenses-Context";
import { useContext } from "react";
import ManageExpenseForm from "../components/manageExpense/ManageExpenseForm";

function ManageExpense({ navigation, route }) {
  const context = useContext(ExpensesContext);
  let type;
  let id;
  let executable;
  let trashBen = null;

  let selectedExpense;

  function addExpenseHandler(data) {
    context.addExpense(data.reason, data.amount, data.date);
    navigation.goBack();
  }

  function updateHandler(id, data) {
    context.updateExpense(id, data.reason, data.amount, data.date);
    navigation.goBack();
  }

  if (route.params.expenseId < 0) {
    navigation.setOptions({ title: "Add Expense" });
    type = "Add";
    executable = addExpenseHandler;
  } else {
    navigation.setOptions({ title: "Update Expense" });
    id = route.params.expenseId;
    type = "Update";
    selectedExpense = context.expenses.find(
      (expense) => context.expenses.indexOf(expense) == id
    );

    executable = updateHandler.bind(this, id);
    trashBen = (
      <Pressable onPress={deleteHandler}>
        <Ionicons name="trash-bin" style={{ color: "red", fontSize: 35 }} />
      </Pressable>
    );
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteHandler() {
    context.removeExpense(id);
    navigation.goBack();
  }
  return (
    <Screen>
      <ManageExpenseForm
        executable={executable}
        type={type}
        cancelHandler={cancelHandler}
        defaultValues={selectedExpense}
      />
      <View style={styles.contentContainer}>{trashBen}</View>
    </Screen>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: "white",
    width: "100%",
    paddingTop: 15,
    alignItems: "center",
  },
  text: {
    color: GlobalStyles.colors.textColor,
    fontSize: 18,
  },
});
