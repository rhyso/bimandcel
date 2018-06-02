import React from 'react';
import PropTypes from 'prop-types';


const AttendItem = props => {
    return (
        <div>
            <p>{props.person} - {props.food}</p> <br/>
        </div>
    );
};
AttendItem.propTypes = {
    person: PropTypes.string,
    food: PropTypes.string
}

export default AttendItem