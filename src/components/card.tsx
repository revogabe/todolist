import { TrashIcon } from '@heroicons/react/24/solid'

interface CardProps {
  task: {
    id: number
    name: string
  }
  handleDeleteTask: (id: number) => void
}

export function Card({ task, handleDeleteTask }: CardProps) {
  return (
    <div className="w-full bg-zinc-800 flex p-4 rounded-md shadow-md items-center justify-between mb-4 hover:scale-105 transition-all hover:brightness-110 duration-200 ease-out cursor-pointer hover:border-emerald-500 border border-transparent">
      <div className="flex flex-col items-start justify-center">
        <p className="text-zinc-400 text-xs">Task: {task.id}</p>
        <h1 className="text-zinc-200 font-semibold text-xl">{task.name}</h1>
      </div>
      <button onClick={() => handleDeleteTask(task.id)}>
        <TrashIcon
          width={22}
          height={22}
          className="text-zinc-200 hover:brightness-75 hover:text-red-500 transition-all ease-out duration-100"
        />
      </button>
    </div>
  )
}
