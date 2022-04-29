import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';


interface Props {
    className?: string;
}

export const ProductButtons = ( {className}: Props ) => {

    const { counter, increaseBy} = useContext(ProductContext)

    return (
        <div className={styles.buttonsContainer}>
            <button 
                className={ `${styles.buttonMinus} ${className}` }
                onClick={ ()=>{ increaseBy(-1) }}
            > - </button>
            <div className={`${styles.countLabel} ${className}`}> { counter } </div>
            <button 
                className={ `${styles.buttonAdd} ${className}` }
                onClick={ ()=>{ increaseBy(+1) }}
            > + </button>
        </div>
    )
}