import React, {Component} from 'react';

//styles
import './App.css';
import {Grid, Col, Row} from 'react-bootstrap';

//components
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Portfolio from './components/portfolio/Portfolio';

//data 
import {PORTFOLIO_LINKS} from './data/links/links';
import {PORTFOLIO_PIECES} from './data/portfolio-pieces/pieces';

class App extends Component {

    constructor() {
        super();
        this.state = {
            linkSelected: 0
        }
        //bind functions
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    //handle the link change
    handleLinkClick(id) {
        this.setState({linkSelected: id});       
    }

    render() {
        return(
            <div className='container'>
                <Grid>
                    <Row>
                        <Col className='app-header' xs={12}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='content' md={3} xs={12}>
                            <SideBar
                            links={PORTFOLIO_LINKS}
                            handleLinkClick={this.handleLinkClick}
                             />                    
                        </Col>
                    
                        <Col className='content' md={9} xs={12}>
                            <Portfolio 
                            piece={PORTFOLIO_PIECES[this.state.linkSelected]}
                            selected={this.state.linkSelected}
                            />
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        );
    }
}

export default App;