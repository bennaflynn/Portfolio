import React, {Component} from 'react';

//styles
import './App.css';
import {Grid, Col, Row} from 'react-bootstrap';

//functional imports
import {withRouter, BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import Header from './components/header/Header';
import PortfolioContainer from './components/portfolio-container/PortfolioContainer';
import Ben from './components/ben-container/ben';



class App extends Component {

    constructor(props) {
        super(props);
        
        const {history} = this.props;

        this.state = {
            pageSelected: 'portfolio'
        }

        this.handleHeaderChange = this.handleHeaderChange.bind(this);
    }

    //handle the header nav change
    handleHeaderChange(newHeader) {
        const {history} = this.props;
       this.setState({pageSelected : newHeader});

    }
   

    render() {
        var {pageSelected} = this.state;
    
        return(
            <BrowserRouter>
                <div className='container'>
                    <Grid>
                        <Row>
                            <Col className='app-header' xs={12}>
                                <Header 
                                pageSelected={pageSelected}
                                handleHeaderChange={this.handleHeaderChange}/>
                            </Col>
                        </Row>
                        <Switch>
                            <Route
                            path="/portfolio"
                            component={PortfolioContainer}
                            exact
                            />
                            <Route 
                            path="/ben"
                            component={Ben}
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