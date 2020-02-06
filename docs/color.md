```js noeditor
import {Comments} from 'app/docs/Comments';

<Comments
  markdown={`
*Тут комментарии от Даши*

##поддерживает markdown

[Ссылка](https://link.org)
  `}
/>
```

```js noeditor
import {ColorItem} from 'app/docs/ColorItem';
const colors = [
  {
    text: 'Green',
    colors: [
      {name: '$green', color: '#36c55f'},
      {name: '$green__hover', color: '#34d562'},
      {name: '$green__disabled', color: '#86dc9f'},
    ],
  },
  {
    text: 'Red',
    colors: [
      {name: '$red', color: '#fd334b'},
      {name: '$red__hover', color: '#ff435a'},
      {name: '$red__disabled', color: '#ff8492'},
    ],
  },
  {
    text: 'Blue',
    colors: [
      {name: '$blue', color: '#1c76cc'},
      {name: '$blue__hover', color: '#2380da'},
      {name: '$blue__disabled', color: '#8ebbe6'},
    ],
  },
  {
    text: 'Teal',
    colors: [
      {name: '$teal', color: '#00bebe'},
      {name: '$teal__hover', color: '#21c6c5'},
      {name: '$teal__disabled', color: '#80dfdf'},
    ],
  },
  {
    text: 'Grey',
    colors: [
      {name: '$grey', color: '#f2f2f2', isInverted: true},
      {name: '$grey__hover', color: '#eaebed', isInverted: true},
      {name: '$grey__disabled', color: '#f7f7f7', isInverted: true},
    ],
  },
  {
    text: 'Text',
    colors: [
      {name: '$dark', color: '#0a1b2a'},
      {name: '$graphite', color: '#1e384e'},
      {name: '$steel', color: '#637889'},
      {name: '$silver', color: '#b2bed0'},
      {name: '$stone', color: '#d4d4d5', isInverted: true},
      {name: '$snow', color: '#fafafa', isInverted: true},
      {name: '$cream', color: '#fff6d4', isInverted: true},
    ],
  },
  {
    text: 'Main Rating',
    colors: [
      {name: '$rating5Color', color: '#66b47c'},
      {name: '$rating4Color', color: '#99c95d'},
      {name: '$rating3Color', color: '#fac718'},
      {name: '$rating2Color', color: '#f48e1f'},
      {name: '$rating1Color', color: '#f05f3a'},
    ],
  },
  {
    text: 'Extra Rating',
    colors: [
      {name: '$ratingHigh3Color', color: '#004f5a'},
      {name: '$ratingHigh2Color', color: '#007020'},
      {name: '$ratingHigh1Color', color: '#3a9754'},
      {name: '$ratingLow1Color', color: '#cb4747'},
      {name: '$ratingLow2Color', color: '#b60000'},
      {name: '$ratingLow3Color', color: '#790909'},
    ],
  },
  {
    text: 'Tags',
    colors: [
      {name: '$tags50Color', color: '#86dc9f'},
      {name: '$tags80Color', color: '#edbc2f'},
      {name: '$tags100Color', color: '#ff8492'},
      {name: '$tagsEmptyColor', color: '#999'},
    ],
  },
  {
    text: 'Extra Colors',
    colors: [
      {name: '$sun', color: '#edbc2f'},
      {name: '$sky', color: '#55b1f4'},
    ],
  },
  {
    text: 'Messages Banners Background',
    colors: [
      {name: '$bannerBlue', color: '#f5fcfc', isInverted: true},
      {name: '$bannerYellow', color: '#fffcf1', isInverted: true},
      {name: '$bannerRed', color: '#fff7f8', isInverted: true},
    ],
  },
  {
    text: 'Messages Banners Border',
    colors: [
      {name: '$bannerBorderBlue', color: '#b3ecec', isInverted: true},
      {name: '$bannerBorderYellow', color: '#fceebd', isInverted: true},
      {name: '$bannerBorderRed', color: '#fec2c9', isInverted: true},
    ],
  },
];

<div className="color-table">
  {colors.map(colorData => (
    <div className="color-table__row" key={colorData.text}>
      <div className="color-table__text">{colorData.text}</div>
      {colorData.colors.map(color => (
        <ColorItem
          key={color.name}
          name={color.name}
          color={color.color}
          isInverted={color.isInverted}
        />
      ))}
    </div>
  ))}
</div>
```
