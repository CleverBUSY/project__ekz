import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../../store/slice/productReducer';

const Products = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { productsData } = useSelector((store) => store.products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDescription, setShowDescription] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    useEffect(() => {
        dispatch(fetchProducts(categoryId));
    }, [dispatch, categoryId]);

    const filteredProducts =
        productsData && productsData.length > 0
            ? productsData.filter((product) => product.category && product.category.id === parseInt(categoryId))
            : [];

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleToggleDescription = (product) => {
        setShowDescription((prevState) => ({
            ...prevState,
            [product.id]: !prevState[product.id],
        }));
        setSelectedProduct(product);
    };

    return (
        <section className="text-black body-font">
            <div className="container px-5 py-24 mx-auto">
                {productsData ? (
                    <>
                        <div className="flex flex-wrap -m-4">
                            {currentProducts.map((product) => (
                                <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-white bg-opacity-40 p-6 rounded-lg">
                                        <Link to={`/product/${product.id}`}>
                                            <img
                                                className="h-40 rounded w-full object-cover object-center mb-6"
                                                src={product.images}
                                                alt="content"
                                            />
                                            <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                                                {product.category.name}
                                            </h3>
                                        </Link>
                                        <h2 className="text-lg text-black font-medium title-font mb-4">{product.title}</h2>
                                        <h2 className="text-lg text-black font-medium title-font mb-4">${product.price}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className="flex justify-center mt-4">
                            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
                                <li key={index} className="mx-1">
                                    <button
                                        onClick={() => paginate(index + 1)}
                                        className={`px-3 py-1 rounded-full border ${
                                            currentPage === index + 1 ? 'bg-gray-200' : 'bg-white'
                                        }`}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
};

export default Products;
