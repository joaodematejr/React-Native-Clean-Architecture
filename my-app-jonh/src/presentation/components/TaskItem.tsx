import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Task } from '../../data/models/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <View style={styles.container}>
    <Text style={task.completed ? styles.completed : styles.text}>
      {task.title}
    </Text>
    <View style={styles.buttons}>
      <Button title={task.completed ? 'Undo' : 'Done'} onPress={() => onToggle(task.id)} />
      <Button title="Delete" onPress={() => onDelete(task.id)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  text: {},
  completed: { textDecorationLine: 'line-through' },
  buttons: { flexDirection: 'row' },
});