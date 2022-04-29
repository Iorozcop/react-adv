import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import { ProductButtons } from './ProductButtons';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {

    const {counter, increaseBy} = useProduct();
    
    return (
        <Provider value= {{
            counter,
            increaseBy,
            product,
        }}>
            <div 
                className={ `${ styles.productCard } ${className} ` }
                style={style}
            >
                { children }
            </div>
        </Provider>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
