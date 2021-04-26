import React from "react"
import {Jumbotron,Container,Button} from "reactstrap";

const Home=()=>{
  return( 
    <div>
      <Jumbotron className="text-center bg-primary">
      <h1>Learning React</h1>
      <p>this is very nice JS library
      </p>
      <Container className="text-center">
        <Button color="primary">Start Using</Button>
      </Container></Jumbotron>
    </div>
  )
}
export default Home;