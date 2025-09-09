import { ReactNode } from 'react';
import usePullToRefresh from '@/hooks/usePullToRefresh';
import Icon from '@/components/ui/icon';

interface PullToRefreshProps {
  onRefresh: () => Promise<void> | void;
  children: ReactNode;
  enabled?: boolean;
}

export default function PullToRefresh({ onRefresh, children, enabled = true }: PullToRefreshProps) {
  const { isRefreshing, pullDistance, isThresholdReached } = usePullToRefresh({
    onRefresh,
    enabled
  });

  return (
    <div className="relative">
      {/* Pull indicator */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 md:hidden"
        style={{
          transform: `translateY(${Math.min(pullDistance - 60, 0)}px)`,
          opacity: pullDistance > 10 ? 1 : 0
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
          {isRefreshing ? (
            <Icon name="Loader2" size={24} className="text-primary animate-spin" />
          ) : (
            <Icon 
              name="RefreshCw" 
              size={24} 
              className={`transition-all duration-300 ${
                isThresholdReached ? 'text-primary rotate-180' : 'text-gray-400'
              }`} 
            />
          )}
        </div>
      </div>

      {/* Pull hint text */}
      {pullDistance > 20 && !isRefreshing && (
        <div className="fixed top-16 left-0 right-0 z-50 text-center text-sm text-gray-600 md:hidden">
          {isThresholdReached ? 'Отпустите для обновления' : 'Потяните для обновления'}
        </div>
      )}

      {/* Main content */}
      <div 
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: pullDistance === 0 ? 'transform 0.3s ease-out' : 'none'
        }}
      >
        {children}
      </div>
    </div>
  );
}