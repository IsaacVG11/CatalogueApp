import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;
    const totalProducts = products.length;

    const lastIndex = currentPage * productsPerPage; // 1 * 3 = 3 | 2 * 3 = 6...
    const firstIndex = lastIndex - productsPerPage; // 3 - 3 = 0 | 6 - 3 = 3...

    async function getProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        setProducts(products);
    }

    // La primera vez que se hace el render busca los datos y llama a la función que hace el fetch de los products al API
    useEffect(() => {
      getProducts();
    }, [])//No tiene dependency porque solamente se ejecuta en el primer render

    return (
        <>
            <section className='products-section'>
                {products.map(prod =>(
                    <div className='pc-container slide-top' key={prod.id}>
                        <ProductCard product={prod} />
                    </div>
                )).slice(firstIndex,lastIndex)}
            </section>
            <section className='pagination-section'>
                <Pagination totalProducts={totalProducts} 
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}/>
            </section>
        </>
    );
}