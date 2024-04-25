/* eslint-disable react/prop-types */
export default function Pagination ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) { 
    const noPagination = [];
    const noPages = Math.ceil(totalProducts / productsPerPage);

    //For que rellena el array de numero de paginacion
    for (let i = 1; i <= noPages; i++) {
        noPagination.push(i);
    }

    function handleClickGoNext(){
        setCurrentPage(currentPage + 1);
    }

    function handleClickGoPrevious(){
        setCurrentPage(currentPage - 1);   
    }

    function handleSinglePageClick(index){
        setCurrentPage(index);
    }

    return(
        <nav className="pagination is-centered mt-6" role="navigation" aria-label="pagination">
            <a className="pagination-previous" onClick={currentPage !== 1 ? handleClickGoPrevious : null}>Anterior</a>
            <a className="pagination-next" onClick={currentPage < noPages ? handleClickGoNext : null}>Siguiente</a>
            <ul className="pagination-list">
                {noPagination.map(pag => (
                    <li key={pag}>
                        <a className={`pagination-link ${currentPage === pag ? 'is-current' : ''}`} onClick={() => handleSinglePageClick(pag)}>{pag}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}