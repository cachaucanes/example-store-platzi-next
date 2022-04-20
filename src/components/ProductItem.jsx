import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import imageNotFound from '@icons/image-not-found.svg';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = item => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      {product?.category?.image ? (
        <Image
          width={240}
          height={240}
          src={product?.category.image}
          alt={product.title} />
      ) :
        (
          <Image
            src={imageNotFound}
            width={240} height={240}
            alt='Image not found'
          />
        )
      }
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button className={styles['more-clickable-area']} onClick={() => handleClick(product)} >
          {state.cart.includes(product) ? (
            <Image className={`${styles.disabled} ${styles['add-to-cart-btn']}`} src={addedToCartImage} alt='added to cart' />)
            : (
              <Image className={`${styles['add-to-cart-btn']} pointer`} src={addToCartImage} alt='add to cart' />
            )}

        </button>
      </div>
    </div>
  );
};

export default ProductItem;
