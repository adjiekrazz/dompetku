import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

class Navigation extends React.Component {
    constructor(props){
        super(props);
    }

    isLogin() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand" variant="dark">My Wallet</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/income" className="nav-link">Income</Link>
                        <Link to="/expense" className="nav-link">Expense</Link>
                        <NavDropdown title="Report" id="collapsible-nav-dropdown">
                            <Link to="/savepdf" className="dropdown-item">Save as PDF</Link>
                            <Link to="/sendemail" className="dropdown-item">Send to Email</Link>
                            <NavDropdown.Divider />
                            <Link to="/share" className="dropdown-item">Share to ..</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/" className="nav-link" onClick={() => this.props.handleLogout}>
                        Keluar
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }

    isntLogin() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dompetku</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }

    render() {
        if (this.props.liffData.isLogin || this.props.liffData.isInClient) {
            return this.isLogin()
        } else {
            return this.isntLogin()
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        liffData: state.liffdata
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout: () => dispatch({ type: 'REMOVE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)