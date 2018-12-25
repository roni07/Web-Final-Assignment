import React, { Component } from 'react';
import './App.css';


class MakeItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            vote:0,
        }
    }

    plusRating = () => {
        this.setState(prevVote => {
            return{
                 vote : prevVote.vote + 1
                };
        })
    }

    minusRating = () => {
        this.setState(prevVote => {
            return {
                vote: prevVote.vote - 1
            }
        })
    }

    render(){
        return(
                <div className="col-md-6 mb-3">
                    <div className="item">
                        <h2>{this.props.item.name}</h2>
                        <h3>{this.props.item.type}</h3>
                        <h4>
                            {this.props.item.restaurant}, at {this.props.item.location}
                        </h4>
                        <div>
                            <span>{this.state.vote}</span>&nbsp;
                            <button onClick = {this.plusRating} className="btn btn-primary">+</button>&nbsp;
                            <button onClick = {this.minusRating} className="btn btn-secondary">-</button>
                        </div>
                    </div>
                </div>
        );
    }
}

class MakeItemContent extends Component {

    render() {
        return (
            <div className="row">
                {this.props.foodList.map(item => <MakeItem key = {item.name} item={item}/>)}
            </div>
        );
    }
}


class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSpecificationList: [],
            value1: "",
            value2: "",
            value3: "",
            value4: "",
            value5: "",
        }

    }

    changeValue1 = (event) => {
        this.setState({value1: event.target.value});
    }
    changeValue2 = (event) => {
        this.setState({value2: event.target.value});
    }
    changeValue3 = (event) => {
        this.setState({value3: event.target.value});
    }
    changeValue4 = (event) => {
        this.setState({value4: event.target.value});
    }
    changeValue5 = (event) => {
        this.setState({value5: event.target.value});
    }

    handleAdd = (item) => {
        item.preventDefault();

        let foodName = item.target.elements.foodName.value;
        let foodType = item.target.elements.foodType.value;
        let restName = item.target.elements.restName.value;
        let location = item.target.elements.location.value;
        let price = item.target.elements.price.value;

        const food = {
            name: foodName,
            type: foodType,
            restaurant: restName,
            location: location,
            price: price
        }

        this.setState(state => {
           let list = state.foodSpecificationList.push(food);
           return {list, value1:"", value2:"", value3:"", value4:"", value5:""}; 
        });
    }
    render() {
        return (
            <div className="App">
                <div className="form-section">
                    <form onSubmit={this.handleAdd} className="form">
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label">Food Name</label>
                            <input name="foodName" type="text" className="form-control col-md-8" 
                            value={this.state.value1} onChange={this.changeValue1} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label">Food Type</label>
                            <input name="foodType" type="text" className="form-control col-md-8" 
                            value={this.state.value2} onChange={this.changeValue2} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label">Restaurant Name</label>
                            <input name="restName" type="text" className="form-control col-md-8" 
                            value={this.state.value3} onChange={this.changeValue3} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label">Location</label>
                            <input name="location" type="text" className="form-control col-md-8" 
                            value={this.state.value4} onChange={this.changeValue4} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-4 col-form-label">Price</label>
                            <input name="price" type="text" className="form-control col-md-8" 
                            value={this.state.value5} onChange={this.changeValue5} />
                        </div>

                        <div className="row button">
                            <button type="submit" className="btn btn-primary float-right">Add This Item</button>
                        </div>

                    </form>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary">Hide</button>
                    </div>
                </div>

                <div className="item-section text-center">
                    <h1 className="text-capitalize">List of all the good mood foods </h1>
                    <hr />
                    <MakeItemContent foodList = {this.state.foodSpecificationList}/>
                </div>
            </div>
        );
    }
}

export default MainView;