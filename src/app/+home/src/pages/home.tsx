import { useEffect, useState } from 'react';
import { ProductCard } from '@catalogue-site/shared/components/product-card/product-card';
import Header from '@catalogue-site/shared/components/header/header';
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl mb-5 text-center">Feature Products</h1>
        <div className="flex gap-5 justify-center">
          {products.map(({ id, title, price, image, rating, category }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
              rating={rating}
              category={category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
