import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import RecentScreen from "../screens/RecentScreen";
import TotalScreen from "../screens/TotalScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { StyleSheet, View } from "react-native";

const Tab = createMaterialBottomTabNavigator();

function ManageExpenses({ route, navigation }) {
  // Redirtect user to manage Expense page

  // Setting header options
  navigation.setOptions({});

  return (
    <Tab.Navigator
      barStyle={styles.tabBar}
      activeColor="#e4a900"
      inactiveColor={GlobalStyles.colors.textColor}
    >
      <Tab.Screen
        name="Recent"
        component={RecentScreen}
        options={{
          tabBarIcon: ({ color, size = 25 }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="All"
        component={TotalScreen}
        options={{
          tabBarIcon: ({ color, size = 25 }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: GlobalStyles.colors.lightPurple,
    color: GlobalStyles.colors.textColor,
  },
  iconContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
