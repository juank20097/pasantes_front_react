import React, {useEffect, useState} from "react";
import { Container } from "reactstrap";
import '../css/Footer.css'

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        if (documentHeight <= windowHeight) {
          setIsVisible(true);
        } else if(scrollY+windowHeight>= documentHeight-20){
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`footer ${isVisible ? '' : 'hidden'}`}>
        <Container>
          <span>INSTITUTO ECUATORIANO DE SEGURIDAD SOCIAL</span>
          <p>&copy; 2023 IESS. Todos los derechos reservados.</p>
        </Container>
      </div>
    );
}