import type { FormEvent } from 'react'
import { assets } from '../../constants/assets'
import Button from './Button'

export default function SearchBar() {
  // Visual only for now — searching isn't wired up yet.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  return (
    <form role="search" onSubmit={handleSubmit} className="flex items-start gap-4">
      <label className="flex h-[52px] w-[461px] items-center gap-2 rounded-3xl bg-white px-6 py-3">
        <img src={assets.icons.search} alt="" className="size-6 shrink-0" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          placeholder="Course, topic, creator"
          className="min-w-0 flex-1 bg-transparent text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  )
}
