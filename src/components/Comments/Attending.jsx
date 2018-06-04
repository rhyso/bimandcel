import React from 'react';
import PropTypes from 'prop-types';
import AttendItem from './AttendItem';
import classNames from 'classnames';

const Attending = (props) => {

    const subjectRender = props.data.map((subject) => {
        return (
            <AttendItem person={subject.person} confirm={subject.confirm} food={subject.food} />
        );
    });


    return (
        <div>
            <div className={classNames('big-div', 'details')}>
                <div className="inner-div">
                    <h2>ATTENDENCE LIST</h2>
                    <div className="inner-content">
                        <p className="special-heading">These are the people attending</p>
                        { subjectRender }
                    </div>
                </div>
            </div>
        </div>
    );
};

Attending.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        person: PropTypes.string,
        id: PropTypes.string,
        confirm: PropTypes.string,
    })),
};

Attending.defaultProps = {
    data: [],
};

export default Attending;