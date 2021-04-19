import React from 'react';
import ProductCategoryRowTwo from '../product-category-row-two/product-category-row-two.comp';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import ProductRowTwo from '../product-row-two/product-row-two.comp';
import ProductRowThree from '../product-row-three/product-row-three.comp';
import ProductRowFour from '../product-row-four/product-row-four.comp';
import ProductRowFive from '../product-row-five/product-row-five.comp';
import ProductRowSix from '../product-row-six/product-row-six.comp';
import './product-table.style.css';


const ProductTable = () => {
    return (
        <div className="product-table-container">
             Name       Price

             <ProductCategoryRow/>
             <ProductRow/>
             <ProductRowTwo/>
             <ProductRowThree/>
             <ProductCategoryRowTwo/>
             <ProductRowFour/>
             <ProductRowFive/>
             <ProductRowSix/>
        </div>
    );
}

export default ProductTable;