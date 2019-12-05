// https://react-styleguidist.js.org/docs/components.html
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  title: 'AppFollow UI',
  // components: 'src/app/components/**/[A-Z]*.js',
  require: [
    path.join(__dirname, 'src/scss/index.scss'),
    path.join(__dirname, 'src/scss/stylebook.scss'),
  ],
  sections: [
    {
      name: 'Welcome',
      sections: [
        {
          name: 'Github',
          href: 'https://github.com/sharifulin/appfollow-ui',
        },
        {
          name: 'Color',
          content: 'docs/color.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/app/components/**/[A-Z]*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
};
