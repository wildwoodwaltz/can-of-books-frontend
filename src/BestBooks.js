import React from 'react';
import axios from 'axios';
import { Carousel, Button, CarouselItem, Modal } from 'react-bootstrap';
import BookFormModal from './BookFormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookformModal: false,
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  fetchBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      console.log(url)
      const response = await axios.get(url)
        ;
      console.log(response);
      this.setState({
        books: response.data
      })
      console.log(this.state.books)
    } catch (error) {
      console.log('error', error.response)
    }
  }

  burnBook = async (id) => {
    try{
      await axios.delete(`${process.env.REACT_APP_SERVER}/books/${id}`);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState ({
        books: updatedBooks,
      })
    }catch(error){
      console.log(error.response)
    }
  }

  addBook = async (newBook) => {
    try {
      let createdBook = await axios.post(`${process.env.REACT_APP_SERVER}/books`, newBook);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log(error.response)
    }
  }
  showForm = () => {
    this.setState({
      bookformModal: true,
    })
  }
  hideForm = () => {
    this.setState({
      bookformModal: false,
    })
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {

    /* TODO: render user's books in a Carousel */
    let carouselItems = this.state.books.map(book => (
      <Carousel.Item key={book._id}>
        <p>{book.title}</p>
        <p>{book.description}</p>
        <Button onClick={this.burnBook}>Burn</Button>
      </Carousel.Item>
    ))

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {carouselItems}
            <CarouselItem>
              <Button onClick={this.showform}>Add New Book</Button>
            </CarouselItem>
          </Carousel>

        ) : (
          <>
            <h3>No Books Found :(</h3>
            <Button onClick={this.showform} />
          </>
        )}
        <Modal show={this.state.bookformModal}>
          <Modal.Header closeButton={this.hideForm}>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <BookFormModal
            addBook={this.addBook} />
        </Modal>
      </>
    )
  }
}

export default BestBooks;
