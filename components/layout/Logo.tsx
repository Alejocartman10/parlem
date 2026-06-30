interface LogoProps {
  size?: number;
  withText?: boolean;
}

export function Logo({ size = 40, withText = true }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <div
        className="flex items-center justify-center rounded-2xl bg-parlem-green-500 text-white font-bold shadow-soft"
        style={{ width: size, height: size, fontSize: size * 0.45 }}
      >
        P!
      </div>
      {withText && (
        <span className="text-xl font-bold text-parlem-gray-900">Parlem!</span>
      )}
    </div>
  );
}
