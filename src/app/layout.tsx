import "./globals.css"
import { TaskProvider } from "@/lib/TaskContext"

export const metadata = {
  title: "Gerenciador de Tarefas",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <TaskProvider>
          <div className="p-6 max-w-3xl mx-auto">{children}</div>
        </TaskProvider>
      </body>
    </html>
  )
}
