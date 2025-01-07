// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  clientModules: ['src/client-module.js'],
  title: 'CoreShop',
  tagline: 'CoreShop - Pimcore enhanced eCommerce',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.coreshop.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coreshop', // Usually your GitHub org/user name.
  projectName: 'CoreShop', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '4.1',
              path: '',
            },
            '4.0': {
              label: '4.0',
              path: '4.00',
              banner: 'none',
            }
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-B2CQDXCYNC',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-white.svg',
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //       'We launched our new Website, please check it out here <a target="_blank" rel="noopener noreferrer" href="https://www.coreshop.org">www.coreshop.org</a>',
      //   backgroundColor: 'rgb(205, 16, 23)',
      //   textColor: 'white',
      //   isCloseable: false,
      // },
      navbar: {
        title: '',
        logo: {
          alt: 'CoreShop',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'defaultSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://www.coreshop.org/en/partner',
            label: 'Partner Program',
            position: 'left'
          },
          {
            href: 'https://www.coreshop.org/en/product/enterprise-bundles',
            label: 'Enterprise Extensions',
            position: 'left'
          },
          {
            href: 'https://www.coreshop.org/en/contact',
            label: 'Contact Us',
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
                {href: 'https://docs.coreshop.org/3.1.0', label: '3.2'},
                {href: 'https://docs.coreshop.org/3.1.0', label: '3.1 (unmaintained)'},
                {href: 'https://docs.coreshop.org/3.0.0', label: '3.0 (unmaintained)'},
                {href: 'https://docs.coreshop.org/2.2.0', label: '2.2 (unmaintained)'},
                {href: 'https://docs.coreshop.org/2.1.0', label: '2.1 (unmaintained)'},
                {href: 'https://docs.coreshop.org/2.0.0', label: '2.0 (unmaintained)'},
            ],

          },
          {
            href: 'https://github.com/coreshop/CoreShop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'CoreShop Website',
                href: 'https://www.coreshop.org',
              },
              {
                label: 'Partner Program',
                href: 'https://www.coreshop.org/en/partner',
              },
              {
                href: 'https://www.coreshop.org/en/product/enterprise-bundles',
                label: 'Enterprise Extensions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Pimcore GitHub',
                href: 'https://github.com/pimcore/pimcore',
              },
              {
                label: 'CoreShop GitHub',
                href: 'https://github.com/coreshop/CoreShop',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CoreShop GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
    }),
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        indexPages: true,
        hashed: true
      },
    ],
  ],
};

module.exports = config;
