import React from 'react';
import PropTypes from 'prop-types';


const AttendItem = props => {
    return (
        <div>
            <p>{props.text} - {props.author}</p> <br/>
        </div>
    );
};
AttendItem.propTypes = {
    person: PropTypes.string,
    text: PropTypes.string
}

export default AttendItem