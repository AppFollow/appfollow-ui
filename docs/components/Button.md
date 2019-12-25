```js noeditor
import {Comments} from 'app/docs/Comments';

<Comments
  markdown={`
*Тут комментарии от Даши*

##Кнопки
  `}
/>
```

```js noeditor
const btnsData = [
  {
    name: 'Buttons/Payments_Green',
    props: {type: 'custom', color: 'green', content: 'TITLE'},
    comments: 'Top General Menu, Subscription page',
  },
  {
    name: 'Buttons_Big/Payments_Green',
    props: {type: 'custom', color: 'green', size: 'big', content: 'TITLE'},
    comments: '',
  },
  {
    name: 'Buttons/Payments_Red',
    props: {type: 'custom', color: 'red', content: 'TITLE'},
    comments: 'Top General Menu',
  },
  {
    name: 'Buttons_Big/Payments_Red',
    props: {type: 'custom', color: 'red', size: 'big', content: 'TITLE'},
    comments: '',
  },
  {
    name: 'Buttons/Trial',
    props: {type: 'custom', color: 'green', basic: true, content: 'TITLE'},
    comments: 'Semantic analysis (Stub), Pages with an extended trial',
  },
  {
    name: 'Buttons_Big/Trial',
    props: {type: 'custom', color: 'green', size: 'big', basic: true, content: 'TITLE'},
    comments: '',
  },
  {
    name: 'Buttons/Turquoise_Icon',
    props: {type: 'secondary', content: 'Title'},
    comments: 'Integrations, Email Reports, Templates, Folders, Competitors overview, Subscription',
  },
  {
    name: 'Buttons_Big/Turquoise_Icon',
    props: {type: 'secondary', size: 'big', content: 'Title'},
    comments: '',
  },
  {
    name: 'Buttons/Turquoise',
    props: {type: 'secondary', content: 'Title'},
    comments: 'Likes chart, Email reports, ASO Analytics',
  },
  {
    name: 'Buttons_Big/Turquoise',
    props: {type: 'secondary', size: 'big', content: 'Title'},
    comments: '',
  },
  {
    name: 'Buttons/Ghost_Turquoise_Icon',
    props: {type: 'secondary', basic: true, content: 'Title'},
    comments: 'Integrations, Add New App, Compare Apps',
  },
  {
    name: 'Buttons/Ghost_Turquoise',
    props: {type: 'secondary', basic: true, content: 'Title'},
    comments: 'Keywords & ASO',
  },
  {
    name: 'Buttons_Big/Ghost_Turquoise',
    props: {type: 'secondary', size: 'big', basic: true, content: 'Title'},
    comments: '',
  },
  {
    name: 'Buttons/Regular_Icon',
    props: {type: 'primary', content: 'Title'},
    comments: 'Add New App',
  },
  {
    name: 'Buttons_Big/Regular_Icon',
    props: {type: 'primary', size: 'big', content: 'Title'},
    comments: '',
  },
  {
    name: 'Buttons/Regular',
    props: {type: 'primary', content: 'Title'},
    comments: `Ratings & Reviews, Keywords & ASO, Keyword research, Competitors overview, Trending monitor, Word counter,
Featured: Today, Integrations (Pop up), Settings, Collections, Change password, Single Sign-On (SSO),
Billing settings, Get a discount`,
  },
  {
    name: 'Buttons_Big/Regular',
    props: {type: 'primary', size: 'big', content: 'Title'},
    comments: 'How to start',
  },
  {
    name: 'Buttons/Ghost_Blue_Icon',
    props: {type: 'primary', basic: true, content: 'Title'},
    comments: 'Upgrade Account, Integrations, Subscription, Invoices',
  },
  {
    name: 'Buttons/Ghost_Blue',
    props: {type: 'primary', basic: true, content: 'Title'},
    comments: `Featured: Today (Modal Window), Featured: Games, Featured: Games (Modal Window),
Featured: Apps, Featured: Apps (Modal Window)`,
  },
  {
    name: 'Buttons_Big/Ghost_Blue',
    props: {type: 'primary', basic: true, size: 'big', content: 'Title'},
    comments: '',
  },
  {
    name: 'Buttons/Grey_Icon',
    props: {content: 'Title'},
    comments: 'Featured: Today, Integrations, Ratings & Reviews, App preview',
  },
  {
    name: 'Buttons_Big/Grey_Icon',
    props: {size: 'big', content: 'Title'},
    comments: 'Subscription (Modal Window)',
  },
  {
    name: 'Buttons/Grey',
    props: {content: 'Title'},
    comments: `Ratings & Reviews, Featured: Games, Featured: Games (Modal Window), Featured: Apps,
Featured: Apps (Modal Window), Tags Chart, Featured: Today (Modal Window), Integrations, Subscription, Invoices`,
  },
  {
    name: 'Buttons_Big/Grey',
    props: {size: 'big', content: 'Title'},
    comments: '',
  },


];

<table className="button-table">
  <tr className="button-table__head">
    <td>Buttons Name</td>
    <td>Regular View</td>
    <td>Disabled</td>
    <td>Loading</td>
    <td>Pages</td>
  </tr>
  {btnsData.map(item => (
    <tr key={item.name} className="button-table__line">
      <td>{item.name}</td>
      <td><Button {...item.props} /></td>
      <td><Button {...item.props} disabled /></td>
      <td><Button {...item.props} loading /></td>
      <td>{item.comments}</td>
    </tr>
  ))}
</table>
```

Types:
```js
<Button type="primary">Primary</Button>

<Button type="secondary">Secondary</Button>

<Button>Default</Button>
```

Custom Colors:
```js
<Button type="custom" color="green">Green</Button>
<Button type="custom" color="red">Red</Button>
```

Size:
```js
<Button>Normal size</Button>
<Button size="big">Big size</Button>
```

Only border:
```js
<Button type="primary" basic>Primary</Button>

<Button type="secondary" basic>Secondary</Button>
```

Loading:
```js
<Button type="primary" loading>Primary</Button>

<Button type="secondary" loading>Secondary</Button>

<Button type="custom" color="red" basic loading>Red basic</Button>
```

Disabled:
```js
<Button type="primary" disabled>Primary</Button>

<Button type="secondary" disabled>Secondary</Button>

<Button type="custom" color="red" disabled basic>Basic red disabled</Button>
```

