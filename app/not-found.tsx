import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center">
      <Logo size={48} withText={false} />
      <div>
        <h1 className="text-2xl font-bold text-parlem-gray-900">Pàgina no trobada</h1>
        <p className="mt-1 text-sm text-parlem-gray-500">
          No hem pogut trobar el que estaves buscant.
        </p>
      </div>
      <Link href="/">
        <Button>Tornar a l&apos;inici</Button>
      </Link>
    </main>
  );
}
