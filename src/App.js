import React, {Component} from 'react';

//styles
import './App.css';
import {Grid, Col, Row} from 'react-bootstrap';

//functional imports
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import Header from './components/header/Header';
import PortfolioContainer from './components/portfolio-container/PortfolioContainer';



class App extends Component {

    constructor() {
        super();
        
    }

   

    render() {
        return(
            <BrowserRouter>
                <div className='container'>
                    <Grid>
                        <Row>
                            <Col className='app-header' xs={12}>
                                <Header/>
                            </Col>
                        </Row>
                        <Switch>
                            <Route
                            path="/portfolio"
                            component={PortfolioContainer}
                            exact
                            />
                            <Route
                            component={PortfolioContainer}
                            />
                        </Switch>
                    </Grid>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;