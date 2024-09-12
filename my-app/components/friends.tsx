import Link from 'next/link';
export default function OurFriendsSection() {
    return (
        <section className="ourfriends apad displayf">
        <div className="ourfriends-container container" id="ourfriends">
            <div className="ayee">
            <div className="ourfriends-logo">
               <h3 className="ourfriends-tittle">Our friends who
                are looking for a house</h3>
            </div>
            <div className="ourfriends-card-arrow">
                <div className="arrow-center newarrows">
                <img className="arrow" src="/icons/Arrow.svg" alt="Arrow"/>
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
                
                <div className="ourfriends-card disk">
                    <img src="/images/pets-katrine.png" alt=""/>
                   
                    <h4 className="ourfriends-text">Woody</h4>
               
                    <div className="button-learn">
                    <Link href="/pets"> <button className="button-white">Learn more</button></Link>
           </div>
    
                </div>
               
            </div>
           <div className="arrow-center newarrows">
                <img className="arrow" src="/icons/Arrowtwo.svg" alt="Arrow"/>
            </div>
            </div>
            <div className="mobile-arrows newarrows">
                <img className="arrow" src="/icons/Arrow.svg" alt="Arrow"/>
                <img className="arrow" src="/icons/Arrowtwo.svg" alt="Arrow"/>
            </div>
            <div className="ourfriends-button">
             
                <Link href="/pets"> <button className="buttonx">Get to know the rest </button></Link>
         
                
            </div>
      </div>
    </div>
        
    </section>
    );
  }
  