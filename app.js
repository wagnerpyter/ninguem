(() => {
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const contrastButton = document.getElementById('contrast-toggle');
  const installButton = document.getElementById('install-button');
  const connectionLabel = document.getElementById('connection-label');
  let installPrompt = null;

  const setNetworkStatus = () => {
    const online = navigator.onLine;
    connectionLabel.textContent = online ? 'Pronto para explorar' : 'Sem conexão · tentando conteúdo salvo';
    document.documentElement.dataset.network = online ? 'online' : 'offline';
  };
  window.addEventListener('online', setNetworkStatus);
  window.addEventListener('offline', setNetworkStatus);
  setNetworkStatus();

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav?.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
  }));

  const setContrast = enabled => {
    document.body.classList.toggle('high-contrast', enabled);
    contrastButton?.setAttribute('aria-pressed', String(enabled));
    contrastButton?.setAttribute('aria-label', enabled ? 'Desativar alto contraste' : 'Ativar alto contraste');
    try { localStorage.setItem('ninguem-high-contrast', String(enabled)); } catch (_) {}
  };
  try { setContrast(localStorage.getItem('ninguem-high-contrast') === 'true'); } catch (_) { setContrast(false); }
  contrastButton?.addEventListener('click', () => setContrast(contrastButton.getAttribute('aria-pressed') !== 'true'));

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    if (installButton) installButton.hidden = false;
  });
  installButton?.addEventListener('click', async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    installButton.hidden = true;
  });

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
