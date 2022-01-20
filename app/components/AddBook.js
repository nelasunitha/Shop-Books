import React, { Component } from "react";
import { createBooks} from "../redux/books";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//component for creating new robot
class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      name:  "",
      author: "",
      genre:  "",
      publishedYear: "",
      price: ""
    };
    //binding event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//event handlers
  handleChange(evt) {
    this.setState({
     [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createBooks({ ...this.state });
  }

  //rendering data
  render() {
    const { name, author,genre, publishedYear, price} = this.state;
    const { handleSubmit, handleChange } = this;
    // console.log('this State', this.state)

    return (
      <div > Add New Book here
        <p></p>
        <form id="add-form" onSubmit={handleSubmit}>
        <p>
          <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange ={(evt)=> handleChange(evt)}
            />
        </p>

          <input
            type="text"
             name="author"
            placeholder="Author"
            value={author}
            onChange ={(evt)=> handleChange(evt)}
          />
           <p>
             <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={genre}
              onChange ={(evt)=> handleChange(evt)}
            />
           </p>
           <p>
            <input
              type="number"
              name="publishedYear"
              placeholder="Year"
              value={publishedYear}
              onChange ={(evt)=> handleChange(evt)}
            />
           </p>
          <p>
            <input
              type="number"
             name="price"
              placeholder="Price"
              value={price}
              onChange ={(evt)=> handleChange(evt)}
            />
          </p>
            <button type="submit">Submit</button>
          <Link to="/books">Cancel</Link>
        </form>
      </div>
    );
  }
}
//mapping props and dispatching to thunk creator
const mapDispatchToProps = (dispatch, { history }) => ({
  createBooks: (book) => dispatch(createBooks(book, history)),
});

export default connect(null, mapDispatchToProps)(AddBook);
