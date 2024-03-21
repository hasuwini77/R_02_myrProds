import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getImageURL } from '../../utils/function';


const Nav = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={getImageURL('headphones.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        MYR
                    </Navbar.Brand>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )

}

export default Nav