import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const [ tasks, setTasks ] = useState<Task[]>([])

  function handleAddTask(newTaskTitle: string){
    //TODO - add new task if it's not empty
    if(newTaskTitle !== ""){
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      setTasks(oldState => [...oldState, data])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    tasks.map(task => {
      if(task.id === id) {
        return task.done = !task.done
      }
      return task
    })
    setTasks([...tasks])
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      tasks => tasks.id !== id
    ))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}