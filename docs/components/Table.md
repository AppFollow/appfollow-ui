```js
const columns = [
  {
    id: 'name',
    content: 'Name',
  },
  {
    id: 'data',
    content: 'Difference',
  },
  {
    id: 'nodata',
    content: 'Total',
  },
];
const data = [
  // 1 row
  {
    type: 'bold',
    cells: [
      {node: 'With replies'},
      {node: '1.000'},
      {node: '90'},
    ],
  },
  // 2 row
  {
    cells: [
      {node: 'Without replies'},
      {node: '+1.000'},
      {node: '90'},
    ],
  },
  // 3 row
  {
    cells: [
      {node: 'Total updated reviews'},
      {node: '-0.041'},
      {node: '60289'},
    ],
  },
];
const cellsBigData = Array(20).fill().map((_, index) => ({node: `data${index}`}));
const bigData = [
  // 1 row
  {
    type: 'bold',
    cells: cellsBigData,
  },
  // 2 row
  {
    cells: cellsBigData,
  },
  // 3 row
  {
    cells: cellsBigData,
  },
];
<>
  <Table
    title="Normal table"
    data={data}
  />
  <br />
  <Table
    title="Stripe table"
    data={data}
    type="stripe"
  />
  <br />
  <Table
    title="Normal table with header"
    data={data}
    columns={columns}
  />
  <br />
  <Table
    title="Stripe table with header"
    data={data}
    type="stripe"
    columns={columns}
  />
  <br />
  <Table
    title="Stripe table with header"
    data={data}
    type="stripe"
    columns={columns}
  />
  <br />
  <Table
    title="With scroll stripe"
    data={bigData}
    type="stripe"
  />
  <br />
  <Table
    title="Sortable"
    columns={[
      {
        id: 'name',
        content: 'Name',
        sortable: true,
      },
      {
        id: 'data',
        content: 'Difference',
        sortable: true,
        firstSortDirection: 'asc',
      },
      {
        id: 'nodata',
        content: 'Total',
        sortable: true,
      },
    ]}
    data={data}
    sort={{
      direction: 'asc',
      columnId: 'name',
    }}
    onSort={console.log}
  />
</>
```
