import React, { Component } from 'react';
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

    handleNameChange = name => {
    this.setState({name})
    }

    handlePriceChange = price => {
        this.setState({price})
    }

    handleImageChange = imgurl => {
        imgurl ? this.setState({imgurl: imgurl, previewimg: imgurl}) : this.setState({
            previewImg: "https://wanowi.com/public/uploads/products/list/product-default.jpg"
        })
    }

    componentDidMount() {
        if(this.state.imgurl) {
            this.setState({previewimg: this.state.imgurl})
        }
        if(this.props.location.state) {
            this.selectedEdit(this.props.location.state.id)
        }
    }

    componentDidUpdate(oldpropsobject) {
        if(oldpropsobject.location.pathname !== this.props.location.pathname) {
            this.clearInput();
        }
    }

    getInventory = () => {
        axios
        .get('/api/inventory')
        .then(res => this.setState({inventory: res.data}))
        .catch(err => console.log(err))
    }

    selectedEdit = id => {
        axios
        .get(`/api/product/${id}`)
        .then(res => {
            const {name, price, img} = res.data[0];
            this.setState({name, price, imgurl: img, previewImg: img})
        })
        .catch(err => {
            console.log(err);
        })
    }

    clearInput = () => {
        this.setState({name: "", price:"", imgurl:""})
    }


    render() {
        return (
            <div className="formDiv">
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.location.state ? this.editItem() : this.addToDatabase();
                    window.location.replace("/");
                }}
                >
                    <img className="previewImg" alt="preview" src={this.state.previewimg} onError={this.onError} />
                    <input className="formInput" value={this.state.name} placeholder="Product Name" onChange={e => this.handleNameChange(e.target.value)} />
                    <input className="formInput" value={this.state.price} placeholder="Price" onChange={e => this.handlePriceChange(e.target.value)} />
                    <input className="formInput" value={this.state.imgurl} placeholder="Place Image URL Here" onChange={e => this.handleImageChange(e.target.value)} />
                    <div className="form-button-container">
                        <button className="formButton" type="button" onClick={() => this.clearInput()}>
                            Cancel
                        </button>
                        {!this.props.location.state ? (
                            <button className="formButton" type="submit">
                                Add to Inventory
                            </button>
                        ) : (
                                <button className="formButton" type="submit">
                                    Save Changes
                            </button>
                            )}
                    </div>
                </form>
                <h2>Form</h2>
            </div>
        )
    }
}