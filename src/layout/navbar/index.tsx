import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assets/logo.svg";
import "./navbar.css";
function NavbarComponent() {
  return (
    <Navbar expand="lg" className="shadow-sm">
      <Container fluid style={{ padding: "0px 40px", height: "4rem" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand className="mx-auto p-1" href="#home">
          <img src={logo} alt="logo" height={40} />
        </Navbar.Brand>

        <Navbar.Collapse className="mx-auto bg-white" id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Men</Nav.Link>
            <Nav.Link href="#home">Women</Nav.Link>
            <Nav.Link href="#home">Beauty</Nav.Link>
            <Nav.Link href="#home">Sport</Nav.Link>
            <NavDropdown
              className="position-relative  z-5"
              title="Explore"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="icons hidden sm:flex justify-center items-center  bg-white sm:w-full  md:w-auto">
          <span className="mr-2  hidden md:block hover:bg-slate-100 cursor-pointer rounded-full p-2 duration-200">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#1C274C"
                  strokeWidth="0.744"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
          <span className="hover:bg-slate-100 cursor-pointer rounded-full p-2 duration-200">
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000"
                  strokeWidth="0.696"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
          <span className="hover:bg-slate-100 cursor-pointer rounded-full p-2 duration-200">
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                ></path>{" "}
                <path
                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                ></path>{" "}
                <path
                  d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
