/* eslint-disable
  @typescript-eslint/no-var-requires,
  no-undef
  */

const path = require('path');

module.exports = {
  title: 'AppFollow UI',
  require: [
    path.join(__dirname, 'src/css/index.css'),
    path.join(__dirname, 'src/css/stylebook.css'),
  ],
  ribbon: {
    url: 'https://github.com/AppFollow/appfollow-ui',
    text: 'GitHub',
  },
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {}).parse,
  pagePerSection: true,
  sections: [
    {
      name: 'Welcome',
      content: 'readme.md',
      sections: [
        {
          name: 'Color',
          content: 'docs/color.md',
        },
      ],
      sectionDepth: 1,
    },
    {
      name: 'Components',
      components: 'src/app/components/[A-Z]*.tsx',
      exampleMode: 'collapse',
      usageMode: 'expand',
      sectionDepth: 1,
    },
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import {${name}} from 'appfollow-ui/lib/app/components/${name}';`;
  },
  getExampleFilename(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return path.join(__dirname, `docs/components/${name}.md`);
  },
  template: {
    body: {
      raw: '<link rel="stylesheet" href="/data/semantic/semantic.min.css">',
    },
  },
};
