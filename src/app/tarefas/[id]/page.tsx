"use client"
import { useRouter, useParams } from "next/navigation"
import { useState } from "react"
import { useTasks } from "@/lib/TaskContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function EditarTarefa() {
  const { id } = useParams()
  const { state, dispatch } = useTasks()
  const tarefa = state.find(t => t.id === id)
  const router = useRouter()

  const [titulo, setTitulo] = useState(tarefa?.titulo || "")
  const [descricao, setDescricao] = useState(tarefa?.descricao || "")

  if (!tarefa) return <p>Tarefa não encontrada.</p>

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    dispatch({ type: "UPDATE", payload: { ...tarefa, titulo, descricao } })
    router.push("/tarefas")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h1 className="text-xl font-bold">Editar Tarefa</h1>
      <Input value={titulo} onChange={e => setTitulo(e.target.value)} required />
      <Textarea value={descricao} onChange={e => setDescricao(e.target.value)} />
      <Button type="submit">Salvar</Button>
    </form>
  )
}
