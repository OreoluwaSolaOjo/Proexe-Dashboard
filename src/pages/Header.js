import headers from './Header.module.css';
import Navbar from 'react-bootstrap/Navbar';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Header = () => {
    return (
        <Navbar className={headers.header}>
            <Row className={headers.circles}>
                <Col className={headers.colcircle1}>

                </Col>
                <Col className={headers.colcircle}>

                </Col>
                <Col className={headers.colcircle}>

                </Col>
                <Col className={headers.colcircle}>
                </Col>
            </Row >
            <h3 className={headers.dashboardtext}>Dashboard</h3>
        </Navbar>
    );
}

export default Header;