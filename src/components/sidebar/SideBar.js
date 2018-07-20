import React, {Component} from 'react';

//styles
import './SideBar.css';

class SideBar extends Component {
    //we are going to passing the links
    constructor(props) {
        super(props);

        const {links, handleLinkClick} = this.props;

        this.state = {
            //the links passed from the parent
            displayLinks : links
        }

        //bind the functions
        this.changeLink = this.changeLink.bind(this);
    }

    changeLink(id) {
        this.props.handleLinkClick(id);
    }

    render() {
        const {displayLinks} = this.state;

        return(
            <div className='sidebar'>
                <ul>
                    {displayLinks.map((dl) => {
                        
                        return(                       
                        <li 
                        key={dl.id}
                        className='portfolio-link'
                        onClick={() => this.changeLink(dl.id)}>
                            {dl.name}
                        </li>
                        );
                    })}
                    
                </ul>
            </div>
        ); 
    }
}

export default SideBar;