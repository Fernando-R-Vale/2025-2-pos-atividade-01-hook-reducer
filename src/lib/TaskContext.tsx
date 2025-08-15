"use client"

import { createContext, useReducer, useContext, useEffect } from "react"
import { taskReducer } from "./taskReducer"
import { Task } from "@/types/task"

interface TaskContextProps {
  state: Task[]
  dispatch: React.Dispatch<any>
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, [])

  useEffect(() => {
    const saved = localStorage.getItem("tasks")
    if (saved) {
      dispatch({ type: "LOAD", payload: JSON.parse(saved) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state))
  }, [state])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) throw new Error("useTasks deve ser usado dentro de TaskProvider")
  return context
}
