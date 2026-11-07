export const DEFAULT_SENDER = 'Pratik Zajam';
export const DEFAULT_RECIPIENT = 'Rahul';

export const TEMPLATES = {
  classic: {
    id: 'classic',
    name: 'Classic & Heartfelt',
    emoji: '🪔',
    subtitle: 'Health, Peace & Prosperity',
    p1: 'May this Diwali bless you with good health, a peaceful mind and endless energy.',
    p2: 'May your dreams turn into reality, your hard work bring success, and your life always be filled with happiness and prosperity.',
    defaultBlessings: ['health', 'energy', 'dreams', 'success', 'prosperity']
  },
  prosperity: {
    id: 'prosperity',
    name: 'Lakshmi Prosperity',
    emoji: '💰',
    subtitle: 'Abundance & Wealth',
    p1: 'On this auspicious occasion of Deepavali, may Goddess Lakshmi shower her divine grace upon your home with boundless wealth, prosperity, and continuous growth.',
    p2: 'May success crown every step of your journey, and may your life always be filled with radiant joy, peace, and abundance.',
    defaultBlessings: ['prosperity', 'success', 'harmony']
  },
  success: {
    id: 'success',
    name: 'Dreams & Success',
    emoji: '🌟',
    subtitle: 'Triumphs & Milestones',
    p1: 'May the brilliant golden light of Diwali lamps illuminate your path to greatness, transforming your highest ambitions into glorious reality.',
    p2: 'May your dedication bring triumphant achievements, good health, and an abundance of happiness for you and your family.',
    defaultBlessings: ['dreams', 'success', 'energy', 'health']
  },
  joy: {
    id: 'joy',
    name: 'Joy & Festivity',
    emoji: '✨',
    subtitle: 'Laughter, Warmth & Light',
    p1: 'Wishing you a Diwali sparkling with laughter, joyful celebrations, sweet moments with loved ones, and everlasting light.',
    p2: 'May this holy festival bring you endless energy, good fortune, and fill every day of the coming year with cheerful prosperity.',
    defaultBlessings: ['joy', 'energy', 'prosperity', 'health']
  }
};

export const BLESSING_OPTIONS = [
  {
    key: 'health',
    emoji: '🌿',
    label: 'Good Health & Peaceful Mind',
    text: 'good health, a peaceful mind and endless energy'
  },
  {
    key: 'energy',
    emoji: '⚡',
    label: 'Endless Energy & Vitality',
    text: 'limitless vitality and positive energy'
  },
  {
    key: 'dreams',
    emoji: '🌟',
    label: 'Dreams Turned to Reality',
    text: 'your dreams turning into reality'
  },
  {
    key: 'success',
    emoji: '🏆',
    label: 'Hard Work Bringing Success',
    text: 'your hard work bringing abundant success'
  },
  {
    key: 'prosperity',
    emoji: '💰',
    label: 'Endless Happiness & Prosperity',
    text: 'everlasting happiness, wealth and prosperity'
  },
  {
    key: 'harmony',
    emoji: '🪔',
    label: 'Divine Inner Light & Harmony',
    text: 'divine inner light, peace and harmony illuminating every shadow'
  }
];

export const FIVE_DIYAS = [
  { id: 1, label: 'Health', title: 'Diya of Health' },
  { id: 2, label: 'Peace', title: 'Diya of Peace' },
  { id: 3, label: 'Success', title: 'Diya of Success' },
  { id: 4, label: 'Prosperity', title: 'Diya of Prosperity' },
  { id: 5, label: 'Joy', title: 'Diya of Joy' }
];

