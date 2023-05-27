export type CardProps = React.PropsWithChildren

export function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col rounded-md border-2 border-gray-200 bg-white px-6 py-6 shadow-md">
      {children}
    </div>
  )
}
