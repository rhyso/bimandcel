import React, { Component } from 'react';
import classNames from 'classnames';
import rsvpLogo from '../images/noun_rsvp.png'
import 'whatwg-fetch';
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
            formSubmitted: false,
            food: '',
            dietary: ''
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
        const { person, food, confirm, dietary } = this.state;
        if (!person || !food || !confirm || !dietary) return;
        // if (updateId) {
        //     this.submitUpdatedComment();
        // } else {
            this.submitNewComment();
        // }
    }

    validFormSubmission()  {
        this.setState({ person: '', food: '', confirm: '', dietary: '', error: null, formSubmitted: true });

    }

    submitNewComment = () => {
        const { person, food, confirm, dietary } = this.state;
        const data = [...this.state.data, { person, food, confirm, dietary, _id: Date.now().toString() }];
        this.setState({ data });
        fetch('http://rhysothomas.webfactional.com/api/comments', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ person, food, confirm, dietary }),
        }).then(res => res.json()).then((res) => {
            if (!res.success) this.setState({ error: res.error.message || res.error });
            else this.validFormSubmission()
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

        let formS

        let userMessage;
        if (!this.state.formSubmitted) {
            formS = (

                <div>

                    <p className="RSVP-header">Please RSVP by 16 July 2018 - thank you!</p>

                    <div className="container">

                         <div className="form">
                             <CommentForm
                                person={this.state.person}
                                food={this.state.food}
                                confirm={this.state.confirm}
                                dietary={this.state.dietary}
                                handleChangeText={this.onChangeText}
                                submitComment={this.submitComment}
                             />
                            {this.state.error && <p>{this.state.error}</p>}
                        </div>

                    </div>
                </div>
            )

        } else {
            formS = (
                <div>

                    <div className="container">
                        <h3 className="form-submitted"> Thanks! </h3>
                    </div>

                </div>
            )
        }

        return (
            <div className={classNames('big-div', 'social')}>
                <div className="inner-div">
                    <h2>RSVP<img src={rsvpLogo} alt="rsvp" className="section-icon"/></h2>
                    <div className="inner-content">


                            {formS}
                    </div>

                </div>
            </div>
                )
    }
}

