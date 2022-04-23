import React, { Component } from 'react'
import { Container, Card, Button } from 'react-bootstrap'



// card needs to be centered
// card also needs to have a picture

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Card style={{ width:'18rem' }}>
            <Card.Img variant="top" src=""/>
              <Card.Body>
                <Card.Title>Welcome To Bad Bank!</Card.Title>
                <Card.Text>
                  This is seriously not a good bank, we will post all of your information
                  so we chose to name ourselves after our true intentions! I mean hey... At 
                  least we are honest about it...
                </Card.Text>
                <Button variant="danger">Enter at your own risk</Button>
              </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}

