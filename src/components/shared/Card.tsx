export type CardProps = React.PropsWithChildren;

export function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col border-2 border-gray-200 bg-white px-6 py-6 shadow-md rounded-md">
      {children}
    </div>
  );
}
