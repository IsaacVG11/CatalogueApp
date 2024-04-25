/* eslint-disable react/prop-types */
export default function ProductCard( { product }) {
    return (
        <>
            <img
                src={product.image}
                alt={product.title}
            />
            <ul className="pc-content">
                <li>{product.title}</li>
                <li>Price: {product.price}$</li>
                <li>Rating: {product.rating.rate}</li>
            </ul>
        </>
    );
}