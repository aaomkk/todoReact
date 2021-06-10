import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'

export default function HomePage() {
   const [input, setInput] = useState('')
   const [date, setDate] = useState('')
   const [data, setData] = useState([])
   const [number, setNumber] = useState(1)

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
         temp.push({number: key.number, todo: key.todo, date: key.date})
      })
      temp.push({number: number, todo: input, date: date})
      setData(temp)
      setNumber(number+1)
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

            <Button variant="primary" type="submit" onClick={handleBtnSubmitOnClick}>
               Submit
            </Button>
         </Form>

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
