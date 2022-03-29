import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
fetchBooks = async () => {
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: response.data
      })
  } catch(error) {
    console.log('error', error.response.data)
  }
}

componentDidMount(){
  this.fetchBooks();
}

  render() {

    /* TODO: render user's books in a Carousel */
    let carouselItems = this.state.books.map(book => (
      <Carousel.Item key={book._id}>
        <p>{book.title}</p>
        <p>{book.description}</p>
      </Carousel.Item>
    ))

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
              {carouselItems}
            </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
