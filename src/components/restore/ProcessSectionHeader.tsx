interface ProcessSectionHeaderProps {
  title: string;
  description: string;
}

export default function ProcessSectionHeader({ title, description }: ProcessSectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}