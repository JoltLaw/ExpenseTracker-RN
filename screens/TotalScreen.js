import { FlatList } from "react-native";
import Screen from "../components/Screen";
import ParamsBar from "../components/ParamsBar";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import ExpenseItem from "../components/ExpenseItem";
import AddExpense from "../components/AddExpense";
import { ExpensesContext } from "../store/context/Expenses-Context";
import { useContext } from "react";
const Stack = createStackNavigator();

function TotalScreenComponent({ navigation }) {
  const context = useContext(ExpensesContext);
  let total = 0;
  context.expenses.forEach((expense) => {
    total = total + expense.amount;
  });
  const data = context.expenses;

  return (
    <Screen>
      <ParamsBar timeFrame={"All Time"} amount={total.toFixed(2)}></ParamsBar>
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
    </Screen>
  );
}

function TotalScreen({ navigation }) {
  function openManageExpense() {
    navigation.navigate("Manage Expense", { expenseId: -1 });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="All Expenses"
        component={TotalScreenComponent.bind(navigation)}
        options={{
          headerStyle: { backgroundColor: GlobalStyles.colors.lightPurple },
          headerTintColor: GlobalStyles.colors.textColor,
          headerRight: ({ color, size }) => (
            <AddExpense color={color} size={size} onPress={openManageExpense} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default TotalScreen;
