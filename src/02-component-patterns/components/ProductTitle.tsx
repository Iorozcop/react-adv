import { useContext } from 'react';
import { ProductTitleProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';


export const ProductTitle = ({title, className}:ProductTitleProps ) => {

    const {product} = useContext(ProductContext);

    return (
        <span className={ `${styles.productDescription} ${className}` }> { title ? title : product.title } </span>
    );
}
