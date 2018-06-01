// CommentForm.js
import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = props => (
    <form onSubmit={props.submitComment}>
        <input
            type="text"
            name="person"
            placeholder="Your name…"
            value={props.person}
            onChange={props.handleChangeText}
        />
        <input
            type="text"
            name="text"
            placeholder="Say something..."
            value={props.text}
            onChange={props.handleChangeText}
        />
        <button type="submit">Submit</button>
    </form>
);

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    text: PropTypes.string,
    person: PropTypes.string,
};

CommentForm.defaultProps = {
    text: '',
    person: '',
};

export default CommentForm;