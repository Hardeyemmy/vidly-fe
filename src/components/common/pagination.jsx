import React from 'react';
import _ from 'lodash';
import  PropTypes from  'prop-types';

const Pagination = ({ itemsCount, pageSize, onPagination, currentPage }) => {


console.log(currentPage)

const pageCount = Math.ceil(  itemsCount / pageSize );
if(pageCount === 1) return null
  const pages= _.range(1, pageCount + 1);


    return(
       
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li 
                    className=
                    { page ===  currentPage 
                    ? 'page-item active' : 'page-item'} 
                    key={page}>
                    <a 
                    className="page-link" 
                    onClick={() => onPagination(page)}>{page}
                    </a>
                    </li>
                ))}  
            </ul>
        </nav>
    );
}
 
export default Pagination;

Pagination.propTypes = {
    itemsCount:PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    onPagination: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
}