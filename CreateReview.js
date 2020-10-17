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
      <input onKeyUp={this.changeNewPersonRating} type="number" placeholder="rating" /><br/>
      <input onKeyUp={this.changeNewPersonDescription} type="text" placeholder="description" /><br/>
      <input type="submit" placeholder="Send Review!" /><br/>
    </form>
    </div>
  }
}
