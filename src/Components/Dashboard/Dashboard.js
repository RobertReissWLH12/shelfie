import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    //  NO STATE!!!!

    render() {
        return (
            <div>
            <h2>Dashboard</h2>
            <Product />
            </div>
        )
    }
}
