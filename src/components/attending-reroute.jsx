import React, { Component } from 'react';
import Attending from './Comments/Attending'

export class AttendingReRoute extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            data: [],
        };
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    loadCommentsFromServer = () => {
        // fetch returns a promise. If you are not familiar with promises, see
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        fetch('/api/comments/')
            .then(data => data.json())
            .then((res) => {
                if (!res.success) this.setState({ error: res.error });
                else this.setState({ data: res.data });
            });
    }

    render() {
        return (
            <div>
                <Attending
                    data={this.state.data}
                />
            </div>

        )
    }
}

export default AttendingReRoute
