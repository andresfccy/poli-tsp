import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.css';

function renderMermaid() {
  if (typeof window === 'undefined') {
    return;
  }

  window.setTimeout(() => {
    const mermaid = (window as typeof window & { mermaid?: { run: () => Promise<void> } }).mermaid;
    void mermaid?.run();
  }, 0);
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    router.onAfterRouteChanged = renderMermaid;
  },
} satisfies Theme;
