import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex gap-6">
      <Navbar />
      <div className="flex-1 mt-9">{children}</div>
    </main>
  );
}
