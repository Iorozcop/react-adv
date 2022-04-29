import { ProductCard } from '../components/ProductCard';
import { ProductButtons } from '../components/ProductButtons';
import { ProductTitle } from '../components/ProductTitle';
import { ProductImage } from '../components/ProductImage';
import '../styles/custom-styles.css';

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
        <ProductCard 
          product={ product }
          className='bg-dark'
        >
          <ProductImage className='custom-image'/>
          <ProductTitle title= 'Té' className='text-white' />
          <ProductButtons className='custom-buttons'/>                 
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage className='custom-image'/>
          <ProductTitle title= 'Té' className='text-white' />
          <ProductButtons className='custom-buttons'/>                 
        </ProductCard>
      </div>
    </div>
  )
}
