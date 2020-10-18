class CreateReview extends React.Component {

changeNewPersonName = (event) => {
  this.setState({
    newPersonName:event.target.value
  })
}

changeNewPersonRating = (event) => {
  this.setState({
    newPersonRating:event.target.value
  })
}

changeNewPersonDescription = (event) => {
  this.setState({
    newPersonDescription:event.target.value
  })
}

createRating = (event) => {
  event.preventDefault();
  axios.post(
    '/reviews',
    {
      name:this.state.newPersonName,
      rating:this.state.newPersonRating,
      description:this.state.newPersonDescription
    }
  ).then(
    (response) => {
      this.props.createCallBack();
    }
  )
}

  render = () => {
    return <div className="createReview-container">
    <h2 id="reviewID" className="createReview-title">Leave a review!</h2>
    <form onSubmit={this.createRating}>
      <input onKeyUp={this.changeNewPersonName} type="text" placeholder="name" /><br/>
      <input className="review-mid" onKeyUp={this.changeNewPersonRating} min="1" max="5" type="number" placeholder="1-5" /><br/>
      <textarea onKeyUp={this.changeNewPersonDescription} rows="4" cols="40" placeholder="description" /><br/>
      <input className="btn btn-outline-dark" type="submit" placeholder="Send Review!" /><br/>
    </form>
    </div>
  }
}
