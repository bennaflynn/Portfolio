import React, {Component} from 'react';

//styles
import './App.css';
import {Grid, Col, Row} from 'react-bootstrap';

//components
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';

//data 
import {PORTFOLIO_PIECES} from './data/links/links';

class App extends Component {
    render() {
        return(
            <div className='container'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='content' xs={3}>
                            <SideBar
                            links={PORTFOLIO_PIECES}
                             />                    
                        </Col>
                    
                        <Col className='content' xs={9}>
                            <h1>
                                Hello my baby, hello my honey, hello from REACT
                            </h1>
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        );
    }
}

export default App;