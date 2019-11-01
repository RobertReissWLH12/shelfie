import React, {Component} from 'react';
// import './Form.css'
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: "",
            imgurl: "",
            // previewimg: ""
        }
    }


    render() {
        return (
            <div>
            <h2>Form</h2>
            </div>
        )
    }
}