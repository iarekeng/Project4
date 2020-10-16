class Footer extends React.Component {
  render = () => {
    return (
      <footer>
        <div className="footer1">
            <p>ABOUT</p>
            <p>RESERVATIONS</p>
            <p>GIFT CARDS</p>
            <p>CONTACT US</p>
        </div>
        <div className="footer2">
        <p>SOME GRAPHIC HERE</p>
        </div>
        <div className="footer3">
          <a href="#" target="_blank"><i className="fab fa-instagram-square fa-3x fa-fw"></i></a>
          <a href="#"><i className="fab fa-facebook-square fa-3x fa-fw"></i></a>
          <a href="#" target="_blank"><i className="fab fa-twitter-square fa-3x fa-fw"></i></a>
        </div>
      </footer>
    )
  }
}