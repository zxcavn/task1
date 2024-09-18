import Link from "next/link";


export default function NotOnly() {
    return (   
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
    );
}