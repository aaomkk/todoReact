import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap'

export default function HomePage() {
   const [input, setInput] = useState('')
   const [date, setDate] = useState('')
   const [data, setData] = useState([])
   const [number, setNumber] = useState(1)

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleInputOnChange = (e) => {
      setInput(e.target.value)
   }
   const handleDateOnChange = (e) => {
      setDate(e.target.value)
   }
   const handleBtnSubmitOnClick = (e) => {
      e.preventDefault();
      const temp = []
      data.map((key) => {
         temp.push({
            number: key.number, 
            todo: key.todo, 
            date: key.date
         })
      })
      temp.push({number: number, todo: input, date: date})
      setData(temp)
      setNumber(number+1)
      handleClose()
   }

   return (
      <div>
         <br/>
         <Container>
         <Form>
            <Row>
            <Col xs={3}>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Todo</Form.Label>
                  <Form.Control type="text" placeholder="Enter Activity"  onChange={handleInputOnChange}/> 
                  {/* รูปแบบ callback ที่มากกว่า1 =  onChange={(e,ee) => {handleInputOnChange(e,ee)}} */}
               </Form.Group>
            </Col>
            
            <Col xs={3}>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" onChange={handleDateOnChange}/>
               </Form.Group>
            </Col>

            </Row>

            <Button variant="primary"  onClick={handleShow}>
               Submit
            </Button>
         </Form>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>TodoList</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, Do you want to save this todo?</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant="primary" onClick={handleBtnSubmitOnClick}>
                  Save
               </Button>
            </Modal.Footer>
         </Modal>

         <br/>

         <Row>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Activity</th>
                  <th>Date</th>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((key ,index) => {
                     return (
                        <tr key={key}>
                           <td>{key.number}</td>
                           <td>{key.todo}</td>
                           <td>{key.date}</td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </Table>
         </Row>


         </Container>
      </div>
   )
}
