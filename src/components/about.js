import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mt-5 mx-5">
                <h1 className="text-center font-weight-bold mb-4 new-line">About Informations</h1>
                <p className="mx-5 mb-5 text-center p-modify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="row">
                    <div class="col-sm-12 text-center">
                    <img src="/about.png" class="img-fluid" alt="Responsive image"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;