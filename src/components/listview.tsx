'use client'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Button } from './button'
import { Card } from './card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const todoListSchema = z.object({
  name: z.string().min(1).max(64),
})

type TodoListData = z.infer<typeof todoListSchema>

export function ListView() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<TodoListData>({
    resolver: zodResolver(todoListSchema),
  })

  const [tasks, setTasks] = useState([
    { id: 1, name: 'Estudar' },
    { id: 2, name: 'Ler' },
    { id: 3, name: 'Jogar' },
    { id: 4, name: 'Dormir' },
  ])

  function handleCreateTask(data: TodoListData) {
    const { name } = data
    const newTask = { id: tasks.length + 1, name }

    setTasks([...tasks, newTask])
    setValue('name', '')
  }

  function handleDeleteTask(id: number) {
    const deleteTask = tasks.filter((task) => task.id !== id)

    setTasks(deleteTask)
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <form
          onSubmit={handleSubmit(handleCreateTask)}
          className="flex w-full items-center justify-between gap-3"
        >
          <input
            className="flex flex-1 w-full py-4 px-4 rounded-md bg-zinc-700 text-zinc-200 hover:brightness-90 transition-all duration-200 ease-out cursor-pointer"
            type="text"
            {...register('name')}
            placeholder="Adicione uma tarefa"
          />
          <Button disableButton={isSubmitting}>
            Criar
            <PlusCircleIcon width={24} height={24} />
          </Button>
        </form>
      </div>
      {tasks.map((task) => (
        <Card key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
      ))}
    </div>
  )
}
