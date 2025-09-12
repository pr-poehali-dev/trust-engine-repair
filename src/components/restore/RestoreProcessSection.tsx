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

  const restorationPhotos = [
    {
      id: '1',
      url: 'https://cdn.poehali.dev/files/00ee0ef7-df69-41a3-99de-1fe0ae027a08.jpg',
      alt: 'Блок цилиндров V6 после полного восстановления - идеальное состояние поверхностей'
    },
    {
      id: '2', 
      url: 'https://cdn.poehali.dev/files/a7d6cd13-a2b1-4785-b4b3-faaad869c36f.jpg',
      alt: 'Головки блока цилиндров после механической обработки - новые направляющие клапанов'
    },
    {
      id: '3',
      url: 'https://cdn.poehali.dev/files/37f4ad79-f944-41e1-843a-9e225e2b08d4.jpg', 
      alt: 'Восстановленные поршни и новые кольца - готовы к установке'
    },
    {
      id: '4',
      url: 'https://cdn.poehali.dev/files/337f664a-bbce-4a95-8da1-74b35826f6f3.jpg', 
      alt: 'Полный комплект восстановленных деталей двигателя'
    },
    {
      id: '5',
      url: 'https://cdn.poehali.dev/files/968d4c47-593b-48f2-8ee4-0ffe62100277.jpg', 
      alt: 'Хонингованный цилиндр - идеальная поверхность для поршневых колец'
    }
  ];

  const assemblyPhotos = [
    {
      id: '1',
      url: 'https://cdn.poehali.dev/files/4f84d197-6a5d-4434-b7e0-4abd1596c604.jpg',
      alt: 'Полностью собранный двигатель V6 с навесным оборудованием - готов к испытаниям'
    },
    {
      id: '2',
      url: 'https://cdn.poehali.dev/files/3104f41a-781b-4525-9575-ff5000d3142b.jpg',
      alt: 'Блок цилиндров V6 на стенде - готов к установке поршневой группы'
    },
    {
      id: '3', 
      url: 'https://cdn.poehali.dev/files/0ae3c28b-97a5-4202-9eca-b4f0cb1b50f8.jpg',
      alt: 'Полностью собранный короткоблок V6 - установлены все основные компоненты'
    },
    {
      id: '4',
      url: 'https://cdn.poehali.dev/files/0d2e3c8d-6095-4b14-9d7c-53c60b7fa43d.jpg', 
      alt: 'Двигатель с установленными головками блока цилиндров'
    },
    {
      id: '5',
      url: 'https://cdn.poehali.dev/files/1109662e-68ac-4a68-a969-67087521bc97.JPG', 
      alt: 'Коленчатый вал с шатунами - прецизионная сборка'
    },
    {
      id: '6',
      url: 'https://cdn.poehali.dev/files/9a88e5b4-2319-49ca-b1e4-4bf29c74946e.jpg', 
      alt: 'Готовый двигатель с системой охлаждения на тестовом стенде'
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
            <RestorationStep photos={restorationPhotos} />
            <AssemblyStep photos={assemblyPhotos} />
            <TestingStep photos={processPhotos} />
          </div>
        </div>
      </div>
    </section>
  );
}