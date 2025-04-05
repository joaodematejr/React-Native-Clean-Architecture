import React from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from '../components/TaskItem';

export const TaskScreen: React.FC = () => {
  const { tasks, title, setTitle, addTask, toggleTask, removeTask } = useTasks();

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
        style={styles.input}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={removeTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 5 },
});