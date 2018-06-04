// CommentForm.js
import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = props => (
    <form onSubmit={props.submitComment}>
        <p>Your name</p>
        <input
            type="text"
            name="person"
            placeholder="Your name…"
            value={props.person}
            onChange={props.handleChangeText}
        />
        <br/><br/>
        <p>We will be serving lamb or vegetable tagine - please let us know your preference</p>


        <input
            type="text"
            name="food"
            placeholder="Lamb or veg tagine"
            value={props.food}
            onChange={props.handleChangeText}
        />
        <p>Will you be able to attend?</p><br/><br/>
        <input
            type="text"
            name="confirm"
            value={props.confirm}
            onChange={props.handleChangeText}
            checked /> I/we would be delighted to attend<br/>

        <button type="submit">Submit</button>
    </form>
);

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    food: PropTypes.string,
    person: PropTypes.string,
    confirm: PropTypes.string,
};

CommentForm.defaultProps = {
    food: '',
    person: '',
    confirm: '',
};

export default CommentForm;