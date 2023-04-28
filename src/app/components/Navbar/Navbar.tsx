import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className={` ${styles.navbar} container-fluid navbar`}>
      <div className="container navbar_container">
        <div className={`row ${styles.navbar_inner}`}>
          <div className={`${styles.elements} col-3 logo`}>
            <a>Codebears</a>
          </div>
          <div className={`${styles.elements} col-6`}>
            <ul>
              {menuItems.map((e: any) => {
                return <li key={e.id}>{e.name}</li>;
              })}
            </ul>
          </div>
          <div className={`${styles.elements} col-3 ${styles.nav_btn}`}>
            <button>Make it happen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
