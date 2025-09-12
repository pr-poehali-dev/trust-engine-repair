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

  const disassemblyPhotos = [
    {
      id: '1',
      url: 'https://cdn.poehali.dev/files/1ce2ed8f-6cfc-4596-ae70-41024e92b3f8.jpg',
      alt: 'Блок цилиндров после разборки - видны следы коррозии и износа'
    },
    {
      id: '2', 
      url: 'https://cdn.poehali.dev/files/ab9ccf6c-13af-4411-b51d-d4d0a9999767.jpg',
      alt: 'Внутренние каналы двигателя - состояние поверхностей цилиндров'
    },
    {
      id: '3',
      url: 'https://cdn.poehali.dev/files/f73f7e90-ab3d-4f06-a0e5-330f87749717.jpg', 
      alt: 'ГБЦ после демонтажа - оценка состояния камер сгорания'
    },
    {
      id: '4',
      url: 'https://cdn.poehali.dev/files/fc7e23b9-58e9-496e-85ee-0e5b04e11d60.jpg', 
      alt: 'Блок двигателя в разрезе - детальная дефектовка компонентов'
    },
    {
      id: '5',
      url: 'https://cdn.poehali.dev/files/175beee7-d6be-4a6f-9471-664247720958.jpg', 
      alt: 'Поршневая группа - коррозия и повреждения от эксплуатации'
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
            <DisassemblyStep photos={disassemblyPhotos} />
            <RestorationStep photos={processPhotos} />
            <AssemblyStep photos={processPhotos} />
            <TestingStep photos={processPhotos} />
          </div>
        </div>
      </div>
    </section>
  );
}