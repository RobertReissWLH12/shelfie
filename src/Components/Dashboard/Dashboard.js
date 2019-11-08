import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {inventory: [] }

        this.getInventory = this.getInventory.bind(this)
    }

    componentDidMount() {
        this.getInventory();
    }

    // METHODS

    getInventory() {
        axios
        .get("/api/inventory")
        .then(res => this.setState({inventory: res.data}))
        .catch(err => console.log(err))
    }

    deleteProduct = id => {
        axios
        .delete(`/api/product/${id}`)
        .then(() => {
            this.getInventory();
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <ul className="dashboardList">
                {this.state.inventory.map((e, i) => {
                    return (
                        <Product
                        selectItem={this.props.selectItem}
                        deleteProduct={this.deleteProduct}
                        key={i}
                        item={e}
                        />
                    )
                })}
            </ul>
        )
    }
}
