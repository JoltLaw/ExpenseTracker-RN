import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import ExpensesContextProvider from "./store/context/Expenses-Context";

import ManageExpenses from "./components/ManageExpenses";
import ManageExpense from "./screens/ManageExpense";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Manage Expenses"
              component={ManageExpenses}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Manage Expense"
              component={ManageExpense}
              options={{
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.lightPurple,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
