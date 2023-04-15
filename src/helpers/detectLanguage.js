export const detectLanguage = () => {
  // Проверяем, есть ли свойство navigator и поддерживается ли метод language
  if (typeof navigator !== 'undefined' && navigator.language) {
    const lang = navigator.language.substr(0, 2).toLowerCase();
    if (lang === 'uk' || lang === 'ru' || lang === 'en') {
      return lang;
    }
  }
  // Если язык не определен, возвращаем значение по умолчанию
  return 'en';
};
