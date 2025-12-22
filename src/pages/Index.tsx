import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    info: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в течение 24 часов",
    });
    setFormData({ name: '', contact: '', info: '' });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-[#1A1F2C] to-[#0f1419] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Яндекс Директ для B2B: от 30 договоров на оптовые поставки парфюмерии и косметики
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">Работаю с производителями и дистрибьюторами, у которых есть склад, отдел продаж и выстроена модель повторных закупок.</p>
            <p className="text-base md:text-lg text-gray-400 mb-10">
              Не беру проекты без логистики, без менеджеров на обработку заявок или если нужны «только лиды без продаж».
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                Получить разбор
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Показать, как это устроено
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Кому подойдёт</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={24} />
                Подходит, если у вас:
              </h3>
              <ul className="space-y-4">
                {[
                  'Есть склад и налаженная логистика по РФ или регионам',
                  'Менеджеры обрабатывают заявки и ведут переговоры',
                  'Есть маржа на повторные продажи и долгосрочное сотрудничество',
                  'Работаете с оптовиками, салонами, магазинами или дистрибьюторами'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CircleCheck" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="X" className="text-destructive" size={24} />
                Не подойдёт, если:
              </h3>
              <ul className="space-y-4">
                {[
                  'Работаете только в розницу через интернет-магазин',
                  'Нужны «лиды ради лидов» без фокуса на сделки',
                  'Нет отдела продаж для обработки B2B заявок'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CircleX" className="text-destructive mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Почему в B2B реклама часто не доводит до договоров
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Четыре типичные причины, которые мешают получать результат
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Search',
                title: 'Показы идут на розничные запросы',
                description: 'Реклама настроена на «купить духи» вместо «оптовые поставки парфюмерии» — кликают не те, кто готов заключать договоры.'
              },
              {
                icon: 'Filter',
                title: 'Нет фильтра по качеству заявок',
                description: 'Все обращения идут одним потоком — менеджеры тратят время на разговоры с физлицами и случайными звонками.'
              },
              {
                icon: 'FileQuestion',
                title: 'Реклама ведёт на общую страницу',
                description: 'Посадочная не разделяет сегменты: дистрибьютор и владелец салона видят одно и то же предложение без конкретики.'
              },
              {
                icon: 'TrendingDown',
                title: 'Непонятно, кто из заявок покупает',
                description: 'Нет связи между рекламой и CRM — вы не знаете, какие кампании приводят договоры, а какие просто «съедают» бюджет.'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={item.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Как выстраивается путь от клика до договора
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            В B2B важен не только первый клик — решение о сделке созревает недели и месяцы. Выстраиваем маршрут с учётом длинного цикла.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: '1',
                title: 'Поиск спроса',
                description: 'Определяем, кто ищет оптовые поставки: дистрибьюторы, магазины, салоны. Разделяем запросы на прямые («купить опт косметики») и околоцелевые («поставщики парфюмерии РФ»).'
              },
              {
                step: '2',
                title: 'Сегменты и предложения',
                description: 'Для каждого сегмента своя посадочная: для дистрибьютора — объёмы и условия поставки, для салона — каталог, сроки и минимальный заказ.'
              },
              {
                step: '3',
                title: 'Фильтр на заявках',
                description: 'Обязательные поля в форме (ИНН, регион, формат бизнеса) отсеивают случайных людей. На выходе — только те, кто реально покупает оптом.'
              },
              {
                step: '4',
                title: 'Контроль качества',
                description: 'Смотрим на заявки, которые дошли до коммерческого предложения и до договора. Если сегмент даёт много кликов, но ноль сделок — меняем связку запрос-посадочная-оффер.'
              },
              {
                step: '5',
                title: 'Тёплый догрев',
                description: 'Не все купят сразу. Ретаргетинг на тех, кто смотрел каталог или оставлял заявку, но не подписал договор — возвращаем через акции, новинки, спецусловия.'
              },
              {
                step: '6',
                title: 'Улучшения по цифрам',
                description: 'Раз в неделю смотрим: стоимость заявки по сегментам, сколько из них стали сделками, какие кампании окупаются. Перераспределяем бюджет туда, где работает.'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Lightbulb" className="text-primary" size={20} />
              Пример из практики
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Один и тот же бренд косметики по запросу «косметика опт Москва» даёт заявки по 2 500 ₽, конверсия в договор 8%. 
              По запросу «поставщик косметики для салонов» — заявка стоит 4 200 ₽, но конверсия 22%, потому что аудитория точнее. 
              Результат: второй сегмент выгоднее, хотя заявка дороже.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" onClick={scrollToForm} className="px-8 py-6">
              Получить план запуска
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Этапы работы</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Быстрый разбор текущей ситуации',
                description: 'Анализ вашей ниши, конкурентов, текущей рекламы (если есть). Оценка запросов и сегментов спроса. Занимает 2–3 дня.'
              },
              {
                number: '02',
                title: 'План запуска',
                description: 'Готовый список: какие кампании создавать, на какие запросы, с какими посадочными. Смета бюджета на тест и прогноз заявок.'
              },
              {
                number: '03',
                title: 'Структура кампаний',
                description: 'Разделяем по сегментам и типам запросов. Настраиваем ставки, расписания показов, геотаргетинг под ваши зоны работы.'
              },
              {
                number: '04',
                title: 'Подготовка посадочных',
                description: 'Если текущий сайт не подходит — даём список правок или прототип отдельной страницы под каждый сегмент.'
              },
              {
                number: '05',
                title: 'Запуск',
                description: 'Создаём кампании, тестируем объявления, отслеживаем первые 50–100 кликов. Убираем мусорные запросы и корректируем ставки.'
              },
              {
                number: '06',
                title: 'Оптимизация по качеству заявок',
                description: 'Связываем рекламу с данными из CRM. Смотрим, какие кампании дают сделки. Отключаем неэффективные связки.'
              },
              {
                number: '07',
                title: 'Масштабирование',
                description: 'Увеличиваем бюджет на сегменты с лучшей конверсией. Добавляем новые регионы или товарные направления.'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 text-6xl font-bold text-primary/5">
                  {item.number}
                </div>
                <div className="relative">
                  <div className="text-primary font-bold text-sm mb-2">Этап {item.number}</div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Что получает клиент
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Результаты, которые влияют на бизнес-показатели
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Target',
                title: 'Понимание, какие запросы дают договоры',
                description: 'Видите, какие кампании окупаются, а какие нет'
              },
              {
                icon: 'ShieldCheck',
                title: 'Снижение мусора в заявках',
                description: 'Менеджеры работают только с реальными покупателями'
              },
              {
                icon: 'Calculator',
                title: 'Прогнозируемая стоимость обращения',
                description: 'Знаете экономику канала и можете планировать бюджет'
              },
              {
                icon: 'BarChart3',
                title: 'Понятная экономика по направлениям',
                description: 'Сколько стоит привлечь салон, магазин или дистрибьютора'
              },
              {
                icon: 'Repeat',
                title: 'Рост повторных сделок через догрев',
                description: 'Ретаргетинг возвращает тех, кто не купил с первого раза'
              },
              {
                icon: 'LineChart',
                title: 'Контроль рекламы как части продаж',
                description: 'Реклама встроена в воронку продаж, а не живёт отдельно'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <Icon name={item.icon as any} className="text-primary mb-4" size={32} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Доверие и опыт</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Кто ведёт проекты</h3>
              <ul className="space-y-4">
                {[
                  'Более 7 лет работы с B2B рекламой в Яндекс Директ',
                  'Опыт в оптовых поставках (продукты питания, стройматериалы, косметика, электроника)',
                  'Бюджеты от 150 000 ₽/мес до 2,5 млн ₽/мес',
                  'Проекты по всей России и СНГ',
                  'Прямая связь с клиентом, без посредников'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Кейс: оптовые поставки косметики</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Было:</p>
                  <p className="font-medium">Реклама на общие запросы, заявки по 3 800 ₽, конверсия в договор 4%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Сделали:</p>
                  <p className="font-medium">Разделили на 4 сегмента (салоны, магазины, дистрибьюторы, интернет-магазины). Для каждого — своя посадочная и оффер</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Получили за 4 месяца:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center gap-2">
                      <Icon name="ArrowUp" className="text-primary" size={16} />
                      <span className="font-medium">Конверсия в договор выросла до 14%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="ArrowDown" className="text-primary" size={16} />
                      <span className="font-medium">Стоимость заявки снизилась до 2 900 ₽</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="text-primary" size={16} />
                      <span className="font-medium">Количество договоров +180%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6">Как выглядит работа</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Icon name="FileText" className="text-primary mb-3" size={28} />
                <h4 className="font-semibold mb-2">Отчётность</h4>
                <p className="text-muted-foreground text-sm">Еженедельный отчёт: заявки по сегментам, стоимость, конверсия в сделки, план на следующую неделю</p>
              </div>
              <div>
                <Icon name="Calendar" className="text-primary mb-3" size={28} />
                <h4 className="font-semibold mb-2">Разбор раз в неделю</h4>
                <p className="text-muted-foreground text-sm">Созвон 30–40 минут: обсуждаем цифры, качество заявок, корректировки</p>
              </div>
              <div>
                <Icon name="MessageSquare" className="text-primary mb-3" size={28} />
                <h4 className="font-semibold mb-2">Чат</h4>
                <p className="text-muted-foreground text-sm">Telegram или другой мессенджер для оперативных вопросов. Ответ в течение рабочего дня</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Первый шаг: что будет после заявки
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Коротко о том, как мы начнём работать
          </p>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Что вы получите</h3>
                  <p className="text-muted-foreground">
                    Разбор текущей ситуации + план запуска с прогнозом заявок и бюджетом. В формате документа или презентации.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Сколько займёт</h3>
                  <p className="text-muted-foreground">
                    2–3 рабочих дня на анализ, затем созвон 40–60 минут для обсуждения плана.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Что нужно подготовить</h3>
                  <ul className="space-y-2 mt-2">
                    {[
                      'Ссылку на сайт (если есть)',
                      'Доступ к текущей рекламе (если уже запущена)',
                      'Понимание целей: сколько договоров нужно, какие регионы, какой средний чек'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Dot" className="text-primary mt-1" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Результат первого шага</h3>
                  <p className="text-muted-foreground">
                    Готовый план: какие кампании создавать, список правок для сайта (если нужны), сценарий запуска, прогноз стоимости заявки.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" onClick={scrollToForm} className="px-8 py-6">
              Запросить разбор
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Частые вопросы</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Сколько нужно бюджета на старт?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Рекомендую от 80 000 ₽ на рекламу для теста (первые 2–3 недели). Это позволит собрать статистику по сегментам и понять, 
                что работает. Меньший бюджет не даст достаточно данных для оптимизации.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно ли работать на вашем кабинете Директа?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, предпочитаю работать на вашем кабинете с предоставлением мне доступа. Так у вас остаётся полная история кампаний, 
                и вы в любой момент можете посмотреть статистику. Если кабинета нет — создадим новый на ваши реквизиты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Что если уже есть подрядчик?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Сделаю независимый аудит текущей рекламы: структура кампаний, качество запросов, посадочные, связь с результатами в CRM. 
                Покажу, что можно улучшить. Решение о смене подрядчика — за вами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Как фильтруется качество заявок?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Три уровня фильтра: правильные запросы (отсекаем розницу), посадочные с акцентом на B2B, форма с обязательными полями 
                (ИНН, формат бизнеса, регион). Плюс отслеживаем конверсию заявки → коммерческое → договор, чтобы видеть качество по источникам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Сроки до первых договоров?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Первые заявки — через 3–5 дней после запуска. Договоры зависят от вашего цикла сделки: если менеджеры закрывают за неделю — 
                первые сделки увидите через 10–14 дней. Если цикл месяц — через месяц. Важно: фокус не на скорость, а на качество заявок.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Как строится отчётность?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Еженедельный отчёт: количество заявок по сегментам, стоимость заявки, конверсия в сделки (если данные из CRM доступны), 
                расход бюджета, план корректировок. Формат — таблица или дашборд, как удобнее.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Нужна ли доработка сайта?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Зависит от текущего состояния. Если на сайте есть раздел для оптовиков с условиями поставки и формой — можем работать с ним. 
                Если нет — дам прототип отдельной посадочной или список правок для вашего разработчика.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-br from-[#1A1F2C] to-[#0f1419] text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Запросить разбор</h2>
            <p className="text-gray-300">
              Оставьте заявку — в течение 24 часов свяжусь для уточнения деталей и назначу время для разбора вашей ситуации
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Имя
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Как к вам обращаться"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-2 text-foreground">
                  Телефон или Telegram
                </label>
                <Input
                  id="contact"
                  type="text"
                  placeholder="+7 (900) 123-45-67 или @username"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="info" className="block text-sm font-medium mb-2 text-foreground">
                  Ниша / регион / краткая информация
                </label>
                <Textarea
                  id="info"
                  placeholder="Например: оптовые поставки косметики, работаем по РФ, есть склад в Москве"
                  value={formData.info}
                  onChange={(e) => setFormData({ ...formData, info: e.target.value })}
                  required
                  className="w-full min-h-24"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                После отправки заявки свяжусь с вами в течение 24 часов для уточнения деталей и назначения времени разбора
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Яндекс Директ для B2B. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;