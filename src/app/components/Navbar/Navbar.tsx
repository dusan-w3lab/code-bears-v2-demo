import React from "react";

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
    <div className="container-fluid navbar">
      <div className="row">
        <div className="col-4">
          <h3>Codebears</h3>
        </div>
        <div className="col-4">
          <ul>
            {menuItems.map((e: any) => {
              return <li key={e.id}>{e.name}</li>;
            })}
          </ul>
        </div>
        <div className="col-4">
          <button>Make it happen</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
