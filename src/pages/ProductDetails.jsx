import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductDetailsCard from '../components/products/ProductDetailsCard.jsx';

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
        <div className="prodDetailsContainer">
            <ProductDetailsCard image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                />
        </div>
    )
};

export default ProductDetails;