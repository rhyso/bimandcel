import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Comment = props => (
    <div className="singleComment">
        <div className="textContent">
            <div className="singleCommentContent">
                <h3>{props.author}</h3>
                <ReactMarkdown source={props.children} />
            </div>
        </div>
    </div>
);

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleUpdateComment: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default Comment;