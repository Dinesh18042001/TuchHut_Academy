import React, { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./navStyle.css";
import ContactModal from "../Modals/modal/ContactModal";

const NavScrollExample = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openModal1 = () => {
    setShowModal1(!showModal1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={isScrolled ? "navbar navbar-scrolled" : "navbar"}>
        <Container fluid>
          <Navbar.Brand className="px-2 pr-lg-6 mx-lg-5 pr-sm-4 mx-sm-3">
            <img src="images/Group 105317.png" alt="" width="164" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll"/>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 justify-content-end "
              style={{
                flex: "auto",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                justifyContent: "space-10px",
              }}
            >
              <Nav.Link href="#action1" className="navlink">
                Courses
              </Nav.Link>
              <Nav.Link href="#action2" className="navlink">
                Job Placement
              </Nav.Link>
              <Nav.Link href="#action2" className="navlink">
                Placement Stories
              </Nav.Link>
              <Nav.Link href="#action2" className="navlink">
                FAQ
              </Nav.Link>
              <Nav.Link href="#action2" className="navlink">
                Blog
              </Nav.Link>
            </Nav>

            <Button
              variant="outline"
              className="navbtn w-22 rounded-pill"
              style={{
                borderColor: "#854DCE",
                width: "163px",
                height: "46px",
                transition: "background-color 0.3s, color 0.3s",
                background: '#854DCE',
                color: "#fff"
              }}
              onClick={openModal1}
            >
              Apply Now
            </Button>
            <ContactModal showModal={showModal1} openModal={(dt)=>{setShowModal1(dt)}}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavScrollExample;


