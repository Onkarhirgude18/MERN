import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';

class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
        this.addItemService = new ItemService();
    }

    componentWillMount() {
        axios.get('http://localhost:4200/items/')
            .then(response => {
                this.setState({items: response.data});
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    tableRow() {
        if(this.state.items instanceof Array) {
            return this.state.items.map(function(object, i) {
                return <TableRow obj={object} key={i} />
            });
        }
    }

    render() {
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Item</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tableRow() }
                    </tbody>
                </table>
            </div>
        );
    };
}

export default IndexItem;