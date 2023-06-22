import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import Screen from "../components/Screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { ExpensesContext } from "../store/context/Expenses-Context";
import { useContext } from "react";

function ManageExpense({ navigation, route }) {
  const context = useContext(ExpensesContext);
  let type;
  let id;
  let executable;

  function addExpenseHandler() {
    context.addExpense("book", 19.99, "08-19-04");
    navigation.goBack();
  }

  function updateHandler(id) {
    context.updateExpense(id, "movie", 7.99, "08-19-04");
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
    executable = updateHandler.bind(this, id);
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
      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.btn, { opacity: 0.5 }]}
          onPress={cancelHandler}
        >
          <Text style={styles.text}>Cancel</Text>
        </Pressable>

        <Pressable
          style={[
            styles.btn,
            { backgroundColor: GlobalStyles.colors.lavander },
          ]}
          onPress={executable}
        >
          <Text style={styles.text}>{type}</Text>
        </Pressable>
      </View>
      <View style={styles.contentContainer}>
        <Pressable onPress={deleteHandler}>
          <Ionicons name="trash-bin" style={{ color: "red", fontSize: 35 }} />
        </Pressable>
      </View>
    </Screen>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    // backgroundColor: GlobalStyles.colors.lightPurple,
    padding: 6,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
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
