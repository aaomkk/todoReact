import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

export default function CardPage() {
   const [title, setTitle] = useState('')
   const [subtitle, setSubtitle] = useState('')
   const [content, setContent] = useState('')
   const [link, setLink] = useState('')
   const [data, setData] = useState([])

   const handleTitleOnChange = (e) => {
      setTitle(e.target.value)
   }
   const handleSubtitleOnChange = (e) => {
      setSubtitle(e.target.value)
   }


   return (
      <div>
        <br/>
         <Container>
         <Form>

            <Row>

               <Col>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Card Title</Form.Label>
                  <Form.Control type="text" placeholder="Input Card Title" onChange={handleTitleOnChange} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Card subtitle</Form.Label>
                  <Form.Control type="text" placeholder="Input Card subtitle" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Card Content</Form.Label>
                  <Form.Control as="textarea" placeholder="Input Card Content" rows={3}  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Link</Form.Label>
                  <Form.Control type="text" placeholder="Input Link" />
               </Form.Group>
               </Col>

            </Row>
            <Button variant="primary" type="submit" >
               Submit
            </Button>
         </Form>
         <br/>

         <Card style={{ width: '18rem' }}>
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
         </Card.Body>
         </Card>
         </Container>
      </div>
   )
}
