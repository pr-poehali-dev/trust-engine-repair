import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'service' | 'project' | 'page' | 'info';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // База данных для поиска
  const searchDatabase: SearchResult[] = [
    {
      title: 'Восстановление двигателей',
      description: 'Полное восстановление морских двигателей под ключ',
      url: '/services/restore',
      type: 'service'
    },
    {
      title: 'Ремонт двигателей',
      description: 'Качественный ремонт любой сложности',
      url: '/services/repair',
      type: 'service'
    },
    {
      title: 'Лонг-блоки',
      description: 'Готовые к установке блоки двигателей',
      url: '/services/longblocks',
      type: 'service'
    },
    {
      title: 'Volvo Penta D6 350',
      description: 'Пример восстановления двигателя Volvo Penta',
      url: '/projects/volvo-d6-350',
      type: 'project'
    },
    {
      title: 'Mercruiser 5.7L',
      description: 'Проект восстановления Mercruiser',
      url: '/projects/mercruiser-5-7l',
      type: 'project'
    },
    {
      title: 'Наши работы',
      description: 'Галерея выполненных проектов',
      url: '/projects',
      type: 'page'
    },
    {
      title: 'Контакты',
      description: 'Свяжитесь с нами для консультации',
      url: '/contact',
      type: 'page'
    },
    {
      title: 'Гарантии качества',
      description: 'Информация о наших гарантийных обязательствах',
      url: '/#guarantees',
      type: 'info'
    }
  ];

  // Автофокус при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Поиск с задержкой
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const filtered = searchDatabase.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return 'Settings';
      case 'project': return 'Image';
      case 'page': return 'FileText';
      case 'info': return 'Info';
      default: return 'Search';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'text-blue-600';
      case 'project': return 'text-green-600';
      case 'page': return 'text-purple-600';
      case 'info': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-start justify-center pt-20 p-4">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Search Modal */}
      <Card className="relative w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border-0 animate-in fade-in-0 slide-in-from-top-4 duration-300">
        <CardContent className="p-0">
          {/* Search Header */}
          <div className="flex items-center gap-4 p-6 border-b border-gray-100">
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Поиск по сайту..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary text-base"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-gray-100 p-2 w-10 h-10"
            >
              <Icon name="X" size={18} className="text-gray-600" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <Icon name="Loader2" size={24} className="animate-spin text-primary" />
              </div>
            )}

            {!isLoading && query && results.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Icon name="SearchX" size={48} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
                <p className="text-gray-500">Попробуйте другой поисковый запрос</p>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="p-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.url}
                    onClick={onClose}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-white ${getTypeColor(result.type)}`}>
                      <Icon name={getTypeIcon(result.type)} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {result.description}
                      </p>
                    </div>
                    <Icon name="ArrowRight" size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            )}

            {!query && (
              <div className="p-6">
                <div className="text-center mb-6">
                  <Icon name="Search" size={48} className="text-gray-300 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Поиск по сайту</h3>
                  <p className="text-gray-500">Найдите услуги, проекты и информацию</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-lg bg-gray-50">
                    <Icon name="Settings" size={24} className="text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">Услуги</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gray-50">
                    <Icon name="Image" size={24} className="text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">Проекты</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}