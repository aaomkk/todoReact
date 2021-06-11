import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap'

export default function CardPage() {
   const [title, setTitle] = useState('')
   const [subtitle, setSubtitle] = useState('')
   const [content, setContent] = useState('')
   const [link, setLink] = useState('')
   const [data, setData] = useState([])

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   const handleTitleOnChange = (e) => {
      setTitle(e.target.value)
   }
   const handleSubtitleOnChange = (e) => {
      setSubtitle(e.target.value)
   }
   const handleContentOnChange = (e) => {
      setContent(e.target.value)
   }
   const handleLinkOnChange = (e) => {
      setLink(e.target.value)
   }
   const handleBtnSubmitOnClick = (e) => {
      e.preventDefault();
      const temp = []
      data.map((key) => {
         temp.push({
            title: key.title,
            subtitle: key.subtitle,
            content: key.content,
            link: key.link
         })
      })
      temp.push({
         title: title, 
         subtitle: subtitle,
         content: content,
         link: link
      })
      setData(temp)
      handleClose()
   


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
                  <Form.Control type="text" placeholder="Input Card subtitle" onChange={handleSubtitleOnChange} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Card Content</Form.Label>
                  <Form.Control as="textarea" placeholder="Input Card Content" rows={3} onChange={handleContentOnChange} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Link</Form.Label>
                  <Form.Control type="text" placeholder="Input Link" onChange={handleLinkOnChange} />
               </Form.Group>
               </Col>

            </Row>
            <Button variant="primary" onClick={handleShow} >
               Submit
            </Button>
         </Form>
         <br/>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, Do you want to save this card?</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant="primary" onClick={handleBtnSubmitOnClick}>
                  Save
               </Button>
            </Modal.Footer>
         </Modal>

         

         <Row xs={1} md={3} className="g-4">
         {
            data.map((key, index) => {
               return (
                  <Col>
                     <Card style={{ marginBottom: '30px' }}>
                     <Card.Body>
                        <Card.Title>{key.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{key.subtitle}</Card.Subtitle>
                        <Card.Text>{key.content}</Card.Text>
                        <Card.Link href="#">{key.link}</Card.Link>
                     </Card.Body>
                     </Card>
                  </Col>
               )
            })
         }
         </Row>
         </Container>
      </div>
   )
}
