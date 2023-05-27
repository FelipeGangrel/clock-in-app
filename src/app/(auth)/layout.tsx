type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 items-center justify-center">
      {children}
    </main>
  );
}
