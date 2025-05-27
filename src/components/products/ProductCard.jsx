import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductCard(props) {
    return (
        <Card className="prodCard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.prodImg} />
            <Card.Body>
                <Card.Title>{props.prodName}</Card.Title>
                <Card.Text>
                    {`$${props.prodPrice.toFixed(2)}`}
                </Card.Text>
                <Button variant="primary" onClick={() => props.addToCart(props.id)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;