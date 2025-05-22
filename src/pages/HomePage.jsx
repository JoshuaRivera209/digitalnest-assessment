import { useEffect, useState } from "react";

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

    // temp console log to see if data looks good
    useEffect(() => {
        if (data) {
            console.log("Data fetched successfully:", data);
        }
    }, [data]);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of our application.</p>
        </div>
    );
}

export default HomePage;