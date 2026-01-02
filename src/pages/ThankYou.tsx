import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Icon name="Check" size={32} className="text-primary" />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight">
            Заявка получена
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Я посмотрю ваш кейс и отвечу в течение суток
          </p>
        </div>

        <div className="bg-card border rounded-lg p-8 space-y-6 text-left">
          <h2 className="text-2xl font-semibold">
            Пока жду — подпишитесь на мой Telegram
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Там я разбираю реальные рекламные кампании: что сработало, что нет, 
              какие цифры получили и почему приняли то или иное решение.
            </p>
            
            <p>
              Это не мотивационные посты и не теория из учебников. Только конкретные 
              кейсы, логика действий и результаты из практики управления бюджетами.
            </p>
            
            <p>
              Полезно, если хотите понимать, как устроена работа с Директом изнутри.
            </p>
          </div>

          <Button 
            size="lg" 
            className="w-full"
            asChild
          >
            <a 
              href="https://t.me/yourchannel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={20} />
              Перейти в Telegram
            </a>
          </Button>
        </div>

        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
