import React, { Component, Fragment } from 'react';
import SalesChart from './ChartComponent/Sales';
import CustomerChart from './ChartComponent/Customer';

class DashboardScreen extends Component {

    constructor() {
        super();
        this.state = {
            status: 'sales'
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <div>
                        <aside className="sidebarOpen">
                            <ul className="sidebar-ul">
                                <li>
                                    <a href="#" onClick={() => this.setState({ status: 'sales' })} >Sales</a>
                                </li>
                                <li>
                                    <a  href="#" onClick={() => this.setState({ status: 'customer' })}>Customer</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div>
                        {this.state.status === 'sales' ? <SalesChart /> : <CustomerChart/>}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default DashboardScreen;