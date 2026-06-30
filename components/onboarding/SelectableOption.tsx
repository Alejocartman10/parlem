interface SelectableOptionProps {
  label: string;
  description?: string;
  icon?: string;
  selected: boolean;
  onClick: () => void;
}

export function SelectableOption({
  label,
  description,
  icon,
  selected,
  onClick,
}: SelectableOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl2 border-2 px-4 py-4 text-left transition-all duration-200 ${
        selected
          ? "border-parlem-green-500 bg-parlem-green-50"
          : "border-parlem-gray-100 bg-white hover:border-parlem-gray-200"
      }`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <div className="flex-1">
        <p className="text-sm font-bold text-parlem-gray-900">{label}</p>
        {description && <p className="text-xs text-parlem-gray-500">{description}</p>}
      </div>
      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-parlem-green-500 bg-parlem-green-500" : "border-parlem-gray-300"
        }`}
      >
        {selected && <span className="text-[10px] text-white">✓</span>}
      </div>
    </button>
  );
}
