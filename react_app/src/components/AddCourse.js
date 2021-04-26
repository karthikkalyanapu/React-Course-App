import { Fragment ,useEffect} from "react";
import { Button, Container, Form, FormGroup,Input } from "reactstrap";

const Addcourse = () => {
  useEffect(()=>{
    document.title="AddCourses";
  })
  return (
    <Fragment>
      <h1 className="text-center">Fill course details</h1>
      <Form>
        <FormGroup>
          <label>Course Id</label>
          <Input type="text" 
           placeholder="enter here"
           name="user ID"
           id="userId"/>
        </FormGroup>
        <FormGroup>
          <label for="title">Course title</label>
          <Input type="text" placeholder="this is title" id="title" />

        </FormGroup>
        <FormGroup>
          <label for="description">Course description</label>
          <Input type="textarea" placeholder="enter description" id="placeholder"/>
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add course</Button>
          <Button color="warning ml-3">Clear</Button>
        </Container>

      </Form>
      
      </Fragment>
  );
};
export default Addcourse;