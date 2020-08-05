import PropTypes from 'prop-types';

export const TitleTable = ({title}) => (
  <div className="ui-sheet__title">{title}</div>
);

TitleTable.propTypes = {
  title: PropTypes.node.isRequired,
};
