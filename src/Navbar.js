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
                <Link to="#" className="navbar-brand" variant="dark">My Wallet</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/income" className="nav-link">Income</Link>
                        <Link to="/expense" className="nav-link">Expense</Link>
                        <Link to="/debt" className="nav-link">Debt</Link>
                        <Link to="/receivable" className="nav-link">Receivable</Link>
                    </Nav>
                    <Nav>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/" className="nav-link" onClick={() => this.props.removeUser()}>
                        Logout
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
                <Navbar.Brand href="#home">My Wallet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#">
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
        removeUser: () => dispatch({ type: 'REMOVE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)