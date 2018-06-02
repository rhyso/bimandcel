import React, { Component } from 'react';
import classNames from 'classnames';
import rsvpLogo from '../images/noun_rsvp.png'
import 'whatwg-fetch';
import Attending from './Comments/Attending';
import CommentForm from './Comments/CommentForm';
import '../rsvp.css';

export class RSVP extends Component {

    constructor() {
        super();
        this.state = {
            data:[],
            error: null,
            confirm: '',
            person: '',
            food: ''
        };
    }


    onChangeText = (e) => {
        const newState = { ...this.state };
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    // onUpdateComment = (id) => {
    //     const oldComment = this.state.data.find(c => c._id === id);
    //     if (!oldComment) return;
    //     this.setState({ author: oldComment.author, text: oldComment.text, updateId: id });
    // }
    //
    // onDeleteComment = (id) => {
    //     const i = this.state.data.findIndex(c => c._id === id);
    //     const data = [
    //         ...this.state.data.slice(0, i),
    //         ...this.state.data.slice(i + 1),
    //     ];
    //     this.setState({ data });
    //     fetch(`api/comments/${id}`, { method: 'DELETE' })
    //         .then(res => res.json()).then((res) => {
    //         if (!res.success) this.setState({ error: res.error });
    //     });
    // }

    submitComment = (e) => {
        e.preventDefault();
        const { person, food, confirm } = this.state;
        if (!person || !food || !confirm) return;
        // if (updateId) {
        //     this.submitUpdatedComment();
        // } else {
            this.submitNewComment();
        // }
    }

    submitNewComment = () => {
        const { person, food, confirm } = this.state;
        const data = [...this.state.data, { person, food, confirm, _id: Date.now().toString() }];
        this.setState({ data });
        fetch('http://rhysothomas.webfactional.com/api/comments', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ person, food, confirm }),
        }).then(res => res.json()).then((res) => {
            if (!res.success) this.setState({ error: res.error.message || res.error });
            else this.setState({ person: '', food: '', confirm: '', error: null });
        });
    }

    // submitUpdatedComment = () => {
    //     const { author, text, updateId } = this.state;
    //     fetch(`/api/comments/${updateId}`, {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ author, text }),
    //     }).then(res => res.json()).then((res) => {
    //         if (!res.success) this.setState({ error: res.error.message || res.error });
    //         else this.setState({ author: '', text: '', updateId: null });
    //     });
    // }


    render() {
        return (

            <div className={classNames('big-div', 'social')}>
                <div className="inner-div">
                    <h2>RSVP<img src={rsvpLogo} className="section-icon"/></h2>
                    <div className="inner-content">
                        <p>To RSVP please email XXXX</p>


                        <div className="container">

                            <div className="form">
                                <CommentForm
                                    person={this.state.person}
                                    food={this.state.food}
                                    confirm={this.state.confirm}
                                    handleChangeText={this.onChangeText}
                                    submitComment={this.submitComment}
                                />
                            </div>
                            {this.state.error && <p>{this.state.error}</p>}
                        </div>





                    </div>
                </div>
            </div>

        )
    }
}

