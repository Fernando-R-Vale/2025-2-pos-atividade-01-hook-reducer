import { Task } from "@/types/task"

export type TaskAction =
  | { type: "ADD"; payload: Task }
  | { type: "UPDATE"; payload: Task }
  | { type: "DELETE"; payload: string }
  | { type: "TOGGLE"; payload: string }
  | { type: "LOAD"; payload: Task[] }

export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
    case "UPDATE":
      return state.map(t => t.id === action.payload.id ? action.payload : t)
    case "DELETE":
      return state.filter(t => t.id !== action.payload)
    case "TOGGLE":
      return state.map(t =>
        t.id === action.payload ? { ...t, concluida: !t.concluida } : t
      )
    case "LOAD":
      return action.payload
    default:
      return state
  }
}
