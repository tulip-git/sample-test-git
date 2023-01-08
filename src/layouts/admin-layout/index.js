import React from 'react'
import { Footer } from './Footer'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';

const AdminLayout = ({children}) => {
    return (
        <>
            <Container fluid>
                <Header />
            </Container>
            <Container>
               {children}
            </Container>
            <Container fluid>
                <Footer />
            </Container>
        </>
    )
}

export default AdminLayout