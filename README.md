# 🧘‍♀️ Meditation App - Приложение для медитации

Красивое и функциональное веб-приложение для медитации с таймером, звуками природы, системой пользователей и вдохновляющим контентом.

![Meditation App](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![PWA](https://img.shields.io/badge/PWA-Ready-green)
![Mobile](https://img.shields.io/badge/Mobile-Optimized-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Особенности

### 🏠 Главная страница
- **Персонализированное приветствие** для авторизованных пользователей
- **Ежедневные цитаты** - 30 вдохновляющих цитат от великих мыслителей
- **Карточка медитации** с отслеживанием прогресса
- **Быстрые действия** для доступа к основным функциям

### 🎵 Звуки для медитации
- **5 типов звуков**, генерируемых через Web Audio API:
  - 🌧️ **Дождь** с реалистичными каплями
  - 🌊 **Океан** с шумом волн
  - 🌲 **Лес** с пением птиц
  - 🎭 **Тибетская поющая чаша** с гармониками
  - 🔥 **Камин** с потрескиванием
- **Регулировка громкости**
- **Процедурная генерация** звуков в реальном времени

### ⏱️ Умный таймер
- **Настраиваемое время** сессии (1-60 минут)
- **Круговой прогресс-бар** с анимацией
- **Управление**: старт, пауза, сброс
- **Интеграция со звуками** медитации
- **Уведомление** о завершении сессии

### 👤 Система пользователей
- **Регистрация и авторизация** с локальным хранением
- **Личный кабинет** с подробной статистикой:
  - Количество завершенных сессий
  - Общее время медитации
  - Текущая серия дней
  - Любимые звуки
- **Система достижений**:
  - 🌱 Первые шаги (первая сессия)
  - 🔥 Неделя практики (7 дней подряд)
  - 💎 Месяц дисциплины (30 дней подряд)
  - 🏆 Мастер медитации (100 сессий)

### 📰 Раздел "Исследуй"
- **Позитивные новости** из мира
- **Категории**: Природа, Здоровье, Технологии, Наука
- **Красивые карточки** с анимациями
- **Фильтрация** по категориям
- **Вдохновляющий контент** для мотивации

### 📱 Мобильная оптимизация
- **PWA (Progressive Web App)** поддержка
- **Адаптивный дизайн** для всех экранов
- **Touch-friendly** интерфейс
- **Полноэкранный режим** на мобильных устройствах
- **Установка** как нативное приложение

## 🚀 Технологии

### Frontend
- **React 18.2.0** - современная библиотека для UI
- **CSS3** с современными возможностями:
  - CSS Grid и Flexbox
  - Градиенты и backdrop-filter
  - Анимации и переходы
  - Media queries для адаптивности
- **Web Audio API** для генерации звуков
- **LocalStorage** для хранения данных

### Архитектура
- **Компонентная архитектура** React
- **Context API** для управления состоянием пользователя
- **Custom Hooks** для логики приложения
- **Модульная структура** компонентов

### PWA возможности
- **Service Worker** готовность
- **Manifest.json** для установки
- **Offline-first** подход
- **Адаптивные иконки**

## 📁 Структура проекта

```
meditation-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── sounds/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── LoginForm.js
│   │   │   ├── RegisterForm.js
│   │   │   └── Auth.css
│   │   ├── DailyQuote/
│   │   │   ├── DailyQuote.js
│   │   │   ├── DailyQuote.css
│   │   │   └── index.js
│   │   ├── Explore/
│   │   │   ├── Explore.js
│   │   │   └── Explore.css
│   │   ├── Profile/
│   │   │   ├── Profile.js
│   │   │   └── Profile.css
│   │   ├── HomePage.js
│   │   ├── HomePage.css
│   │   ├── MeditationTimer.js
│   │   ├── MeditationTimer.css
│   │   ├── SoundLibrary.js
│   │   └── SoundLibrary.css
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── utils/
│   │   └── AudioGenerator.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Установка и запуск

### Предварительные требования
- **Node.js** версии 14 или выше
- **npm** или **yarn**

### Установка
```bash
# Клонирование репозитория
git clone https://github.com/your-username/meditation-app.git

# Переход в директорию
cd meditation-app

# Установка зависимостей
npm install
```

### Запуск в режиме разработки
```bash
npm start
```
Приложение откроется по адресу [http://localhost:3000](http://localhost:3000)

### Сборка для продакшена
```bash
npm run build
```

### Запуск тестов
```bash
npm test
```

## 🎨 Дизайн

### Цветовая палитра
- **Основной градиент**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Акцентные цвета**: 
  - Синий: `#4facfe`
  - Фиолетовый: `#764ba2`
  - Зеленый: `#4CAF50`

### Типографика
- **Основной шрифт**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'`
- **Размеры**: 12px - 48px с адаптивностью

### UI/UX принципы
- **Стеклянный морфизм** с backdrop-filter
- **Плавные анимации** (0.3s ease)
- **Минималистичный дизайн**
- **Интуитивная навигация**

## 📱 Мобильная версия

### Адаптивные брейкпоинты
- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

### Мобильные особенности
- **Touch-friendly** кнопки (минимум 44px)
- **Swipe-friendly** карусели
- **Оптимизированная типографика**
- **Сжатые интерфейсы**

## 🔊 Аудио система

### Web Audio API
```javascript
// Пример генерации звука дождя
const audioContext = new AudioContext();
const noiseBuffer = createNoiseBuffer();
const filter = audioContext.createBiquadFilter();
filter.type = 'bandpass';
filter.frequency.value = 1000;
```

### Типы звуков
1. **Дождь**: Белый шум + случайные капли
2. **Океан**: Низкочастотный шум + LFO модуляция
3. **Лес**: Высокочастотный шум + звуки птиц
4. **Тибетская чаша**: Гармоники + экспоненциальный спад
5. **Камин**: Фильтрованный шум + потрескивание

## 📊 Система пользователей

### Локальное хранение
```javascript
// Структура данных пользователя
{
  id: "unique-id",
  name: "Имя пользователя",
  email: "email@example.com",
  joinDate: "2024-01-01T00:00:00.000Z",
  stats: {
    totalSessions: 0,
    totalMinutes: 0,
    streak: 0,
    lastSessionDate: null,
    favoriteSound: null,
    achievements: []
  }
}
```

### Отслеживание активности
- **Автоматическое** обновление статистики
- **Расчет серий** дней медитации
- **Система достижений** с проверкой условий

## 🎯 Цитаты дня

### Алгоритм смены
```javascript
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
const quoteIndex = dayOfYear % quotes.length;
```

### Коллекция
- **30 уникальных цитат** от мудрецов и философов
- **Тематические категории** с иконками
- **Ежедневная смена** на основе даты

## 🌐 PWA функции

### Manifest.json
```json
{
  "short_name": "Медитация",
  "name": "Приложение для медитации",
  "display": "standalone",
  "theme_color": "#667eea",
  "background_color": "#667eea",
  "orientation": "portrait"
}
```

### Установка
1. Откройте приложение в браузере
2. Нажмите "Добавить на главный экран" (Chrome)
3. Или "Установить" в адресной строке

## 🔧 Настройка

### Добавление новых звуков
1. Откройте `src/utils/AudioGenerator.js`
2. Добавьте новый метод для звука
3. Обновите `soundMap` в `MeditationTimer.js`

### Добавление новых цитат
1. Откройте `src/components/DailyQuote/DailyQuote.js`
2. Добавьте объект в массив `quotes`
3. При необходимости добавьте новую категорию

### Кастомизация дизайна
1. Основные цвета в `src/index.css`
2. Компонентные стили в соответствующих `.css` файлах
3. Градиенты и анимации настраиваются через CSS переменные

## 🚀 Деплой

### Netlify
```bash
npm run build
# Загрузите папку build/ на Netlify
```

### Vercel
```bash
npm run build
# Подключите репозиторий к Vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Добавьте в package.json:
"homepage": "https://username.github.io/meditation-app"
npm run build
npm run deploy
```

## 🤝 Вклад в проект

### Как внести вклад
1. **Fork** репозитория
2. Создайте **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** изменения (`git commit -m 'Add amazing feature'`)
4. **Push** в branch (`git push origin feature/amazing-feature`)
5. Откройте **Pull Request**

### Стандарты кода
- **ESLint** для проверки кода
- **Prettier** для форматирования
- **Conventional Commits** для сообщений коммитов

## 📝 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 👨‍💻 Автор

**Pavel** - *Разработчик* - [GitHub](https://github.com/pavel)

## 🙏 Благодарности

- **React команде** за отличную библиотеку
- **Web Audio API** за возможности работы со звуком
- **Сообществу медитации** за вдохновение
- **Всем мудрецам** за цитаты

## 📞 Поддержка

Если у вас есть вопросы или предложения:
- 📧 Email: support@meditation-app.com
- 🐛 Issues: [GitHub Issues](https://github.com/pavel/meditation-app/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/pavel/meditation-app/discussions)

---

**Сделано с ❤️ для вашего внутреннего мира и спокойствия** 🧘‍♀️✨
