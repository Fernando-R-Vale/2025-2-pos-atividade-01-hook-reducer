"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTasks } from "@/lib/TaskContext"
import { Task } from "@/types/task"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { v4 as uuidv4 } from "uuid"

export default function NovaTarefa() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const { dispatch } = useTasks()
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nova: Task = {
      id: uuidv4(),
      titulo,
      descricao,
      concluida: false,
    }
    dispatch({ type: "ADD", payload: nova })
    router.push("/tarefas")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h1 className="text-xl font-bold">Nova Tarefa</h1>
      <Input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} required />
      <Textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <Button type="submit">Salvar</Button>
    </form>
  )
}
