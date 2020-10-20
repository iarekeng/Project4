class App extends React.Component {
state = {
  reviews: []
}
  componentDidMount = () => {
    this.updateReview();
  }

  changeUpdateReviewName = (event) => {
    this.setState({
      updateReviewName:event.target.value
    })
  }

  changeUpdateReviewRating = (event) => {
    this.setState({
      updateReviewRating:event.target.value
    })
  }

  changeUpdateReviewDescription = (event) => {
    this.setState({
      updateReviewDescription:event.target.value
    })
  }

  updateReviews = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put('/reviews/'+id,
    {
      name:this.state.updateReviewName,
      rating:this.state.updateReviewRating,
      description:this.state.updateReviewDescription
    }
  ).then(
    (response) => {
      this.setState({
        reviews:response.data
      })
    }
  )
  }

  deleteReview = (event) => {
    axios.delete('/reviews/' + event.target.value).then(
      (response) => {
        this.setState({
          reviews:response.data
        })
      }
    )
  }

  updateReview = () => {
    axios.get('/reviews').then(
      (response) => {
        this.setState({
          reviews:response.data
        })
      }
    )
  }

  render = () => {
    return <div>
    <Nav/>
    <Banner/>
    <BreakfastMenu/>
    <div className="reviews-container">
    <CreateReview createCallBack={this.updateReview}></CreateReview>
    <div className="reviews">
    <h3 className="list-title">What others are saying</h3>
    <ul className="list-ul">
      {
        this.state.reviews.map(
          (review) => {
            return <li className="list-li">
              <p><small>NAME:</small> {review.name}<br/><small> RATING:</small> {review.rating}<br/> <small>DESCRIPTION:</small> {review.description}</p>
              <details><summary className="btn btn-outline-dark">Edit</summary><br/>
              <form id={review.id} onSubmit={this.updateReviews}>
              <input onKeyUp={this.changeUpdateReviewName} type="text" placeholder="name" /><br/>
              <input className="review-mid" onKeyUp={this.changeUpdateReviewRating} min="1" max="5" type="number" placeholder="1-5" /><br/>
              <textarea onKeyUp={this.changeUpdateReviewDescription} rows="4" cols="40" placeholder="description" /><br/>
              <input id="edit-submit" className="btn btn-outline-dark" type="submit" placeholder="Send Review!" />
              <button className="btn btn-outline-danger" value={review.id} onClick={this.deleteReview}>
              DELETE
              </button>
              </form>
              </details>
            </li>
          }
        )
      }
      </ul>
      </div>
      </div>
      <Carousel/>
      <Footer/>
    </div>
  }
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
