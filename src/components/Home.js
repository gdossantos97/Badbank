import React, { Component } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import pic from '../images/bank.jpg'; 
import { Link } from 'react-router-dom';



// card needs to be centered
// card also needs to have a picture

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Card className="text-center">
            <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Welcome To Bad Bank!</Card.Title>
                <Card.Text>
                  This is seriously not a good bank, we will post all of your information
                  so we chose to name ourselves after our true intentions, but I mean hey... At 
                  least we're honest about it.
                </Card.Text>
                <Link to="/Createaccount"><Button variant="danger" >Enter at your own risk</Button></Link>
              </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}

