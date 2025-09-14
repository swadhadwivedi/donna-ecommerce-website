import React, { useState } from "react";
import "../styles/navbar.css";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWomenOptions, setShowWomenOptions] = useState(false);
  const [showMenOptions, setShowMenOptions] = useState(false);
  const navigate = useNavigate();
  const { cartItems, toastMessage } = useCart();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleCategoryClick = (category) => {
    setShowWomenOptions(false);
    setShowMenOptions(false);
    setMenuOpen(false);
    navigate(`/products?category=${category}`);
  };

  const handleSubCategoryClick = (category, subcategory) => {
    setMenuOpen(false);
    setShowWomenOptions(false);
    setShowMenOptions(false);
    navigate(`/products?category=${category}&subcategory=${subcategory}`);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="hamburger" onClick={toggleMenu}>
            <RxHamburgerMenu size={30} />
          </div>
        </div>

        <div className="logo">
          <a href="/">Donna</a>
        </div>

        <div className="nav-right">
          <button className="navbar-button" onClick={() => navigate("/login")}>Login</button>
          <button className="navbar-button" onClick={() => navigate("/cart")}>Cart ({cartItems.length})</button>
        </div>
      </nav>

      {toastMessage && (
        <div className="cart-toast-fixed">
          {toastMessage}
        </div>
      )}

      {menuOpen && (
        <div className="side-menu">
          <div className="close-icon" onClick={toggleMenu}>
            <RxCross1 size={30} />
          </div>
          <div className="menu-links">
            <button onClick={() => {
              setShowWomenOptions(!showWomenOptions);
              setShowMenOptions(false);
            }}>WOMEN</button>

            {showWomenOptions && (
              <div className="submenu">
                <button onClick={() => handleCategoryClick("Women")}>All Women</button>
                <button onClick={() => handleSubCategoryClick("Women", "Dresses")}>Dresses</button>
                <button onClick={() => handleSubCategoryClick("Women", "Tops")}>Tops</button>
                <button onClick={() => handleSubCategoryClick("Women", "Bottoms")}>Bottoms</button>
              </div>
            )}

            <button onClick={() => {
              setShowMenOptions(!showMenOptions);
              setShowWomenOptions(false);
            }}>MEN</button>

            {showMenOptions && (
              <div className="submenu">
                <button onClick={() => handleCategoryClick("Men")}>All Men</button>
                <button onClick={() => handleSubCategoryClick("Men", "Tops")}>Tops</button>
                <button onClick={() => handleSubCategoryClick("Men", "Bottoms")}>Bottoms</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
