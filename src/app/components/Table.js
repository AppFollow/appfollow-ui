import PropTypes from 'prop-types';
import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import {TitleTable} from 'app/components/table/TitleTable';
import {BodyTable} from 'app/components/table/BodyTable';
import {HeaderTable} from 'app/components/table/HeaderTable';
import {ManageTable} from 'app/components/table/ManageTable';
import {ToggleHiddenRowsTable} from 'app/components/table/ToggleHiddenRowsTable';
import {NumberTable} from 'app/components/table/NumberTable';
import {ValueDiffTable} from 'app/components/table/ValueDiffTable';
import {
  SortDirectionPropTypes,
  ColumnItemTablePropTypes,
  RowTablePropTypes,
} from 'app/constants/tableConstant';
import {keyBy, noop} from 'app/helpers/common';

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
}) => {
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
      direction,
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
        cells: row.cells.filter((cell, index) => columnsViewByIndex[index]),
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
      .reduce((sum, col) => sum + col.width, 0);
  }, [columns, countFixedColumn]);

  const isShowToggleHiddenRows = isHideRows && data.length > countViewRows;

  return (
    <div
      className={cn('ui-sheet', `ui-sheet--${type}`, className)}
    >
      {title || isManage ? (
        <div className="ui-sheet__top">
          {title ? <TitleTable title={title} /> : null}
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

TableComponent.propTypes = {
  /** Кастомный стиль для таблицы */
  className: PropTypes.string,
  /** Заголовок таблицы */
  title: PropTypes.node,
  /** Тип таблицы */
  type: PropTypes.oneOf(['normal', 'stripe']),
  /** Нужно ли управление таблицей */
  isManage: PropTypes.bool,
  /** Список видимых колонок */
  viewColumns: PropTypes.arrayOf(PropTypes.string),
  /** Функция после изменения сортировки, возвращает массив id видимых столбцов */
  onChangeViewColumns: PropTypes.func,
  /** Направление сортировки таблицы */
  sortDirection: SortDirectionPropTypes,
  /** Id колонки, которая сейчас сортируется */
  sortColumnId: PropTypes.string,
  /** Функция после изменения сортировки, возвращает объект аналогичный sort */
  onSort: PropTypes.func,
  /**
   * Настройки колонок
   *
   *
    id* - string - id колонки
    content* - node - содержимое заголовка
    isNoManaged? - bool - нужно ли убрать управление колонкой через Manage Table (по умолчанию false)
    manageName? - string - кастомное название колонки в селекторе Manage Table
    width? - string | number - фиксированная ширина колонки
    sortable? - boolean - можно ли сортировать колонку (по умолчанию false)
    firstSortDirection? - 'asc' | 'desc' - направление первой сортировки столбца
    className? - кастомный класс
    cellProps? - свойства для ячейки
  */
  columns: PropTypes.arrayOf(ColumnItemTablePropTypes),
  /**
   * Данные таблицы
   *
    key? - ключ строки
    type? - 'bold' - тип строки
    cells* [{
      key? - ключ ячейки
      node* - node - содержимое заголовка
      className? - кастомный класс
      cellProps? - свойства для ячейки
      align? - 'left' 'center' 'right'
    }]
    rowProps? - свойства для строки
    clickable? - эффект наведения мышки на строку
  */
  data: PropTypes.arrayOf(RowTablePropTypes).isRequired,
  /** Количество колонок, прилепленных к левому краю, прикрепленные столбцы должны быть isNoManaged и иметь width */
  countFixedColumn: PropTypes.number,
  /** Скрывать ли таблицу в more/less  */
  isHideRows: PropTypes.bool,
  /** Количество строчек, которые выводится до more */
  countViewRows: PropTypes.number,
};

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

export const Table = React.memo(TableComponent);

Table.Number = NumberTable;
Table.ValueDiffTable = ValueDiffTable;
