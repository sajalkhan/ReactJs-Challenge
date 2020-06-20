import React, { Component } from 'react';
import productData from '../data.json';

class ItemListScreen extends Component {

    constructor()
    {
        super();
        this.state = {
            product: productData
        }
    }
    render() {
        
        const filterItem = (e) => {
            const productList = productData;
            const filterProduct = productList.filter(item =>
                item.product.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.district.toLowerCase().includes(e.target.value.toLowerCase()) 
            );

            this.setState({ product: filterProduct });
        }

        return (
            <div className="content content-margined">
                <div className="order-list">

                    <div className="itemlistscreen_header">
                        <span>Search:</span> <input type="search" onChange={filterItem} />
                    </div>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Customer Name</th>
                                <th>District</th>
                                <th>Work Area</th>
                                <th>Order Quantity</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.product.map((item, indx) => (
                                    <tr key={indx}>
                                        <td>{item.product}</td>
                                        <td>{item.customer_name}</td>
                                        <td>{item.district}</td>
                                        <td>{item.customer_work_area}</td>
                                        <td>{item.order_quantity}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
export default ItemListScreen;