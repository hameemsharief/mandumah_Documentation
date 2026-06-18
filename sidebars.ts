import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    'simple-search',
    {
      type: 'category',
      label: 'نتائج البحث',
      collapsed: false,
      items: [
        'search-results/overview',
        'search-results/sorting',
        'search-results/narrowing',
        'search-results/brief-view',
        'search-results/results-basket',
        'search-results/citation',
        'search-results/full-text',
        'search-results/detailed-view',
      ],
    },
    {
      type: 'category',
      label: 'البحث المتقدم',
      collapsed: false,
      items: [
        'advanced-search/overview',
        'advanced-search/specific-fields',
        'advanced-search/boolean-operators',
        'advanced-search/group-search',
        'advanced-search/phrase-search',
        'advanced-search/arabic-language',
        'advanced-search/filters',
      ],
    },
    {
      type: 'category',
      label: 'التصفح',
      collapsed: false,
      items: [
        'browsing/journals',
        'browsing/theses',
      ],
    },
  ],
};

export default sidebars;
