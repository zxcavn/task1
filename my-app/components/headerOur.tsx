import React from 'react';
import Link from 'next/link';

function Header({ headerType }: { headerType: string }) {
  if (headerType === 'secondary') {
    return (
        <div className="header-nt header-pets">
        <header className="header displayf">
            <div className="header-container container">
            <div className="logo-container"><a href="#">
                <h2 className="logop">Cozy House</h2>
                <p className="logo-text logopets">Shelter for pets in Boston </p>
            </a>
            </div>
            <div>   
                <nav>
                    <div className="burger">
                        <img src="icons/Burger.svg" alt="burger"/>
                    </div>  
                    <ul className="nav-list">
                        <li className="active activep active-about"><Link href="/">About the shelter</Link></li>
                        <li className="active activep active-our"><a href="">Our pets</a></li>
                        <li className="active activep"><Link href="/#help">Help the shelter</Link></li>
                        <li className="active activep"><Link href="#footer">Contacts</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </header>
    </div>
    );
  } else {
    return (
        <div className='header-nt'>
        <header className="header displayf">
          <div className="header-container container">
            <div className="logo-container">
              <a href="#">
                <h2 className="logo">Cozy House</h2>
                <p className="logo-text">Shelter for pets in Boston</p>
              </a>
            </div>
            <nav>
              <div className="burger">
                <img src="/icons/Burger.svg" alt="burger" />
              </div>
              <ul className="nav-list">
                <li className="active active-about"><Link href="/">About the shelter</Link></li>
                <li className="active">
                  <Link href="/pets">Our pets</Link>
                </li>
                <li className="active"><Link href="#help">Help the shelter</Link></li>
                <li className="active"><Link href="#footer">Contacts</Link></li>
              </ul>
            </nav>
          </div>
        </header>
          <section className="notonly displayf">
          <div className="notonly-container container">
            <div className="notonly-text">
              <h1 className="tittle">Not only people need a house</h1>
              <p className="tittle-text">We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
              <div className="button-container">
              <Link href="/pets"><button className="button">Make a friend</button></Link>
              </div>
            </div>
            <img className="dog" src="/images/dog.svg" alt="dog" />
          </div>
        </section>
        </div>
    );
  }
}

export default Header;