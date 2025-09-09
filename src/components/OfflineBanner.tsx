import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import useOfflineStatus from '@/hooks/useOfflineStatus';

export default function OfflineBanner() {
  const { isOffline } = useOfflineStatus();
  const [showBanner, setShowBanner] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (isOffline) {
      setShowBanner(true);
      setWasOffline(true);
    } else if (wasOffline) {
      // Показываем уведомление о восстановлении связи
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }
  }, [isOffline, wasOffline]);

  if (!showBanner) return null;

  return (
    <div className={`fixed top-20 left-4 right-4 z-[9999] mx-auto max-w-md animate-in slide-in-from-top-2 duration-300 ${
      isOffline ? '' : 'animate-out slide-out-to-top-2'
    }`}>
      <div className={`rounded-xl shadow-lg border p-4 ${
        isOffline 
          ? 'bg-orange-50 border-orange-200' 
          : 'bg-green-50 border-green-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${
            isOffline ? 'bg-orange-100' : 'bg-green-100'
          }`}>
            <Icon 
              name={isOffline ? "WifiOff" : "Wifi"} 
              size={20} 
              className={isOffline ? 'text-orange-600' : 'text-green-600'} 
            />
          </div>
          
          <div className="flex-1">
            <h3 className={`font-semibold text-sm ${
              isOffline ? 'text-orange-900' : 'text-green-900'
            }`}>
              {isOffline ? 'Нет подключения к интернету' : 'Подключение восстановлено'}
            </h3>
            <p className={`text-xs ${
              isOffline ? 'text-orange-700' : 'text-green-700'
            }`}>
              {isOffline 
                ? 'Основная информация доступна офлайн' 
                : 'Все функции работают'
              }
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="hover:bg-white/50 p-1 h-auto"
          >
            <Icon name="X" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}