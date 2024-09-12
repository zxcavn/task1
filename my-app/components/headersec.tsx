import Link from 'next/link';
export default function HeadereSec() {
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
  }
  