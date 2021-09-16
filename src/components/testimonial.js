import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class Testimonial extends Component {
    state = {  }
    render() { 
        const styles = {
            cardImage: {
                width:'80%',
                height:'600px'
            }
        }
        return ( 
            <div className="mt-5">
                <h1 className="text-center font-weight-bold mb-5 new-line">Testimonial</h1>  
                <div class="row mx-5">
                    <div class="col-sm-6">
                    <Card style={styles.cardImage}>
                        <Card.Img variant="top" src="my_img_02.jpg"/>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div class="col-sm-6 border">
                        <p>hello</p>
                    </div>
                </div> 
            </div>
         );
    }
}
 
export default Testimonial;