import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';


class BookFormModal extends React.Component {

  render() {
    let handleBookShelf = (e) => {
      e.preventDefault();
      let newBook = {
        title: e.target.title.value,
        description: e.target.description.value,
        email: e.target.email.value,
        status: e.target.status.checked
      }
      this.props.addBook(newBook);
    }

    return (
      <Container className="mt-5">
      <Form onSumbit={handleBookShelf}>
        <Form.Group controlID="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlID="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlID="email">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group controlId="Status">
                <Form.Check type="checkbox" label="I have read this book" />
              </Form.Group>
              <Button type="submit">Add Book to my Shelf</Button>
      </Form>
      </Container>
    );
  }
};


export default BookFormModal