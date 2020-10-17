class Footer extends React.Component {
  render = () => {
    return (
      <footer>
        <div className="footer1">
            <a href="#">ABOUT</a><br/>
            <a href="#">RESERVATIONS</a><br/>
            <a href="#reviewID">LEAVE REVIEW</a><br/>
            <a href="#">CONTACT US</a>
        </div>
        <div className="footer2">
        <p>GRAPHIC/LOGO/TEXT HERE</p>
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
