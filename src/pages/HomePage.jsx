import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard.jsx";

function HomePage() {
    const [data, setData] = useState(null);

    // Pull in data from provided API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://cart-api.alexrodriguez.workers.dev/products", {
                    method: "GET"
                });
                if (!response.ok) {
                    throw new Error("Error fetching data: " + response)
                }
                const result = await response.json();
                setData(result);
                
            } catch (err) {
                console.error('Error fetching data: ' + err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div>
            
            {data ? (
                <div>
                    <h2 className="productListHeader">Our Products</h2>
                    <ul className="productList">
                        {data.map((product) => (
                            <ProductCard key={product.id} prodId={product.id}
                            prodImg={product.image}
                            prodName={product.name}
                            prodPrice={product.price} />
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
        </>
    );
}

export default HomePage;