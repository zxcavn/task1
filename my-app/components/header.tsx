"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleBurgerClick = () => {
    setOpen(!isOpen);
  };

  return (
    <header className={`header ${pathname === '/pets' ? 'header-pets' : 'header-default'}`}>
      <div className="header-container container">
        <div className="logo-container">
          <Link href="/">
            <h2 className="logop">Cozy House</h2>
            <p className="logo-text logopets">Shelter for pets in Boston</p>
          </Link>
        </div>
        <div ref={modalRef}>
          <nav className={`header__nav ${isOpen ? '' : 'active'}`}>
            <ul className="nav-list">
              <li className="active activep active-about">
                <Link href="/" onClick={handleLinkClick}>
                  About the shelter
                </Link>
              </li>
              <li className="active activep active-our">
                <Link href="/pets" onClick={handleLinkClick}>
                  Our pets
                </Link>
              </li>
              <li className="active activep">
                <Link href="/#help" onClick={handleLinkClick}>
                  Help the shelter
                </Link>
              </li>
              <li className="active activep">
                <Link href="#footer" onClick={handleLinkClick}>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <div className="keks">
            <button
              className={`menu__burger ${isOpen ? 'active' : ''}`}
              onClick={handleBurgerClick}
            >
              <img src="icons/Burger.svg" alt="burger" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
