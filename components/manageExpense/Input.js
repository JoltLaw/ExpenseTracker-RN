import { TextInput } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";

function Input({ label, style, textInputConfig, invalid }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiLine);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={[inputStyles, invalid && styles.invalidInput]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.textColor,
    marginBottom: 4,
  },
  invalidLabel: {
    color: GlobalStyles.colors.erorrText,
  },
  input: {
    backgroundColor: GlobalStyles.colors.lavander,
    color: GlobalStyles.colors.darkPurple,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    width: "100%",
  },
  invalidInput: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.erorrText,
  },
  multiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
