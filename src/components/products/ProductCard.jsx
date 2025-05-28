import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ProductCard(props) {
    return (
        <Link to={`/product/${props.prodId}`}>
            <Card className="prodCard" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.prodImg} />
                <Card.Body>
                    <Card.Title>{props.prodName}</Card.Title>
                    <Card.Text>
                        {`$${props.prodPrice.toFixed(2)}`}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default ProductCard;