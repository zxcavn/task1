'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function OurFriendsSection() {
    const pathname = usePathname();
    return (
        <section className={`ourfriends apad displayf  ${pathname === '/pets' ? 'ourfriends-pets' : 'ourfriends-default'}`}>
        <div className="ourfriends-container container" id="ourfriends">
            <div className="ayee">
            <div className="ourfriends-logo">
               <h3 className="ourfriends-tittle">Our friends who
                are looking for a house</h3>
            </div>
            <div className="ourfriends-card-arrow">
                <div className="arrow-center newarrows">
                <button className='qwe'>  <img className="arrow" src="/icons/Arrow.svg" alt="Arrow"/></button>
            </div>
            <div className="ourfriends-cards">
               
                <div className="ourfriends-card">
                    <img src="/images/pets-katrine.png" alt=""/>
                    <h4 className="ourfriends-text">Katrine</h4>
                    <div className="button-learn">
                        <Link href="/pets"> <button className="button-white">Learn more</button></Link>
               </div>
    
                </div>
                <div className="ourfriends-card mobile-disk">
                    <img src="/images/pets-katrine.png" alt=""/>
                    <h4 className="ourfriends-text">Jennifer</h4>
         
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
               </div>
    
                </div>
                
                <div className="ourfriends-card mobile-disk noneplane ">
                    <img src="/images/pets-katrine.png" alt=""/>
                   
                    <h4 className="ourfriends-text">Woody</h4>
               
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
           </div>
    
                </div>

                <div className="ourfriends-card mobile-disk notfordefault nonemob">
                    <img src="/images/pets-katrine.png" alt=""/>
                    <h4 className="ourfriends-text">Jennifer</h4>
         
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
               </div>
    
                </div>

                <div className="ourfriends-card mobile-disk notfordefault nonemob">
                    <img src="/images/pets-katrine.png" alt=""/>
                    <h4 className="ourfriends-text">Jennifer</h4>
         
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
               </div>
    
                </div>

                <div className="ourfriends-card mobile-disk notfordefault nonemob">
                    <img src="/images/pets-katrine.png" alt=""/>
                    <h4 className="ourfriends-text">Jennifer</h4>
         
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
               </div>
    
                </div>

                <div className="ourfriends-card mobile-disk notfordefault noneplan ">
                    <img src="/images/pets-katrine.png" alt=""/>
                    <h4 className="ourfriends-text">Jennifer</h4>
         
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
               </div>
    
                </div>

                <div className="ourfriends-card mobile-disk notfordefault noneplan ">
                    <img src="/images/pets-katrine.png" alt=""/>
                    <h4 className="ourfriends-text">Jennifer</h4>
         
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
               </div>
    
                </div>
               
            </div>
           <div className="arrow-center newarrows">
           <button className='qwe'> <img className="arrow" src="/icons/Arrowtwo.svg" alt="Arrow"/></button>
            </div>
            </div>
            <div className="mobile-arrows newarrows">
            <button className='qwe'> <img className="arrow" src="/icons/Arrow.svg" alt="Arrow"/></button>
            <button className='qwe'>  <img className="arrow" src="/icons/Arrowtwo.svg" alt="Arrow"/></button>
            </div>
            <div className="ourfriends-button">
             
                <Link href="/pets"> <button className="buttonx">Get to know the rest </button></Link>
         
                
            </div>

            <div className='forpetsslide'>
          <button className='qwedouble'><img className="arrow" src="/icons/__.svg" alt="Arrow"/></button>
          <button className='qwe'><img className="arrow" src="/icons/_.svg" alt="Arrow"/></button>
          <button className='qwe firstqwe'>1</button>
          <button className='qwe'><img className="arrow" src="/icons/rigth.svg" alt="Arrow"/></button>
          <button className='qwedouble'><img className="arrow" src="/icons/rright.svg" alt="Arrow"/></button>
            
            
            </div>
      </div>
    </div>
        
    </section>
    );
  }
  