import {useEffect} from "react";
import axios from 'axios';
import {Container} from "@mui/material";

export const StartPage = () => {
  
  async function getTodos() {
    
    const result = await axios.get('http://localhost:3000/todos', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzg0YzNjYmVhYmE2YTFlYzUwNzZiZDIiLCJ1c2VybmFtZSI6Im1hcnRpbiIsImlhdCI6MTY3MDE0MDEzOCwiZXhwIjoxNjcwMTQzNzM4fQ.pcCar9pfWbjbYxVZmAUOG35WMMdQwxwrs9EI5SbCnu4`
      }
    })
    console.log(result);
  }
  
  useEffect(() => {
    getTodos();
  }, [])
  
  return (
    <Container maxWidth='xl'>
      <h2>
        Start Page
      </h2>
    </Container>
  )
}
