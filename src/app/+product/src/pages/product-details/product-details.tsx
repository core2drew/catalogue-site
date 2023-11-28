import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@catalogue-site/shared/components/header/header';

import FormatUtil from '@catalogue-site/shared/utils/format-utils';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';

/* eslint-disable-next-line */
export interface ProductDetailsProps {}

export function ProductDetails(props: ProductDetailsProps) {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProductDetails(json);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="mt-5 max-w-5xl m-auto">
        <h2 className="text-3xl mb-10">{productDetails.title}</h2>
        <div className="flex gap-20">
          <img
            className="max-w-xs mb-10 flex-grow"
            alt={productDetails.title}
            src={productDetails.image}
          />
          <div>
            <h2 className="text-3xl font-bold mb-5">
              {FormatUtil.formatToCurrency(productDetails.price)}
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <Rating
                className="ml-auto"
                value={productDetails.rating?.rate}
                disabled
                cancel={false}
              />
              <span>{productDetails.rating?.count} Rating</span>
            </div>
            <Button label="Enquire" />
          </div>
        </div>

        <div className="flex">
          <div>
            <div className="flex items-center"></div>
            <p>{productDetails.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
