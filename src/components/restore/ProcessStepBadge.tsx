interface ProcessStepBadgeProps {
  step: number;
  color?: 'primary' | 'orange' | 'red' | 'blue' | 'green';
}

const colorMap = {
  primary: 'border-primary/20 text-primary',
  orange: 'border-orange-200 text-orange-600',
  red: 'border-red-200 text-red-600',
  blue: 'border-blue-200 text-blue-600',
  green: 'border-green-200 text-green-600'
};

export default function ProcessStepBadge({ step, color = 'primary' }: ProcessStepBadgeProps) {
  return (
    <div className="flex-shrink-0">
      <div className={`px-6 py-2 bg-white rounded-full border ${colorMap[color]} shadow-lg backdrop-blur-sm`}>
        <span className="text-sm font-bold uppercase tracking-wide whitespace-nowrap">
          {step} этап
        </span>
      </div>
    </div>
  );
}