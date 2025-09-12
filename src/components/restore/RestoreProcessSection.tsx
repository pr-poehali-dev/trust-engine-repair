import ProcessSectionHeader from './ProcessSectionHeader';
import DiagnosticStep from './DiagnosticStep';
import DisassemblyStep from './DisassemblyStep';
import RestorationStep from './RestorationStep';
import AssemblyStep from './AssemblyStep';
import TestingStep from './TestingStep';

export default function RestoreProcessSection() {
  const processPhotos = [
    {
      id: '1',
      url: 'https://cdn.poehali.dev/files/e158c5ca-57b3-4d4a-b342-81d6b3f2a07d.JPG',
      alt: 'Двигатель до диагностики - общий вид'
    },
    {
      id: '2', 
      url: 'https://cdn.poehali.dev/files/de797948-3172-4737-9e2c-615a718bf8ea.JPG',
      alt: 'Повреждения коллектора - коррозия и износ'
    },
    {
      id: '3',
      url: 'https://cdn.poehali.dev/files/83a3baee-ed5b-426d-b0a6-08b9a63d5c6d.JPG', 
      alt: 'Блок двигателя Mercury MerCruiser - детальный осмотр'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-marine-light/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-marine-blue/3 opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <ProcessSectionHeader
          title="Процесс восстановления двигателя"
          description="Пошаговый процесс капитального ремонта с полной отчетностью на каждом этапе"
        />

        <div className="relative">
          <div className="space-y-16">
            <DiagnosticStep photos={processPhotos} />
            <DisassemblyStep photos={processPhotos} />
            <RestorationStep photos={processPhotos} />
            <AssemblyStep photos={processPhotos} />
            <TestingStep photos={processPhotos} />
          </div>
        </div>
      </div>
    </section>
  );
}