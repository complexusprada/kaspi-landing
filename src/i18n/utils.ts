import ruTranslations from './ru.json';
import kkTranslations from './kk.json';

type Translations = typeof ruTranslations;

const translations: Record<string, Translations> = {
  ru: ruTranslations,
  kk: kkTranslations,
};

export function getTranslations(lang: 'ru' | 'kk'): Translations {
  return translations[lang] || translations.ru;
}

export function t(lang: 'ru' | 'kk', key: string, params?: Record<string, string | number>): string {
  const trans = getTranslations(lang);
  const keys = key.split('.');
  let value: unknown = trans;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  if (typeof value !== 'string') {
    return key;
  }

  if (params) {
    return value.replace(/\{(\w+)\}/g, (_, paramKey) => {
      return params[paramKey]?.toString() ?? `{${paramKey}}`;
    });
  }

  return value;
}

export type Lang = 'ru' | 'kk';
