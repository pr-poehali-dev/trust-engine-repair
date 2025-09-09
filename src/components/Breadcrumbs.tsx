import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  const breadcrumbMap: Record<string, string> = {
    'services': 'Услуги',
    'restore': 'Восстановление',
    'repair': 'Ремонт',
    'longblocks': 'Лонг-блоки', 
    'projects': 'Наши работы',
    'portfolio': 'Портфолио',
    'contact': 'Контакты',
    'volvo-d6-350': 'Volvo D6 350',
    'mercruiser-5-7l': 'Mercruiser 5.7L'
  };

  // Не показываем breadcrumbs на главной странице
  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', path: '/' }
  ];

  let currentPath = '';
  pathnames.forEach((name) => {
    currentPath += `/${name}`;
    breadcrumbs.push({
      label: breadcrumbMap[name] || name.charAt(0).toUpperCase() + name.slice(1),
      path: currentPath
    });
  });

  return (
    <div className="bg-gray-50 py-3 px-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.path} className="flex items-center">
              {index > 0 && (
                <Icon name="ChevronRight" size={14} className="text-gray-400 mx-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-primary font-medium">{crumb.label}</span>
              ) : (
                <Link 
                  to={crumb.path}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}