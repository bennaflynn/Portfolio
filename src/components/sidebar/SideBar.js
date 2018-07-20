import React, {Component} from 'react';

//styles
import './SideBar.css';

class SideBar extends Component {
    //we are going to passing the links
    constructor(props) {
        super(props);

        const {links} = this.props;

        this.state = {
            //the links passed from the parent
            displayLinks : links
        }
    }

    render() {
        const {displayLinks} = this.state;

        return(
            <div className='sidebar'>
                <ul>
                    {displayLinks.map((dl) => {
                        console.log(dl);
                        return(                       
                        <li 
                        key={dl.name}
                        className='portfolio-link'>
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