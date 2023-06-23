import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { useState } from "react";

function ManageExpenseForm({ executable, type, cancelHandler, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: { value: defaultValues ? defaultValues.date : "", isValid: true },
    reason: { value: defaultValues ? defaultValues.reason : "", isValid: true },
  });

  function changeHanlder(inputIdentifier, enteredText) {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: enteredText, isValid: true },
      };
    });
  }

  function submitHandler() {
    expenseData = {
      amount: +inputValues.amount.value,
      date: inputValues.date.value,
      reason: inputValues.reason.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const date = new Date(expenseData.date.value);
    const dateIsValid =
      new Date(inputValues.date.value).toString() !== "Invalid Date";
    const reasonValid = expenseData.reason.trim().length > 0;

    if (amountIsValid && dateIsValid && reasonValid) {
      executable(expenseData);
    } else {
      setInputValues((prevState) => {
        return {
          amount: { value: prevState.amount.value, isValid: amountIsValid },
          date: { value: prevState.date.value, isValid: dateIsValid },
          reason: { value: prevState.reason.value, isValid: reasonValid },
        };
      });

      return;
    }
  }

  const formIsInvalid =
    !inputValues.amount.isValid ||
    !inputValues.date.isValid ||
    !inputValues.amount.isValid;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense</Text>
      <View style={styles.amountNDateContainer}>
        <Input
          label="Amount"
          style={styles.rowInput}
          invalid={!inputValues.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeHanlder.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          invalid={!inputValues.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeHanlder.bind(this, "date"),
            value: inputValues.date.value,
          }}
        />
      </View>
      <Input
        label="Reason"
        invalid={!inputValues.reason.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: changeHanlder.bind(this, "reason"),
          value: inputValues.reason.value,
        }}
      />
      {formIsInvalid && <Text style={styles.erorrText}>Invalid Input!</Text>}

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
          onPress={submitHandler}
        >
          <Text style={styles.text}>{type}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ManageExpenseForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  amountNDateContainer: {
    width: "100%",
    flexDirection: "row",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.textColor,
    marginVertical: 24,
    textAlign: "center",
  },
  btn: {
    padding: 6,
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  erorrText: {
    textAlign: "center",
    color: GlobalStyles.colors.erorrText,
    margin: 8,
  },
  text: {
    color: GlobalStyles.colors.textColor,
    fontSize: 18,
  },
});
