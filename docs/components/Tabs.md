```js
const tabs = [
  {
    name: 'first',
    title: 'First tab',
    icon: 'lock',
  },
  {
    name: 'second',
    title: 'Second tab',
  },
  {
    name: 'third',
    title: 'Third tab',
    icon: 'plus',
  },
  {
    name: 'fourth',
    icon: 'pause',
  },
];

const [activeTab, setActiveTab] = React.useState('first');

<Tabs activeTab={activeTab} tabs={tabs} onChange={(event, newTab) => setActiveTab(newTab)}>
  {activeTab}
</Tabs>
```
