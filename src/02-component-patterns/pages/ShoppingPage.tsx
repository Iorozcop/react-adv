import { ProductCard } from '../components/ProductCard';
import { ProductButtons } from '../components/ProductButtons';
import { ProductTitle } from '../components/ProductTitle';
import { ProductImage } from '../components/ProductImage';

const product = {
  id: '1',
  title: 'coffe-cup',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping-page </h1>
      <div style={{display:"flex", flexWrap:"wrap", flexDirection: "row" }}>
        <ProductCard product={ product } >
          <ProductCard.Image />
          <ProductCard.Title title= {product.title} />
          <ProductCard.Buttons />                 
        </ProductCard>

        {/* Esta es una manera más limpia de hacerlo */}
        <ProductCard product={ product } >
          <ProductImage />
          <ProductTitle title= 'Té' />
          <ProductButtons />                 
        </ProductCard>
      </div>
    </div>
  )
}
