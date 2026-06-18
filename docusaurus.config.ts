import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'منصة دار المنظومة',
  tagline: 'قواعد معلومات دار المنظومة - البحث العلمي المتكامل',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.mandumah.com',
  baseUrl: '/',

  organizationName: 'mandumah',
  projectName: 'docs',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap',
  ],
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        direction: 'rtl',
        label: 'العربية',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'منصة دار المنظومة',
      logo: {
        alt: 'دار المنظومة',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'دليل المستخدم',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'دليل المستخدم',
          items: [
            {
              label: 'مقدمة',
              to: '/docs/introduction',
            },
            {
              label: 'البحث البسيط',
              to: '/docs/simple-search',
            },
            {
              label: 'البحث المتقدم',
              to: '/docs/advanced-search/overview',
            },
          ],
        },
        {
          title: 'نتائج البحث',
          items: [
            {
              label: 'نظرة عامة',
              to: '/docs/search-results/overview',
            },
            {
              label: 'سلة النتائج',
              to: '/docs/search-results/results-basket',
            },
            {
              label: 'الاستشهاد المرجعي',
              to: '/docs/search-results/citation',
            },
          ],
        },
        {
          title: 'التصفح',
          items: [
            {
              label: 'تصفح الدوريات',
              to: '/docs/browsing/journals',
            },
            {
              label: 'تصفح الرسائل',
              to: '/docs/browsing/theses',
            },
          ],
        },
      ],
      copyright: `جميع الحقوق محفوظة © ${new Date().getFullYear()} دار المنظومة`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
