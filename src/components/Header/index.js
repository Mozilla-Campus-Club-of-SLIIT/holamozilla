import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Header.css"

export default function Header() {
  const [isOverTicketSection, setIsOverTicketSection] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset header state when route changes
    setIsOverTicketSection(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const ticketSection = document.querySelector('.tickets');
      const header = document.querySelector('header');
      
      
      if (ticketSection && header) {
        const ticketSectionTop = ticketSection.offsetTop;
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY + headerHeight;
        
       
        setIsOverTicketSection(scrollPosition >= ticketSectionTop);
      } else {
       
        setIsOverTicketSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]); 

  return (
    <header className={isOverTicketSection ? 'header-over-ticket' : ''}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}