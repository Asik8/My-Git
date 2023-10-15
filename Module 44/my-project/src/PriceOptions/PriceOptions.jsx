import PriceOption from "../price option/PriceOption";

/* eslint-disable no-unused-vars */
const PriceOptions = () => {

    const products = [

        {
            "id": 1,
            "title": "Smartphone",
            "features": [
                "6.5-inch Super AMOLED display",
                "Snapdragon 855 processor",
                "128GB storage",
                "Quad-camera system",
                "5G connectivity"
            ],
            "price": 599.99
        },
        {
            "id": 2,
            "title": "Laptop",
            "features": [
                "15.6-inch Full HD display",
                "Intel Core i7 processor",
                "16GB RAM",
                "512GB SSD",
                "Windows 10 Pro"
            ],
            "price": 999.99
        },
        {
            "id": 3,
            "title": "Headphones",
            "features": [
                "Noise-cancellation technology",
                "40-hour battery life",
                "Bluetooth 5.0",
                "Built-in microphone",
                "Comfortable over-ear design"
            ],
            "price": 149.99
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-3xl">Best Prices in the Town</h2>
            <div className="grid grid-cols-3 gap-6 mt-10">
            {
                products.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;