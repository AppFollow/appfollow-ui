import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import cn from 'classnames';

import {keyBy, noop} from '../helpers/common';

import {TitleTable} from './table/TitleTable';
import {BodyTable} from './table/BodyTable';
import {HeaderTable} from './table/HeaderTable';
import {ManageTable} from './table/ManageTable';
import {ToggleHiddenRowsTable} from './table/ToggleHiddenRowsTable';
import {NumberTable} from './table/NumberTable';
import {ValueDiffTable} from './table/ValueDiffTable';

export interface ITableProps {
  data: Array<TableRow>;
  title?: string;
  viewColumns?: ReadonlyArray<string>;
  onChangeViewColumns?: (viewColumns: Array<string>) => void;
  sortDirection?: TTableDirection;
  sortColumnId?: string;
  onSort?: (data: {columnId: string; direction: TTableDirection}) => void;
  columns?: ReadonlyArray<TableColumn>;
  countFixedColumn?: number;
  isManage?: boolean;
  className?: string;
  isHideRows?: boolean;
  type?: 'stripe' | 'normal';
  countViewRows?: number;
}

export type TTableDirection = 'asc' | 'desc';

export type TTypeCellValueDiff = 'negative' | 'positive';

export type TableColumn = {
  id: string;
  content: React.ReactNode;
  isNoManaged?: boolean;
  manageName?: string;
  width?: string | number;
  sortable?: boolean;
  firstSortDirection?: TTableDirection;
  className?: string;
  cellProps?: object;
};

export type TableCell = {
  node: React.ReactNode;
  key?: string;
  className?: string;
  cellProps?: object;
  align?: 'left' | 'center' | 'right';
};

export type TableRow = {
  type?: 'bold';
  cells?: Array<TableCell>;
  rowProps?: object;
  clickable?: boolean;
};

export type TOnSortArg = {
  direction: TTableDirection;
  columnId: string;
};

export interface IValueDiffTable {
  type?: TTypeCellValueDiff;
  diff?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  width?: string | number;
  widthDiff?: string | number;
}

export interface INumberTable {
  type?: TTypeCellValueDiff;
  children: React.ReactNode;
  className?: string;
  width?: string | number;
}

const TableComponent = ({
  className,
  title,
  type,
  isManage,
  viewColumns,
  onChangeViewColumns,
  sortDirection,
  sortColumnId,
  onSort,
  columns,
  data,
  countFixedColumn,
  isHideRows,
  countViewRows,
}: ITableProps & {viewColumns: ReadonlyArray<string>, columns: ReadonlyArray<TableColumn>, countViewRows: number}) => {
  const [isHide, setIsHide] = useState(isHideRows);
  const mapColumnById = useMemo(
    () => keyBy(columns, 'id'),
    [columns],
  );

  const handleSort = useCallback((event) => {
    const {id} = event.currentTarget.dataset;

    const col = mapColumnById[id];

    if (!col || !onSort) return;

    let direction = 'desc';

    if (sortColumnId === id) {
      if (sortDirection === 'desc') {
        direction = 'asc';
      }
    } else {
      direction = col.firstSortDirection || 'desc';
    }

    onSort({
      // TODO: FIX
      direction: direction as any,
      columnId: id,
    });
  }, [mapColumnById, onSort, sortDirection, sortColumnId]);

  const columnsResult = useMemo(
    () => {
      if (!isManage) return columns;

      return columns.filter(column => viewColumns.includes(column.id));
    },
    [columns, isManage, viewColumns],
  );

  const dataManaged = useMemo(
    () => {
      if (!isManage) return data;

      const columnsViewByIndex = columns.reduce((result, col, index) => {
        result[index] = viewColumns.includes(col.id);

        return result;
      }, {});

      return data.map((row) => ({
        ...row,
        cells: row.cells!.filter((cell, index) => columnsViewByIndex[index]),
      }));
    },
    [columns, data, isManage, viewColumns],
  );

  const dataResult = useMemo(
    () => isHide
      ? dataManaged.slice(0, countViewRows)
      : dataManaged,
    [dataManaged, isHide, countViewRows],
  );

  const widthPlaceholder = useMemo(() => {
    if (!countFixedColumn) return 0;

    return columns
      .slice(0, countFixedColumn)
      .reduce((sum, col) => sum + +col.width!, 0);
  }, [columns, countFixedColumn]);

  const isShowToggleHiddenRows = isHideRows && data.length > countViewRows;

  return (
    <div
      className={cn('ui-sheet', `ui-sheet--${type}`, className)}
    >
      {title || isManage ? (
        <div className="ui-sheet__top">
          {title ? <TitleTable title={title} /> : <div />}
          {isManage ? (
            <ManageTable
              columns={columns}
              viewColumns={viewColumns}
              onChangeViewColumns={onChangeViewColumns}
            />
          ) : null}
        </div>
      ) : null}

      <div className="ui-sheet__content-wrap">
        <div className="ui-sheet__content ui-scrollbar">
          <table className="ui-sheet__table">
            {columns ? (
              <HeaderTable
                columns={columnsResult}
                sortDirection={sortDirection}
                sortColumnId={sortColumnId}
                onSort={handleSort}
                countFixedColumn={countFixedColumn}
                widthPlaceholder={widthPlaceholder}
              />
            ) : null}
            <BodyTable
              data={dataResult}
              columns={columnsResult}
              countFixedColumn={countFixedColumn}
              widthPlaceholder={widthPlaceholder}
            />
          </table>
        </div>
      </div>
      {isShowToggleHiddenRows ? (
        <ToggleHiddenRowsTable
          isHide={isHide}
          setIsHide={setIsHide}
        />
      ) : null}
    </div>
  );
};

TableComponent.displayName = 'Table';

TableComponent.defaultProps = {
  className: '',
  title: null,
  type: 'normal',
  isManage: false,
  viewColumns: [],
  onChangeViewColumns: noop,
  sortDirection: 'asc',
  sortColumnId: '',
  onSort: null,
  columns: [],
  countFixedColumn: 0,
  isHideRows: false,
  countViewRows: 5,
};

export const Table = React.memo(TableComponent) as any as React.NamedExoticComponent<ITableProps> & {
  ValueDiffTable: React.FC<IValueDiffTable>;
  Number: React.FC<INumberTable>;
};

Table.Number = NumberTable as any;
Table.ValueDiffTable = ValueDiffTable as any;
