import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

class Alert extends Component {

    constructor()
    {
        super();
        this.state = {
            show: true
        }
    }

    render()
    {
        return(
            this.props.alerts != null && this.props.alerts.length > 0 &&

            <Modal show={this.state.show} onHide={()=>this.setState({show:false})} backdrop="static" keyboard={false}>
                <Modal.Header style={{ backgroundColor: '#FEF9E7' }} closeButton>
                    <Modal.Title style={{ fontSize: 25 }}>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        this.props.alerts.map(alert => (
                            <li key={alert.id} className={`alert alert-${alert.alertType}`}>
                                {alert.msg}
                            </li>
                        ))
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.setState({show:false})}> Close </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alertState
    }
}

export default connect(mapStateToProps, null)(Alert);