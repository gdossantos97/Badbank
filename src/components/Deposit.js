import React, { Component } from 'react'
import { Container, Card,Form, Button } from 'react-bootstrap'

export default class Deposit extends Component {
  render() {
    return (
      <div>
      <Container>
          <Card>

          <Card.Header>Deposit funds into your account</Card.Header>


            <Card.Body>
            <Card.Title>Current Balance $1,000,000</Card.Title>

              <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount to deposit</Form.Label>
              <Form.Control type="number" placeholder="Ex... $20" />
              <Form.Text className="text-muted">
                Please enter a numerical value
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Deposit
            </Button>

              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}
