import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={() => props.onDelete(props.Id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
