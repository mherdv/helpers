module.exports = {
  sassOptions: {
    prependData: "@use '/src/base-styles/_all.scss' as *;",
  },
  // i18n: {  no next export work
  //   locales: ['hy', 'ru', 'en'],
  //   defaultLocale: 'hy',
  //   localeDetection: false,
  // },
  images: {
    loader: 'akamai',
    path: '/',
  },

  trailingSlash: true,
  // async exportPathMap(defaultPathMap) {
  //   console.log({ defaultPathMap });
  //   return {
  //     ...defaultPathMap,
  //     // '/[lang]/portfolios/davlab': { page: '[lang]/portfolios/davlab', query: { lang: 'hy' } },
  //     // '/[lang]/portfolios/davlab': { page: '[lang]/portfolios/davlab', query: { lang: 'ru' } },
  //   };
  // },
};
