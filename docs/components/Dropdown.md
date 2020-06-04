```js noeditor
import {Comments} from 'app/docs/Comments';

<Comments
  visible
  markdown={`
- *Открытие:* по клику
- *Закрытие:* при выборе значения, клик вне области, esc
  `}
/>
```

```js noeditor
const [value, setValue] = React.useState('');
const onChange = (event, data) => setValue(JSON.stringify(data));
const options = [
  {
    value: 'val1',
    text: 'Common value',
  },
  {
    flag: 'us',
    value: 'val2',
    text: 'Common value',
  },
  {
    icon: 'world',
    value: 'val3',
    text: 'Common value',
  },
  {
    color: 'red',
    value: 'val4',
    text: 'Common value',
  },
  {
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/26/66/52/26665262-0349-3dfc-58cd-5c844a7a61bf/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/190x190.png',
    value: 'val5',
    text: 'Common value',
  },
  {
    image: 'https://store-images.s-microsoft.com/image/apps.49502.14042327296305282.8f8e4099-2d54-460f-b749-a1c80c0e14c5.efabc51b-f84f-4c4d-a531-0f45b628016a?w=162&h=162&q=90&mode=crop',
    backgroundImageColor: '#0078d7',
    value: 'val6',
    text: 'Common value',
  },
  {
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/26/66/52/26665262-0349-3dfc-58cd-5c844a7a61bf/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/190x190.png',
    icon: 'android',
    value: 'val7',
    text: 'Common value',
  },
  {
    color: 'blue',
    value: 'val8',
    text: 'My value value',
  },
  {
    value: 'val9',
    text: 'Val val val val val val val val val',
  },
  {
    value: 'val10',
    text: 'Val val val val val val val val val',
  },
  {
    value: 'val11',
    text: 'Val val val val val val val val val',
  },
  {
    value: 'val12',
    text: 'Val val val val val val val val val',
  },
];

<>
  <div><b>Log onChange:</b> {value}</div>
  <br />

  <Dropdown
    field="name"
    name="This is name"
    onChange={onChange}
    options={options}
    multi
    value={['val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7']}
  />

  <Dropdown
    field="bar"
    name="Bar"
    onChange={onChange}
    options={options}
    value="val3"
  />

  <Dropdown
    field="without_search"
    name="Without search"
    onChange={onChange}
    options={[
      {value: 'val1', text: 'Длинный Длинный длинный длинн длинный Длинный длинный Длинный длинный текст'},
      options[2],
      options[3],
      options[4],
      options[5],
    ]}
    value="val1"
  />

  <Dropdown
    field="tag"
    name="Tag"
    onChange={onChange}
    options={[
      {value: 'val1', text: 'Длинный длинный Длинный длинный Длинный длинный Длинный длинный тег'},
      options[2],
      options[3],
      options[4],
      options[5],
    ]}
  />

  <Dropdown
    field="tag"
    name="Tag"
    onChange={onChange}
    options={[
      {value: 'val1', text: 'Длинный длинный Длинный длинный Длинный длинный Длинный длинный тег'},
      options[2],
      options[3],
      options[4],
      options[5],
    ]}
    customLabel={(
      <React.Fragment>
        <i className="icon plus" />
        Add Filters
      </React.Fragment>
    )}
  />

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</>
```
