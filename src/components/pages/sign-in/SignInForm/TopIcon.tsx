'use client'

import { Key } from '@phosphor-icons/react'

export default function TopIcon() {
  return (
    <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-indigo-600 text-white dark:border-slate-700">
      <Key size="24" weight="bold" />
    </div>
  )
}
