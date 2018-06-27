// CommentForm.js
import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = props => (
    <form onSubmit={props.submitComment}>


        <div className="l-r-wrapper">

            <h3> Your name(s) <span className="required-field">*</span></h3>

            <div class="form-group">

                <input type="text" name="person" placeholder="Your name(s)…" value={props.person} onChange={props.handleChangeText}/>
            </div>

        </div>

        <div className="l-r-wrapper">

            <h3> Attendance <span className="required-field">*</span></h3>

            <div class="form-group">

                <label>Will you be able to attend?</label>

                <input type="text" name="confirm" placeholder="Yes or no" value={props.confirm} onChange={props.handleChangeText} />

            </div>
        </div>

        <div className="l-r-wrapper">

            <h3> Food <span className="required-field">*</span></h3>

            <div class="form-group">

                <label>We will be serving lamb or vegetable tagine - please let us know your preference</label>
                <input type="text" name="food" className="input-control" placeholder="Lamb or veg tagine" value={props.food} onChange={props.handleChangeText}/>

            </div>

        </div>

        <div className="l-r-wrapper">

            <h3> Dietary <span className="required-field">*</span></h3>

            <div class="form-group">

                <label>Please let us know if you have any dietary requirements</label>
                <input type="text" name="dietary" className="input-control" placeholder="" value={props.dietary} onChange={props.handleChangeText}/>

            </div>

        </div>


        <button type="submit">Submit</button>
    </form>
);

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    food: PropTypes.string,
    person: PropTypes.string,
    confirm: PropTypes.string,
    dietary: PropTypes.string,
};

CommentForm.defaultProps = {
    food: '',
    person: '',
    confirm: '',
    dietary: '',
};

export default CommentForm;