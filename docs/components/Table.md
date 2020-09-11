```js
import {random} from 'app/helpers/common';

const columns = [
  {
    id: 'name',
    content: 'Name',
    sortable: true,
    firstSortDirection: 'asc',
    isNoManaged: true,
    width: 200,
  },
  {
    id: 'newPositiveRatings',
    content: 'New Positive Ratings',
    sortable: true,
    isNoManaged: true,
    width: 200,
  },
  {
    id: 'newNegativeRatings',
    content: 'New Negative Ratings',
    sortable: true,
  },
  {
    id: 'reviewsReceived',
    content: 'Reviews Received',
    sortable: true,
  },
  {
    id: 'reviewsReplied',
    content: 'Reviews Replied',
    sortable: true,
  },
  {
    id: 'sentimentScore',
    content: 'Sentiment Score',
    sortable: true,
  },
  {
    id: 'reviewsInboxWoAnswer',
    content: 'Reviews Inbox w/o Answer',
    sortable: true,
  },
  {
    id: 'topAgent',
    content: 'Top Agent',
    sortable: true,
    firstSortDirection: 'asc',
  },
  {
    id: 'avgResponseTimee',
    content: 'Avg. Response Time',
    sortable: true,
  },
  {
    id: 'reviewsTagged',
    content: 'Reviews Tagged',
    sortable: true,
  },
  {
    id: 'mostPopularTags',
    content: 'Most Popular Tags',
  },
];
const getSymbol = (value) => {
  if (value > 0) return '+';
  if (value < 0) return '-';

  return '';
};
const getType = (value) => {
  if (value > 0) return 'positive';
  if (value < 0) return 'negative';

  return '';
};
const getRandomAvgCell = () => {
  const value = random(-5, 5);
  const viewValue = Math.abs(value).toFixed(3);
  const symbol = getSymbol(value);
  const diff = random(-50, 50);
  const symbolDiff = getSymbol(diff);

  return {
    node: (
      <Table.ValueDiffTable
        type={getType(value)}
        width={110}
        widthDiff={50}
        diff={`${symbolDiff}${Math.ceil(Math.abs(diff))}%`}
      >
        {symbol}{viewValue}
      </Table.ValueDiffTable>
    ),
  }
};
const getRandomValueCell = (addSymbol) => {
  const value = Math.ceil(random(-100, 100));
  const symbol = getSymbol(value);

  return {
    node: (
      <Table.Number type={getType(value)} width={30}>
        {symbol}{Math.ceil(Math.abs(value))}
      </Table.Number>
    ),
    align: 'right',
  };
};
const getRow = (name) => {
  return {
    cells: [
      {node: name},
      getRandomAvgCell(),
      getRandomAvgCell(),
      getRandomValueCell(),
      getRandomValueCell(),
      getRandomValueCell('%'),
      getRandomValueCell(),
      {node: 'Top Agent'},
      {node: '10h 30m'},
      getRandomValueCell('%'),
      {node: 'Tags'},
    ],
  };
};

const data = React.useMemo(() => ([
  'Advanced Reviews Dashboard',
  'Amazon Replies',
  'Keyword Popularity',
  'Keyword Recommendations',
  'Reviews Dashboard',
  'Semantic Analysis',
  'Ratings chart',
  'Reviews chart',
  'Replies chart',
  'Tags chart',
  'Likes chart',
  'Auto-tags',
].map(getRow)), []);

const [sort, setSort] = React.useState({
  direction: 'asc',
  columnId: 'name',
});
const [viewColumns, setViewColumns] = React.useState([
  'name',
  'newPositiveRatings',
  'newNegativeRatings',
  'reviewsReceived',
  'reviewsReplied',
  'sentimentScore',
]);

<Table
  title="Controllable and Sortable"
  columns={columns}
  data={data}
  sortDirection={sort.direction}
  sortColumnId={sort.columnId}
  onSort={setSort}
  isManage
  viewColumns={viewColumns}
  onChangeViewColumns={setViewColumns}
  isHideRows
  countFixedColumn={2}
/>
```


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
    rowProps: {
      onClick: () => console.log('test'),
    },
    clickable: true,
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
    sortDirection="asc"
    sortColumnId="name"
    onSort={console.log}
  />
</>
```
