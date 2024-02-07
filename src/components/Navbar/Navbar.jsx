import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Navbar() {

useEffect(()=>{
// animation
$(document).on("scroll", () => {
  ($(".navbar").offset().top === 0) ? $(".navbar").addClass("py-4") : $(".navbar").removeClass("py-4")  
});

const navLinks = document.querySelectorAll('.nav-link');
const navbarBrand = document.querySelector('.navbar-brand');

for (let i = 0; i < navLinks.length; i++) {
    const href = navLinks[i].getAttribute('href');
    if (window.location.pathname === href) {
        navLinks[i].classList.add('navLinkStyle');
    }
}

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Remove the 'navLinkStyle' class from all nav links
        navLinks.forEach(function(navLink) {
            navLink.classList.remove('navLinkStyle');
        });
        // Add the 'navLinkStyle' class to the clicked nav link
        this.classList.add('navLinkStyle');
    });
});

navbarBrand.addEventListener('click', function () {
    // Remove the 'navLinkStyle' class from all nav links
    navLinks.forEach(function(navLink) {
        navLink.classList.remove('navLinkStyle');
    });
});
}, [])


  return (
    <>
      <nav className="mainBg navbar navbar-expand-lg py-4 fixed-top">
        <div className="container">
          <Link
            className="navbar-brand text-white text-uppercase fw-bold fs-2"
            to="home"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link fw-semibold fs-5 text-white text-center "
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link fw-semibold fs-5 text-white text-center "
                  to="Portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link fw-semibold fs-5 text-white text-center "
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
