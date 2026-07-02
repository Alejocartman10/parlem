export function AuthSuccessMessage({ message }: { message: string }) {
  return (
    <div className="rounded-xl2 bg-parlem-green-50 px-4 py-2.5 text-xs font-medium text-parlem-green-700 animate-fade-in">
      {message}
    </div>
  );
}
