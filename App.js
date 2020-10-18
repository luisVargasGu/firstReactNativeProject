import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/Goalitem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalKey) => {
    setCourseGoals((currGoals) => {
      return currGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}></Button>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      ></GoalInput>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            Id={itemData.item.key}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          ></GoalItem>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
