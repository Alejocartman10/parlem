export function AuthErrorMessage({ message }: { message: string }) {
  return (
    <div className="rounded-xl2 bg-red-50 px-4 py-2.5 text-xs font-medium text-red-700 animate-fade-in">
      {message}
    </div>
  );
}
