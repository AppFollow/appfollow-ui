ColorItem example in table

```js noeditor
import {colors} from 'app/colors';
import {ColorItem} from 'app/docs/ColorItem';

<table>
    <tbody>
        <tr>
            <td>
              {Object.keys(colors).map(key => (
                <ColorItem key={key} name={key} color={colors[key]} />
              ))}
            </td>
        </tr>
    </tbody>
</table>
```
