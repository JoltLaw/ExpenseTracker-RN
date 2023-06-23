import { View, Text, FlatList } from "react-native";
import ParamsBar from "../components/ParamsBar";
import Screen from "../components/Screen";
import ExpenseItem from "../components/ExpenseItem";
import expenseItem from "../models/expenseItem";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import AddExpense from "../components/AddExpense";
import { ExpensesContext } from "../store/context/Expenses-Context";
import { useContext } from "react";
import ExpenseList from "../components/ExpenseList";
const Stack = createStackNavigator();

function RecentScreenComponent({ navigation }) {
  const context = useContext(ExpensesContext);

  const today = new Date();

  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );

  const pastSevenDays = context.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate > lastWeek;
  });

  let total = 0;
  context.expenses.forEach((expense) => {
    total = total + expense.amount;
  });

  return (
    <Screen>
      <ParamsBar timeFrame={"Last 7 Days"} amount={total.toFixed(2)} />
      <ExpenseList navigation={navigation} data={pastSevenDays} />
    </Screen>
  );
}

function RecentScreen({ navigation }) {
  function openManageExpense() {
    navigation.navigate("Manage Expense", { expenseId: -1 });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recent Expenses"
        component={RecentScreenComponent.bind(navigation)}
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

export default RecentScreen;
