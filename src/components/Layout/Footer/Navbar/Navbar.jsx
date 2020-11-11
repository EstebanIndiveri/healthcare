import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import './Navbar.css';

const Navb = () => {
    const [isOpen, setIsOpen] = useState(false);
          
            const toggle = () => setIsOpen(!isOpen);
    return ( 
              <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand><Link className="firmaLogo" to="/">Dr.Indiveri</Link></NavbarBrand>
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink ><Link to="/">Home</Link></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        <Link to="/mobile">Home</Link>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            Option 1
                          </DropdownItem>
                          <DropdownItem>
                            Option 2
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            Reset
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                  </Collapse>
                </Navbar>
              </div>
     );
}
 
export default Navb;