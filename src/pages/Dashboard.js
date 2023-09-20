import React from "react";
import {
    Container,
    Row,
    Col,
    Button,
    UncontrolledCarousel
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Dashboard.css'


const slides = [
    {
        src: 'https://media.primicias.ec/2019/12/30123125/IESS-edificio-3-WEB.jpg',
        altText: 'Slide 1'
    }, {
        src: 'https://media.primicias.ec/2019/12/30123125/IESS-edificio-3-WEB.jpg',
        altText: 'Slide 2'
    }
]
export default function Dashboard() {
    return (
        <div className='contenedorPrincipal'
            style={
                {
                    overflowY: "scroll",
                    maxHeight: "100vh",
                    height: "100%"
                }
        }>
            
            <Container className="cont" fluid
                style={
                    {width: "90%"}
            }>
                <Row style={
                    {alignItems: "center"}
                }>
                    <Col xs={12}
                        md={6}
                        className="p-6 text-center md-text-left">
                        <section style={
                            {height: "100%"}
                        }>
                            <span className="block text-6xl font-weight-bold mb-1">IESS</span>
                            <div className="text-6xl text-primary font-weight-bold mb-3">your visitors deserve to see</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Button color="primary" className="mr-3">Learn More</Button>
                            <Button color="secondary">Live Demo</Button>
                        </section>
                    </Col>
                    <Col xs={12}
                        md={6}
                        className="overflow-hidden">
                        <UncontrolledCarousel className="carusel"
                            items={slides}/>
                    </Col>
                </Row>
            </Container>
            <Container className="cont" fluid
                style={
                    {width: "90%"}
            }>
                <Row style={
                    {alignItems: "center"}
                }>
                    <Col xs={12}
                        md={6}
                        className="p-6 text-center md-text-left">
                        <section style={
                            {height: "100%"}
                        }>
                            <span className="block text-6xl font-weight-bold mb-1">IESS</span>
                            <div className="text-6xl text-primary font-weight-bold mb-3">your visitors deserve to see</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Button color="primary" className="mr-3">Learn More</Button>
                            <Button color="secondary">Live Demo</Button>
                        </section>
                    </Col>
                    <Col xs={12}
                        md={6}
                        className="overflow-hidden">
                        <UncontrolledCarousel className="carusel"
                            items={slides}/>
                    </Col>
                </Row>
            </Container>
            <Container className="cont" fluid
                style={
                    {width: "90%"}
            }>
                <Row style={
                    {alignItems: "center"}
                }>
                    <Col xs={12}
                        md={6}
                        className="p-6 text-center md-text-left">
                        <section style={
                            {height: "100%"}
                        }>
                            <span className="block text-6xl font-weight-bold mb-1">IESS</span>
                            <div className="text-6xl text-primary font-weight-bold mb-3">your visitors deserve to see</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Button color="primary" className="mr-3">Learn More</Button>
                            <Button color="secondary">Live Demo</Button>
                        </section>
                    </Col>
                    <Col xs={12}
                        md={6}
                        className="overflow-hidden">
                        <UncontrolledCarousel className="carusel"
                            items={slides}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
