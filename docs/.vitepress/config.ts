import { defineConfig } from 'vitepress';

const repositoryUrl = 'https://github.com/andresfccy/poli-tsp';

export default defineConfig({
  title: 'Tienda TSP',
  description: 'Portal técnico y académico del proyecto Tienda TSP bajo enfoque TSPi/SDD.',
  base: '/poli-tsp/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { property: 'og:title', content: 'Tienda TSP - Documentación técnica' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Planeación, arquitectura, roadmap, QA y entregas académicas del proyecto.',
      },
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js' }],
    [
      'script',
      {},
      "window.addEventListener('load', function () { if (window.mermaid) { window.mermaid.initialize({ startOnLoad: false, theme: 'neutral' }); window.mermaid.run(); } });",
    ],
  ],
  markdown: {
    config(md) {
      const defaultFence = md.renderer.rules.fence!;

      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const language = token.info.trim();

        if (language === 'mermaid') {
          return `<pre class="mermaid">${md.utils.escapeHtml(token.content)}</pre>`;
        }

        return defaultFence(tokens, idx, options, env, self);
      };
    },
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Tienda TSP',
    nav: [
      { text: 'Proyecto', link: '/proyecto/' },
      { text: 'Arquitectura', link: '/arquitectura/' },
      { text: 'Roadmap', link: '/roadmap/' },
      { text: 'Entregas', link: '/entregas/entrega-1' },
      { text: 'Backlog', link: '/backlog/' },
      { text: 'Seguimiento', link: '/seguimiento/' },
      { text: 'QA', link: '/qa/' },
    ],
    sidebar: [
      {
        text: 'Inicio',
        items: [{ text: 'Home', link: '/' }],
      },
      {
        text: 'Proyecto',
        collapsed: false,
        items: [
          { text: 'Definición general', link: '/proyecto/' },
          { text: 'Arquitectura', link: '/arquitectura/' },
          { text: 'Roadmap', link: '/roadmap/' },
          { text: 'Equipo y roles', link: '/equipo/' },
        ],
      },
      {
        text: 'Entregas',
        collapsed: false,
        items: [
          { text: 'Entrega 1', link: '/entregas/entrega-1' },
          { text: 'Entrega 2', link: '/entregas/entrega-2' },
          { text: 'Entrega 3', link: '/entregas/entrega-3' },
        ],
      },
      {
        text: 'Gestión',
        collapsed: false,
        items: [
          { text: 'Backlog', link: '/backlog/' },
          { text: 'Seguimiento', link: '/seguimiento/' },
          { text: 'Reuniones', link: '/reuniones/' },
          { text: 'Riesgos', link: '/riesgos/' },
          { text: 'QA', link: '/qa/' },
          { text: 'Conclusiones', link: '/conclusiones/' },
        ],
      },
      {
        text: 'Planeación fuente',
        collapsed: true,
        items: [
          { text: 'Plan maestro', link: '/planning/project-plan' },
          { text: 'Roadmap base', link: '/planning/roadmap' },
          { text: 'Backlog base', link: '/planning/backlog' },
          { text: 'Reuniones base', link: '/planning/meetings' },
          { text: 'Riesgos base', link: '/planning/risks' },
          { text: 'Roles base', link: '/planning/tsp-roles' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: repositoryUrl }],
    editLink: {
      pattern: `${repositoryUrl}/edit/master/docs/:path`,
      text: 'Editar esta pagina en GitHub',
    },
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 3],
      label: 'Contenido',
    },
    footer: {
      message: 'Proyecto académico TSPi/SDD construido con React, TypeScript y VitePress.',
      copyright: 'Tienda TSP',
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente',
    },
    lastUpdated: {
      text: 'Última actualización',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
  },
});
