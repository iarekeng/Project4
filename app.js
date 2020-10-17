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
    <LunchMenu/>
    <DinnerMenu/>
    <DessertMenu/>
    <CreateReview createCallBack={this.updateReview}></CreateReview>
    <h2 className="list-title">List of Reviews</h2>
    <ul className="list-ul">
      {
        this.state.reviews.map(
          (review) => {
            return <li className="list-li">
              {review.name}: {review.rating}: {review.description}
              <button value={review.id} onClick={this.deleteReview}>
              DELETE
              </button>
              <form id={review.id} onSubmit={this.updateReviews}>
              <input onKeyUp={this.changeUpdateReviewName} type="text" placeholder="name" /><br/>
              <input onKeyUp={this.changeUpdateReviewRating} type="number" placeholder="rating" /><br/>
              <input onKeyUp={this.changeUpdateReviewDescription} type="text" placeholder="description" /><br/>
              <input type="submit" placeholder="Update Review" /><br/>
              </form>
            </li>
          }
        )
      }
      </ul>

      <Footer/>
    </div>
  }
}


ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
