import { classNames } from 'primereact/utils';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './header.module.scss';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useEffect, useRef, useState } from 'react';
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const menuLeft = useRef<Menu>(null);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      });
  }, []);

  const items = categories.map((category: string) => ({
    label: category,
    command: () => {
      navigate(`/products/${category}`);
    },
  }));

  return (
    <div className="p-5 bg-blue-500 flex">
      <p className="text-white">Catalogue.au</p>

      <div className="flex ml-20 gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [isActive ? styles['active'] : ''].join(' ')
          }
        >
          Home
        </NavLink>
        <Menu
          pt={{
            menuitem: {
              className: 'capitalize',
            },
          }}
          model={items}
          popup
          ref={menuLeft}
          id="popup_menu_left"
        />
        <Button
          label="Category"
          icon="pi pi-align-left"
          className="mr-2"
          onClick={(event) => menuLeft.current?.toggle(event)}
          aria-controls="popup_menu_left"
          aria-haspopup
        />
      </div>
    </div>
  );
}

export default Header;
