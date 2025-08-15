// src/app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-3xl font-bold">Gerenciador de Tarefas</h1>
      <p className="text-lg text-muted-foreground">
        App feito para a atividade de Hooks + Reducer com Next.js.
      </p>

      <div className="flex gap-4">
        <Link href="/tarefas">
          <Button>Ver Tarefas</Button>
        </Link>
        <Link href="/tarefas/nova">
          <Button variant="outline">Nova Tarefa</Button>
        </Link>
      </div>
    </main>
  )
}
