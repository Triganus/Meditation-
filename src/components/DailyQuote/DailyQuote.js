import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './DailyQuote.css';

const DailyQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Коллекция вдохновляющих цитат о медитации, жизни и внутреннем мире
  const quotes = useMemo(() => [
    {
      text: "Мир приходит изнутри. Не ищите его снаружи.",
      author: "Будда",
      category: "meditation"
    },
    {
      text: "Медитация — это не бегство от жизни, а встреча с ней.",
      author: "Тич Нят Хань",
      category: "meditation"
    },
    {
      text: "Счастье не готовый продукт. Оно приходит от ваших собственных действий.",
      author: "Далай-лама",
      category: "happiness"
    },
    {
      text: "Тишина — это источник великой силы.",
      author: "Лао-цзы",
      category: "silence"
    },
    {
      text: "Вчера — история, завтра — загадка, сегодня — подарок.",
      author: "Элеонора Рузвельт",
      category: "present"
    },
    {
      text: "Дыхание — это мост между телом и разумом.",
      author: "Тич Нят Хань",
      category: "breathing"
    },
    {
      text: "Спокойствие ума — это одно из прекрасных драгоценностей мудрости.",
      author: "Будда",
      category: "peace"
    },
    {
      text: "Самый длинный путь начинается с одного шага.",
      author: "Лао-цзы",
      category: "journey"
    },
    {
      text: "Будьте собой. Все остальные роли уже заняты.",
      author: "Оскар Уайльд",
      category: "authenticity"
    },
    {
      text: "В тишине мы находим нашу истинную природу.",
      author: "Экхарт Толле",
      category: "silence"
    },
    {
      text: "Медитация — это не концентрация, а де-концентрация.",
      author: "Ошо",
      category: "meditation"
    },
    {
      text: "Любовь к себе — это начало романа длиною в жизнь.",
      author: "Оскар Уайльд",
      category: "self-love"
    },
    {
      text: "Настоящий момент — единственное время, над которым мы имеем власть.",
      author: "Тич Нят Хань",
      category: "present"
    },
    {
      text: "Мудрость приходит не от возраста, а от медитации и самопознания.",
      author: "Ошо",
      category: "wisdom"
    },
    {
      text: "Благодарность превращает то, что у нас есть, в достаточно.",
      author: "Мелоди Битти",
      category: "gratitude"
    },
    {
      text: "Внутренний покой начинается с выбора не позволять другим контролировать ваши эмоции.",
      author: "Далай-лама",
      category: "peace"
    },
    {
      text: "Каждый момент — это новое начало.",
      author: "Т.С. Элиот",
      category: "renewal"
    },
    {
      text: "Дорога к просветлению проходит через принятие себя.",
      author: "Карл Юнг",
      category: "acceptance"
    },
    {
      text: "Сострадание к себе — это основа всего сострадания.",
      author: "Пема Чодрон",
      category: "compassion"
    },
    {
      text: "В простоте скрыта последняя изощренность.",
      author: "Леонардо да Винчи",
      category: "simplicity"
    },
    {
      text: "Единственный способ найти истинное счастье — это рискнуть быть полностью открытым.",
      author: "Чак Паланик",
      category: "happiness"
    },
    {
      text: "Медитация — это способ быть с тем, что есть, и принимать это.",
      author: "Джон Кабат-Зинн",
      category: "acceptance"
    },
    {
      text: "Ваша задача не искать любовь, а найти барьеры, которые вы построили против неё.",
      author: "Руми",
      category: "love"
    },
    {
      text: "Тот, кто смотрит наружу, мечтает; тот, кто смотрит внутрь, пробуждается.",
      author: "Карл Юнг",
      category: "awakening"
    },
    {
      text: "Покой — это не отсутствие движения, а равновесие в движении.",
      author: "Джон Рёскин",
      category: "balance"
    },
    {
      text: "Самое важное решение, которое вы принимаете каждый день, — это ваше настроение.",
      author: "Вольтер",
      category: "mood"
    },
    {
      text: "Дзен не где-то еще. Дзен здесь и сейчас.",
      author: "Дзенская мудрость",
      category: "zen"
    },
    {
      text: "Будьте лампой для себя, будьте убежищем для себя.",
      author: "Будда",
      category: "self-reliance"
    },
    {
      text: "Красота начинается в тот момент, когда вы решаете быть собой.",
      author: "Коко Шанель",
      category: "authenticity"
    },
    {
      text: "Каждый вдох — это возможность начать заново.",
      author: "Анонимно",
      category: "breathing"
    }
  ], []);

  // Функция для получения цитаты дня на основе даты
  const getDailyQuote = useCallback(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
  }, [quotes]);

  // Получение иконки для категории
  const getCategoryIcon = (category) => {
    const icons = {
      meditation: "🧘‍♀️",
      happiness: "😊",
      silence: "🤫",
      present: "🎁",
      breathing: "💨",
      peace: "☮️",
      journey: "🛤️",
      authenticity: "✨",
      wisdom: "🦉",
      gratitude: "🙏",
      renewal: "🌱",
      acceptance: "🤗",
      compassion: "💖",
      simplicity: "🌿",
      love: "❤️",
      awakening: "🌅",
      balance: "⚖️",
      mood: "🌈",
      zen: "🕯️",
      "self-reliance": "💪",
      "self-love": "💝"
    };
    return icons[category] || "✨";
  };

  useEffect(() => {
    // Устанавливаем цитату дня
    const quote = getDailyQuote();
    setCurrentQuote(quote);

    // Анимация появления
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [getDailyQuote]);

  if (!currentQuote) return null;

  return (
    <div className={`daily-quote ${isVisible ? 'visible' : ''}`}>
      <div className="quote-container">
        <div className="quote-icon">
          {getCategoryIcon(currentQuote.category)}
        </div>
        
        <div className="quote-content">
          <blockquote className="quote-text">
            "{currentQuote.text}"
          </blockquote>
          <cite className="quote-author">
            — {currentQuote.author}
          </cite>
        </div>
        
        <div className="quote-decoration">
          <div className="quote-marks">"</div>
        </div>
      </div>
      
      <div className="quote-footer">
        <span className="quote-label">Цитата дня</span>
        <div className="quote-sparkles">
          <span>✨</span>
          <span>⭐</span>
          <span>💫</span>
        </div>
      </div>
    </div>
  );
};

export default DailyQuote;
