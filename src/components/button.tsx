import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  disableButton?: boolean
}

export function Button({ children, disableButton }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={disableButton}
      className="flex gap-2 bg-emerald-400 h-full py-4 px-4 rounded-md text-zinc-900 font-semibold hover:brightness-110 ease-out duration-200 transition-all hover:scale-105"
    >
      {children}
    </button>
  )
}
