```
<Message
  type="warning"
  icon={{
    type: 'img',
    img: 'https://watch.appfollow.io/assets/2/img/smiles/glowing-star.png',
  }}
>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message
  type="info"
  icon={{
    type: 'img',
    img: 'https://watch.appfollow.io/assets/2/img/smiles/electric-light-bulb.png',
    isBackground: false,
  }}
>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message
  type="info"
  icon={{
    type: 'node',
    node: <span style={{color: 'red'}}>?</span>,
    isBackground: false,
  }}
>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message type="error">
  Lorem ipsum dolor <a href="#">sit amet</a>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message
  type="info"
  icon={{
    type: 'img',
    img: 'https://watch.appfollow.io/assets/2/img/svg/app-store.svg',
    isBackground: false,
  }}
>
  <a href="#">Link App Store Connect account</a> to see the numbers of Impressions, App Units, Page Views and Conversion rates on the Chart
</Message>

<br />

<Message type="error" onRemove={console.log}>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message
  type="warning"
  icon={{
    name: 'warning sign',
  }}
  actionNode={(
    <a href="#">Upgrade →</a>
  )}
>
  You don't have this feature!
</Message>

<br />

<Message
  type="warning"
  icon={{
    type: 'img',
    img: 'https://watch.appfollow.io/assets/2/img/svg/payment-lock.svg',
    isBackground: false,
    size: 'big',
  }}
  actionNode={(
    <a href="#">Upgrade →</a>
  )}
>
  Only your tracked keywords are included in this chart. To see the position distribution for all the 246 ranked keywords, please upgrade your account.
</Message>

<br />

<Message
  type="info"
  icon={{
    name: 'bar',
    isBackground: false,
    size: 'big',
  }}
>
  Cheers!
</Message>
```

Types:
```
<Message type="warning" icon={{name: 'american sign language interpreting'}}>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message type="info" icon={{name: 'universal access'}}>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message type="error" icon={{name: 'music'}}>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>

<br />

<Message type="default" icon={{name: 'birthday cake'}}>
  Lorem ipsum dolor <b>sit amet</b>, consectetur adipisicing elit. Voluptates maiores atque ipsam ducimus!
</Message>
```
