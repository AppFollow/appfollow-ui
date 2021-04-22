import React from 'react';
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

CommentsComponent.defaultProps = {
  text: 'Comments',
  visible: false,
};

export const Comments = React.memo(CommentsComponent);
