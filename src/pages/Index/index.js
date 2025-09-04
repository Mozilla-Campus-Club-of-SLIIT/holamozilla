import { useEffect, useRef, useState } from "react";
import Carousel from "../../components/Carousel";
import Hero from "../../components/Hero";

import "./Index.css"
import Ticket from "../../components/Ticket";

export default function Index() {

  const nameRef = useRef()
  const [name, setName] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.35;
      window.scrollBy({ top: delta });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const generateTicket = () => {
    const name = nameRef.current.value.trim()
    if (!name) return setError("Name cannot be empty")
    setName(nameRef.current.value)
    setError(null)
  }

  return (
    <main>
      <section className="hero-section" id="hero">
        <Hero />
      </section>
      <section className="carousel-section" id="about">
        <h2 className="about">About holamozilla</h2>
        <p className="about-text">
          Open to students of Sri Lanka
          Institute of Information Technology (SLIIT),<br />
          Who are interested in joining
          Mozilla Campus Club of SLIIT.
        </p>
        <Carousel />
      </section>
      <section className="tickets">
        <h2 className="ticket-header">Get your ticket now</h2>
        <p>
          Share your ticket on social media and let everyone know you’re here!
        </p>
        {/*<img src="/images/ticket.png" className="ticket-image" />*/}
        <Ticket name={name} />
        <div className="ticket-placer-section">
          <input type="text" placeholder="Enter your name" ref={nameRef} className={error && "error"}/>
          <div className="input-error">{error || ""}</div>
          <button onClick={generateTicket}>Grab it!</button>
        </div>
      </section>
    </main>
  )
}