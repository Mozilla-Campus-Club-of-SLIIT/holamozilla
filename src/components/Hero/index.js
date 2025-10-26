
import { Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimer";
import "./Hero.css";

const eventDate = new Date("2026-09-27T11:00:00")

const months =
  ["January", "February", "March", "April", "May", "June", "July", "Aughust", "September", "October", "November", "December"]

function getOrdinalDate(date) {
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11 ? "st" :
      day % 10 === 2 && day !== 12 ? "nd" :
        day % 10 === 3 && day !== 13 ? "rd" : "th";
  return `${day}${suffix}`;
}

function Hero() {

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hola Mozilla</h1>

        <div className="coming-next-section">
          {/* <h2 className="coming-next-title">Stay tuned</h2> */}
          <p className="hero-subtitle"> Orientation program for the
            Mozilla Campus Club of SLIIT</p>
        </div>
        <Link to="https://forms.gle/arvimm6KUz6cAfbt9" className="hero-register-button">Register now</Link>
        <div style={{ fontWeight: 900 }}>
          {getOrdinalDate(eventDate)} of {months[eventDate.getMonth()]}{" "}
          {eventDate.getFullYear()} @ {eventDate.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
          })}
        </div>
        <p>See you next year</p>
        <CountdownTimer targetDate={eventDate} />
      </div>
      <div className="hero-bg-shape"></div>
    </section>
  );
}

export default Hero;
