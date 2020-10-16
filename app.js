class App extends React.Component {
  render = () => {
    return <div>
      <h2>Leave a review!</h2>
      <form>
        <input onKeyUp={this.createRating} type="text" placeholder="name" /><br/>
        <input type="number" placeholder="rating" /><br/>
        <input type="text" placeholder="description" /><br/>
        <input type="submit" placeholder="Send Review!" /><br/>

      </form>
      <Footer></Footer>
    </div>
  }
}


ReactDOM.render(
  <App/>,
  document.querySelector('main')
)
