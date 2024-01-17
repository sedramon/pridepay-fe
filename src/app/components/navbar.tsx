"use client";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/navbar.module.css";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <nav className="navbar  navbar-light w-100 justify-content-around">
        {/* Logo on the left */}

        <Link href="/">
          <Image
            src="/logo.png"
            alt="pridepay-logo-image"
            width={250}
            height={90}
          />
        </Link>

        {/* Burger menu for small screens */}

        <Button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleMenu}
          style={{ backgroundColor: "rgb(139, 195, 62)", marginRight: "20px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>

        {/* Offcanvas Menu */}
        <Offcanvas
          show={showMenu}
          onHide={() => setShowMenu(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image
                src="/logo.png"
                alt="pridepay-burger-logo"
                width={300}
                height={100}
              ></Image>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Navigation items for the offcanvas menu */}
            <div
              className={`navbar-nav d-flex flex-column align-items-center ${styles["navbar-custom-nav"]}`}
            >
              <Link
                href="/"
                className={`nav-link mb-1 ${styles["navbar-custom-nav-link"]}`}
                onClick={handleLinkClick}
              >
                PERSONAL
              </Link>
              <Link
                href="/"
                className={`nav-link mb-1 ${styles["navbar-custom-nav-link"]}`}
                onClick={handleLinkClick}
              >
                BUSINESS
              </Link>
              <Link
                href="/"
                className={`nav-link mb-1 ${styles["navbar-custom-nav-link"]}`}
                onClick={handleLinkClick}
              >
                PERSONAL & BUSINESS
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Navigation items in the middle */}

        <div
          className={`navbar-nav d-none d-md-none d-lg-flex flex-row ${styles["navbar-custom-nav"]}`}
        >
          <Link
            href="/"
            className={`nav-link ${styles["navbar-custom-nav-link"]}`}
          >
            PERSONAL
          </Link>
          <Link
            href="/"
            className={`nav-link ${styles["navbar-custom-nav-link"]}`}
          >
            BUSINESS
          </Link>
          <Link
            href="/"
            className={`nav-link ${styles["navbar-custom-nav-link"]}`}
          >
            PERSONAL & BUSINESS
          </Link>
        </div>

        {/* Login and Signup buttons on the right */}

        <div className="d-none d-md-none d-lg-flex">
          <Link
            href="/users/login"
            className={`btn btn-outline-primary ${styles["navbar-custom-button-login"]}`}
          >
            LOG IN
          </Link>
          <Link
            href="/users/signup"
            className={`btn ${styles["navbar-custom-button-signup"]}`}
          >
            SIGN UP
          </Link>
        </div>
      </nav>
    </div>
  );
}
