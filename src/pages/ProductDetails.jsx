import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetails() {
    const { prodId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const response = await fetch (`https://cart-api.alexrodriguez.workers.dev/products/${prodId}`, {
                    method: "GET"
                });
                // check if response is ok
                if (!response.ok) {
                    throw new Error("Error fetching product details: " + response);
                }
                const res = await response.json();
                setProduct(res);
                console.log("Product details:", res);
            } catch (err) {
                console.error('Error fetching product details: ' + err);
            }
        }
        getProductDetails();
    }, [prodId]);

    if (!product) {
        return <p>Loading product details...</p>;
    }
    console.log("product info:" + product)

    return (
        <>
            <Card className="prodCard" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {`$${product.price.toFixed(2)}`}
                    </Card.Text>
                    <Button variant="primary" onClick={() => alert('Added to cart!')}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </>
    )
};

export default ProductDetails;