import PropTypes from 'prop-types';
import {
  useCallback,
  useMemo,
} from 'react';
import {TitleTable} from 'app/components/table/TitleTable';
import {BodyTable} from 'app/components/table/BodyTable';
import {HeaderTable} from 'app/components/table/HeaderTable';
import {
  SortTablePropTypes,
  ColumnItemTablePropTypes,
  RowTablePropTypes,
} from 'app/constants/tableConstant';
import {keyBy} from 'app/helpers/common';

const TableComponent = ({
  className,
  title,
  type,
  isManage,
  viewColumns,
  sort,
  onSort,
  columns,
  data,
  countFixedColumn,
  isHideRows,
  countViewRows,
}) => {
  const mapColumnById = useMemo(
    () => keyBy(columns, 'id'),
    [columns],
  );

  const handleSort = useCallback((event) => {
    const {id} = event.currentTarget.dataset;

    const col = mapColumnById[id];

    if (!col || !onSort) return;

    let direction = 'desc';

    if (sort.columnId === id) {
      if (sort.direction === 'desc') {
        direction = 'asc';
      }
    } else {
      direction = col.firstSortDirection || 'desc';
    }

    onSort({
      direction,
      columnId: id,
    });
  }, [mapColumnById, onSort, sort]);

  return (
    <div
      className={cn('ui-sheet', `ui-sheet--${type}`, className)}
    >
      {title || isManage ? (
        <div className="ui-sheet__top">
          {title ? <TitleTable title={title} /> : null}
          {isManage ? <div>Manage</div> : null}
        </div>
      ) : null}

      <div className="ui-sheet__content ui-scrollbar">
        <table className="ui-sheet__table">
          {columns ? (
            <HeaderTable
              columns={columns}
              sort={sort}
              onSort={handleSort}
            />
          ) : null}
          <BodyTable
            data={data}
          />
        </table>
      </div>
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
  /** Сортировка таблицы */
  sort: SortTablePropTypes,
  /** Функция после изменения сортировки, возвращает объект аналогичный sort */
  onSort: PropTypes.func,
  /** Настройки колонок */
  columns: PropTypes.arrayOf(ColumnItemTablePropTypes),
  /** Данные таблицы */
  data: PropTypes.arrayOf(RowTablePropTypes).isRequired,
  /** Количество колонок, прилепленных к левому краю */
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
  viewColumns: null,
  sort: {},
  onSort: null,
  columns: [],
  countFixedColumn: 0,
  isHideRows: false,
  countViewRows: 5,
};

export const Table = React.memo(TableComponent);
