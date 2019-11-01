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
            previewimg: "https://wanowi.com/public/uploads/products/list/product-default.jpg"
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