import { Image, ScrollView } from "react-native";
import { Modalize } from "react-native-modalize";
import { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

import { style } from "./style";
import { theme } from "../../style/theme";

import Logo from "../../../assets/logo.png"

import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import ListItem from "../../components/ListItem";
import RoudedButton from "../../components/RoundedButton";

import { api } from "../../services/api";

import { useAuthentication } from "../../context/AuthContext";

import { Task } from "../../@types/task";
import { TaskResponse } from "../../@types/responses";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const modalizeRef = useRef<Modalize>(null);

  const { user, token } = useAuthentication()

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleTasks = async () => {
    const { data } = await api.get<TaskResponse>(`/tasks/find-by-user/${user!._id}`, { 
      headers: { 
        Authorization: "Bearer " + token
      }
    });

    setTasks(data.tasks);
  }

  useEffect(() => {
    handleTasks();
  }, []);

  return (
    <LinearGradient 
      colors={theme.colors.linearGradient} 
      style={style.container}
    >
      <RoudedButton onPress={onOpen} />

      <Image source={Logo} style={style.image}/>

      <ScrollView style={style.content}>
        {
          !tasks || tasks.length <= 0 ? 
            <Loading />
          :
          tasks.map(task => (
            <ListItem 
              key={task._id}
              title={task.title} 
              tasks={tasks}
              setTasks={setTasks}
              status={task.status} 
            />
          ))
        }
      </ScrollView>
      <Modal ref={modalizeRef}>
        <Text>
          Nova tarefa
        </Text>

        <View>
          <Input placeholder="Ir ao mercado"/>
          <Button title="Cadastrar"/>
        </View>
      </Modal>
    </LinearGradient >
  );
}