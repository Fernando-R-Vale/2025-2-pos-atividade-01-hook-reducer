"use client"
import Link from "next/link"
import { useTasks } from "@/lib/TaskContext"
import { Button } from "@/components/ui/button"

export default function ListaTarefas() {
  const { state, dispatch } = useTasks()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <Link href="/tarefas/nova">
        <Button className="mb-4">Nova Tarefa</Button>
      </Link>
      <ul className="space-y-2">
        {state.map(task => (
          <li key={task.id} className="border p-3 rounded">
            <div className="flex justify-between">
              <div>
                <strong>{task.titulo}</strong> — {task.descricao}
                {task.concluida && <span className="text-green-600 ml-2">(Concluída)</span>}
              </div>
              <div className="space-x-2">
                <Link href={`/tarefas/${task.id}`}>
                  <Button variant="outline">Editar</Button>
                </Link>
                <Link href={`/tarefas/${task.id}/apagar`}>
                  <Button variant="destructive">Apagar</Button>
                </Link>
                <Button
                  variant="secondary"
                  onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}
                >
                  {task.concluida ? "Desmarcar" : "Concluir"}
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
