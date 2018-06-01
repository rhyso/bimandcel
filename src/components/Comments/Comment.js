import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Comment = props => (
    <div className="singleComment">
        <div className="textContent">
            <div className="singleCommentContent">
                <h3>{props.person}</h3>
                <h3>{props.children} </h3>
            </div>
        </div>
    </div>
);

Comment.propTypes = {
    person: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleUpdateComment: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default Comment;