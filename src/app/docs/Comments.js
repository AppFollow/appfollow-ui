import React from 'react';
import PropTypes from 'prop-types';
import {compiler} from 'markdown-to-jsx';

const CommentsComponent = ({text, markdown, visible}) => {
  const [isShow, setIsShow] = React.useState(visible);

  return (
    <div className="comments">
      <div className="comments__btn" onClick={() => setIsShow(!isShow)}>
        {text}
      </div>
      {isShow ? (
        <div className="comments__content">
          {compiler(markdown)}
        </div>
      ) : null}
    </div>
  );
};

CommentsComponent.propTypes = {
  text: PropTypes.string,
  visible: PropTypes.bool,
  markdown: PropTypes.string.isRequired,
};

CommentsComponent.defaultProps = {
  text: 'Comments',
  visible: false,
};

export const Comments = React.memo(CommentsComponent);
