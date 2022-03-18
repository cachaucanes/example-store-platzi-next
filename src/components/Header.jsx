import React, { useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';

import menu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import logo from '../assets/logos/logo_yard_sale.svg';

import AppContext from '@context/AppContext';

import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.nav}>
        <button className={styles.buttonMenu} onClick={toggleMenu}>
          <Image
            src={menu}
            alt='menu'
            className={styles.menu}
          />
        </button>
        <div className={styles.navbarLeft}>
          <Link href='/' passHref>
            <a href='replace' style={{ height: '20px' }}>
              <Image src={logo} alt='logo' className={styles['nav-logo']} />
            </a>
          </Link>
          <ul>
            <li>
              <Link href='/' passHref>
                <a href='replace'>All</a>
              </Link>
            </li>
            <li>
              <Link href='/' passHref>
                <a href='replace'>Clothes</a>
              </Link>
            </li>
            <li>
              <Link href='/' passHref>
                <a href='replace'>Electronics</a>
              </Link>
            </li>
            <li>
              <Link href='/' passHref>
                <a href='replace'>Furnitures</a>
              </Link>
            </li>
            <li>
              <Link href='/' passHref>
                <a href='replace'>Toys</a>
              </Link>
            </li>
            <li>
              <Link href='/' passHref>
                <a href='replace'>Others</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.navbarRight}>
          <ul>
            <li>
              <button
                className={`${styles.navbarEmail} ${styles.pointer}`}
                onClick={() => toggleMenu()}
              >
                platzi@example.com
              </button>
            </li>
            <li>
              <button
                className={styles['navbar-shopping-cart']}
                onClick={() => toggleOrder()}
              >
                <Image
                  className='pointer'
                  src={shoppingCart}
                  alt='shopping cart'
                />
                {state?.cart?.length > 0 ? (
                  <div>{state?.cart?.length}</div>
                ) : null}
              </button>
            </li>
          </ul>
        </div>
        {state?.menuIsOpen && <Menu />}
      </nav>
      {state?.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
