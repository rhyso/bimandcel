import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AttendItem from './AttendItem';
import classNames from 'classnames';

const Attending = (props) => {

    const subjectRender = props.data.map((subject) => {
        return (
            <AttendItem text={subject.person} author={subject.text} />
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
        text: PropTypes.string,
    })),
};

Attending.defaultProps = {
    data: [],
};

export default Attending;