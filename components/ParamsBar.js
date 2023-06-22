import { View, Text, StyleSheet } from "react-native";

function ParamsBar({ timeFrame, amount }) {
  return (
    <View style={stlyes.container}>
      <Text style={stlyes.timePeriodText}>{timeFrame}</Text>
      <Text style={stlyes.amountText}>${amount}</Text>
    </View>
  );
}

export default ParamsBar;

const stlyes = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "95%",
    backgroundColor: "#bc94b7",
    borderRadius: 8,
    padding: 5,
    marginBottom: 5,
  },

  timePeriodText: {
    fontSize: 16,
    color: "#faeff9",
  },

  amountText: {
    fontSize: 18,
    color: "#594457",
    fontWeight: "bold",
  },
});
