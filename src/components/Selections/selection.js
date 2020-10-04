import React from 'react';
import Button from "../components/Button"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Login from "../components/Login"

const Selection = function () {

    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');



}


function Selection() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Product</Card.Title>
                    <Card.Text>
                        Description of product
    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>category</ListGroupItem>
                    <ListGroupItem>Price</ListGroupItem>
                </ListGroup>
                <Card.Body>

                </Card.Body>
            </Card>
        </>
    );
}

export default Selection;