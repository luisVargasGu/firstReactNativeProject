import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    width: "45%",
  },
});

export default GoalInput;
