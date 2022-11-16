import { useState } from "react";
import CheckBox from "expo-checkbox";
import { FontAwesome } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";

import { theme } from "../../style/theme";
import { style } from "./style";
import { Task } from "../../@types/task";
import { api } from "../../services/api";
import { useAuthentication } from "../../context/AuthContext";
import { AxiosError } from "axios";

interface Props {
  title: string;
  status: "open" | "closed";
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export default function ListItem({ title, status, tasks, setTasks }: Props) {
  const { token } = useAuthentication()
  const handleTaskComplete = async () => {
    const currentTasks = tasks.map((task) => task.title === title ?
      ({ _id: task._id, status: task.status, title: task.title })
      : task);

    const currentTask = tasks.find(task => task.title === title ?? task._id)

    setTasks(currentTasks);

    try {
      const response = await api.delete(`/tasks/delete/${currentTask!._id}`, {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      if(response) {
        alert("Tarefa excluida com sucesso!")
      }
    } catch (error) {
      alert((error as AxiosError).response?.data);
    }
  }

  const deleteTask = () => {
    const currentTasks = tasks.filter((task) => task.title !== title && task);

    alert(`"${title}" deletado com sucesso!`);

    setTasks(currentTasks);
  }

  return (
    <View style={style.container}>
      <View style={style.content}>
        <CheckBox 
          style={style.checkbox}
          value={status === "closed" ? true : false}
          onValueChange={handleTaskComplete}
          color={status === "closed" ? theme.colors.primary : undefined}
        />
        <Text 
          style={[
            style.text, 
            { 
              textDecorationLine: status === "closed" ? "line-through" : "none"
            }
          ]}
        >
          { title }
        </Text>
      </View>
      <TouchableOpacity onPress={deleteTask}>
        <FontAwesome 
          name="trash-o" 
          size={24} 
          color={theme.colors.text}
        />
      </TouchableOpacity>
    </View>
  );
}