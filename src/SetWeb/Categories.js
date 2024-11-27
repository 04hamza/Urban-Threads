import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Categories.css";

const Categories = () => {
  return (
    <nav className="categories">
      <ul>
        <li>
          <Link className="link" to={"category/T-Shirts"}>T-Shirts</Link>
        </li>
        <li>
          <Link className="link" to={"category/Hoodies"}>Hoodies</Link>
        </li>
        <li>
          <Link className="link" to={"category/Jeans"}>Jeans</Link>
        </li>
        <li>
          <Link className="link" to={"category/Chinos"}>Chinos</Link>
        </li>
        <li>
          <Link className="link" to={"category/Jackets"}>Jackets</Link>
        </li>
        <li>
          <Link className="link" to={"category/Sneakers"}>Sneakers</Link>
        </li>
        <li>
          <Link className="link" to={"category/Offers"}>Offers</Link>
        </li>
        <li>
          <Link className="link" to={"category/Services"}>Services</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
