import React, {Component} from 'react';

//functional imports
import {withRouter} from 'react-router-dom';

//styles
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        const {pageSelected, handleHeaderChange, history} = this.props;

        this.state = {
            pageSelected : pageSelected
        }

        //bind the function
        this.handleHeaderChange = this.handleHeaderChange.bind(this);
    }

    handleHeaderChange(header) {
        this.props.handleHeaderChange(header);
        this.setState({pageSelected: header });
        this.props.history.push(`/${header}`);
    }

    render() {
        const {pageSelected} = this.state;
        return(
            <div className='header'>
                <div id='portfolio' className='nav-item'
                className={pageSelected == 'portfolio' ? 'selected' : ''}
                onClick={() => this.handleHeaderChange('portfolio')}>
                    Portfolio
                </div>
                <div id='ben' ref='ben' className='nav-item'
                className={pageSelected == 'ben' ? 'selected' : ''}
                onClick={() => this.handleHeaderChange('ben')}>
                    Ben
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
