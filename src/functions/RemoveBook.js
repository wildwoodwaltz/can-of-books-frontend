import axios from 'axios'

let burnBook = async (id) => {
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

module.exports = burnBook()