import { DocumentPlusIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <header className="flex py-24 mx-auto items-center justify-center w-full fixed top-0 bg-zinc-950 gap-4 -z-10">
      <DocumentPlusIcon width={34} height={34} className="text-zinc-200" />
      <h1 className="font-bold text-zinc-200 text-3xl">Todolist</h1>
    </header>
  )
}
