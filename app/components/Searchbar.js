// import React from 'react';
// import { connect } from 'react-redux';

// import { fetchSingleBook } from "../redux/singleBook";


// export class Searchbar extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name:  "",

//     };
//     //binding event handlers
//     this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//      });
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.props.searchBooks({ ...this.state });
//   }
//   render() {
//     const { name} = this.state;
//     const {  handleChange} = this;
//     return (
//       <div >
//         <input
//             type="text"
//              name="name"
//              options={books}
//              label ={(park) => park.fullName}
//             value={name}
//             onChange ={(evt)=> handleChange(evt)}
//           />
//       </div>
//     );
//   }
// }
// const mapState = (state) => {
//   return {
//     books: state.books,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     getParks: () => dispatch(fetchSingleBook()),
//   };
// };

// export default connect(mapState, mapDispatch)(Searchbar);
