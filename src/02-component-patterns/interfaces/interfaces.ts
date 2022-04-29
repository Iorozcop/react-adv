import { ReactElement } from "react"

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties
}

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product,
}

export interface ProductTitleProps {
    title: string,
    className?: string
}