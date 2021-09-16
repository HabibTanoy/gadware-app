import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
class Services extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="mt-5 mx-5">
                    <h1 className="text-center font-weight-bold mb-4 new-line">Services</h1>
                    <p className="mx-5 mb-5 text-center p-modify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="row mx-5">
                        <div class="col-sm-4">
                        <Card className="bg-dark text-white">
                            <Card.Img src="2.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="mx-5 my-5">Custom Android App</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                        </div>
                        
                        <div class="col-sm-4">
                        <Card className="bg-dark text-white">
                            <Card.Img src="2.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="mx-5 my-5">Offline Database App</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                        </div>
                        
                        <div class="col-sm-4">
                        <Card className="bg-dark text-white">
                            <Card.Img src="2.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="mx-5 my-5">Cloud and Firebase database App</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                        </div>
                    </div>
                    {/* end of first card list */}
                    <div class="row mt-4 mx-5">
                        <div class="col-sm-4">
                        <Card className="bg-dark text-white">
                            <Card.Img src="2.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="mx-5 my-5">Management App</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                        </div>
                        
                        <div class="col-sm-4">
                        <Card className="bg-dark text-white">
                            <Card.Img src="2.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="mx-5 my-5">POS System App</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                        </div>
                        
                        <div class="col-sm-4">
                        <Card className="bg-dark text-white">
                            <Card.Img src="2.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="mx-5 my-5">Website to Apps Preview</Card.Title>
                                {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                        </div>
                    </div>
                </div>
        </div>
         );
    }
}
 
export default Services;