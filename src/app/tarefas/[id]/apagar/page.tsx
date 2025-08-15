"use client"
import { useRouter, useParams } from "next/navigation"
import { useTasks } from "@/lib/TaskContext"
import { Button } from "@/components/ui/button"

export default function ApagarTarefa() {
  const { id } = useParams()
  const { state, dispatch } = useTasks()
  const tarefa = state.find(t => t.id === id)
  const router = useRouter()

  if (!tarefa) return <p>Tarefa não encontrada.</p>

  function handleDelete() {
    dispatch({ type: "DELETE", payload: tarefa.id })
    router.push("/tarefas")
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Apagar Tarefa</h1>
      <p>Tem certeza que deseja apagar <strong>{tarefa.titulo}</strong>?</p>
      <div className="space-x-2 mt-3">
        <Button variant="destructive" onClick={handleDelete}>Apagar</Button>
        <Button variant="outline" onClick={() => router.push("/tarefas")}>Cancelar</Button>
      </div>
    </div>
  )
}
