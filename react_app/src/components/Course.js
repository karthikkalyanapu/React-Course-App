import React, { useEffect } from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container,Button
} from 'reactstrap';

const Course =({course})=>{
  useEffect(()=>{
    document.title="Courses";
  })
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title} </CardSubtitle>
          <CardText>{course.description}</CardText>
            <Container className="text-center">
              <Button color="danger" >Delete</Button>
              <Button color="success ml-3">Update</Button>
            </Container>
      </CardBody>
    </Card>
  )
}
 export default Course;