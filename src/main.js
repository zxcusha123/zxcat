document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themes = ['light', 'dark', 'zxc'];
  const icons = { light: '☀️', dark: '🌙', zxc: '🔪' };

  let currentTheme = localStorage.getItem('cv-theme') || 'light';

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    if (toggleBtn) toggleBtn.textContent = icons[theme];
    localStorage.setItem('cv-theme', theme);
  };

  applyTheme(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentIndex = themes.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      currentTheme = themes[nextIndex];

      applyTheme(currentTheme);
    });
  }
});