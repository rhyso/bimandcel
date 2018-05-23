import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import classNames from 'classnames';

const Attending = (props) => {
    const commentNodes = props.data.map(comment => (
        <Comment
            author={comment.author}
            key={comment._id}
            id={comment._id}
            timestamp={comment.updatedAt}
        >
            { comment.text}
        </Comment>
    ));
    return (
        <div>
            <div className={classNames('big-div', 'details')}>
                <div className="inner-div">
                    <h2>ATTENDENCE LIST</h2>
                    <div className="inner-content">
                        <p className="special-heading">These are the people attending</p>

                            <h3>Attending</h3>
                            { commentNodes }
                    </div>
                </div>
            </div>
        </div>
    );
};

Attending.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        id: PropTypes.string,
        text: PropTypes.string,
    })),
};

Attending.defaultProps = {
    data: [],
};

export default Attending;