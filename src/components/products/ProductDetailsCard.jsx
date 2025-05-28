import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../styles/index.css'; // Assuming you have a CSS file for styling


function ProductCard(props) {
    return (
        <Card className="prodDetailsCard">
            <Button variant="secondary" 
            className="prodDetailsBackBtn" 
            onClick={() => window.history.back()}>
                ← Back to Products
            </Button>
            <div className="prodDetailsContent">
                <Card.Img variant="top" 
                    src={props.image} 
                    className="prodDetailsImage"
                />
                <div className="prodDetailsText">
                    <Card.Body>
                        <Card.Title>
                            {props.name} <br/>
                            {`$${props.price.toFixed(2)}`}
                        </Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => alert('Added to cart!')}>
                            Add to Cart
                        </Button>
                    </Card.Body> 
                </div>
            </div>
        </Card>
    );
}

export default ProductCard;