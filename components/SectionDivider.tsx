interface Props {
  emoji?: string;
}

export default function SectionDivider({ emoji = '✦' }: Props) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-surface-200" />
      <span className="text-surface-300 text-lg">{emoji}</span>
      <div className="flex-1 h-px bg-surface-200" />
    </div>
  );
}
