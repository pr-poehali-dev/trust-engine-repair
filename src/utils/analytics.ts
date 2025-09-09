// UX Analytics - отслеживание пользовательского опыта
interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

class UXAnalytics {
  private sessionId: string;
  private startTime: number;
  private pageLoadTime: number;
  private isOnline: boolean;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = performance.now();
    this.pageLoadTime = 0;
    this.isOnline = navigator.onLine;
    
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private initializeTracking() {
    // Отслеживание времени загрузки страницы
    window.addEventListener('load', () => {
      this.pageLoadTime = performance.now() - this.startTime;
      this.trackEvent({
        event: 'page_load_time',
        category: 'Performance',
        action: 'load',
        value: Math.round(this.pageLoadTime)
      });
    });

    // Отслеживание Core Web Vitals
    this.trackWebVitals();

    // Отслеживание состояния сети
    this.trackNetworkStatus();

    // Отслеживание скролла
    this.trackScrollDepth();

    // Отслеживание кликов и взаимодействий
    this.trackUserInteractions();
  }

  private trackWebVitals() {
    // Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      this.trackEvent({
        event: 'web_vitals',
        category: 'Performance',
        action: 'lcp',
        value: Math.round(lastEntry.startTime)
      });
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.log('LCP not supported');
    }

    // First Input Delay (FID) - имитация
    document.addEventListener('click', () => {
      const fid = performance.now() - this.startTime;
      if (fid < 1000) { // Только первый клик в течение секунды
        this.trackEvent({
          event: 'web_vitals',
          category: 'Performance',
          action: 'fid',
          value: Math.round(fid)
        });
      }
    }, { once: true });
  }

  private trackNetworkStatus() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.trackEvent({
        event: 'network_status',
        category: 'Connectivity',
        action: 'online'
      });
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.trackEvent({
        event: 'network_status',
        category: 'Connectivity',
        action: 'offline'
      });
    });
  }

  private trackScrollDepth() {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !reached.has(milestone)) {
            reached.add(milestone);
            this.trackEvent({
              event: 'scroll_depth',
              category: 'Engagement',
              action: 'scroll',
              label: `${milestone}%`,
              value: milestone
            });
          }
        });
      }
    }, { passive: true });
  }

  private trackUserInteractions() {
    // Клики по кнопкам
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      const link = target.closest('a');
      
      if (button) {
        this.trackEvent({
          event: 'button_click',
          category: 'Interaction',
          action: 'click',
          label: button.textContent?.trim() || 'unknown_button'
        });
      }
      
      if (link) {
        this.trackEvent({
          event: 'link_click',
          category: 'Navigation',
          action: 'click',
          label: link.getAttribute('href') || 'unknown_link'
        });
      }
    });

    // Фокус на формах
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        this.trackEvent({
          event: 'form_focus',
          category: 'Form',
          action: 'focus',
          label: target.getAttribute('name') || target.getAttribute('placeholder') || 'unknown_field'
        });
      }
    });
  }

  // Публичные методы для трекинга
  trackEvent(event: AnalyticsEvent) {
    const eventData = {
      ...event,
      sessionId: this.sessionId,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      isOnline: this.isOnline
    };

    // В реальном проекте здесь была бы отправка на сервер аналитики
    console.log('📊 UX Analytics:', eventData);

    // Можно интегрировать с Google Analytics, Yandex Metrika и др.
    // gtag('event', event.action, {
    //   event_category: event.category,
    //   event_label: event.label,
    //   value: event.value
    // });
  }

  // Трекинг пользовательских событий
  trackFormSubmission(formName: string, success: boolean, errorMessage?: string) {
    this.trackEvent({
      event: 'form_submission',
      category: 'Form',
      action: success ? 'success' : 'error',
      label: formName,
      customParameters: {
        error_message: errorMessage
      }
    });
  }

  trackSearchQuery(query: string, resultsCount: number) {
    this.trackEvent({
      event: 'search',
      category: 'Search',
      action: 'query',
      label: query,
      value: resultsCount
    });
  }

  trackModalOpen(modalName: string) {
    this.trackEvent({
      event: 'modal_open',
      category: 'Modal',
      action: 'open',
      label: modalName
    });
  }

  trackModalClose(modalName: string, timeSpent: number) {
    this.trackEvent({
      event: 'modal_close',
      category: 'Modal',
      action: 'close',
      label: modalName,
      value: Math.round(timeSpent)
    });
  }

  trackPageView(pageName: string) {
    this.trackEvent({
      event: 'page_view',
      category: 'Navigation',
      action: 'view',
      label: pageName
    });
  }

  // Отслеживание времени на странице
  trackTimeOnPage() {
    const startTime = performance.now();
    
    return () => {
      const timeSpent = performance.now() - startTime;
      this.trackEvent({
        event: 'time_on_page',
        category: 'Engagement',
        action: 'time_spent',
        value: Math.round(timeSpent / 1000) // в секундах
      });
    };
  }
}

// Экспортируем единый экземпляр
export const analytics = new UXAnalytics();

// Хук для удобного использования в компонентах
export const useAnalytics = () => analytics;