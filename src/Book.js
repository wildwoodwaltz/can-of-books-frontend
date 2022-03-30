import React from 'react';
import { Button } from 'react-bootstrap';

class Book extends React.Component {
  render() {
    return (
      <>
      <div className="carouselContainer">
      <p>{this.props.book.title}</p>
      <p>{this.props.book.description}</p>
      <Button className="burn" onClick={() => this.props.burnBook(this.props.book._id)}>Burn The Book!</Button>
      </div>
      </>
    )
  }
  
}

export default Book;