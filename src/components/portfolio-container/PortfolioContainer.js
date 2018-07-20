import React, {Component} from 'react';

//styles
import {Row,Col} from 'react-bootstrap';

//components
import SideBar from '../sidebar/SideBar';
import Portfolio from '../portfolio/Portfolio';

//data 
import {PORTFOLIO_LINKS} from '../../data/links/links';
import {PORTFOLIO_PIECES} from '../../data/portfolio-pieces/pieces';

class PortfolioContainer extends Component {
    constructor(props) {
        super(props);

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
        );
    }
    
}

export default PortfolioContainer;

