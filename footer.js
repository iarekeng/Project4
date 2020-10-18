class Footer extends React.Component {
  render = () => {
    return (
      <footer>
        <div className="footer1">
            <a className="footer-links" href="#">ABOUT</a><br/>
            <a className="footer-links" href="#">RESERVATIONS</a><br/>
            <a className="footer-links" href="#reviewID">LEAVE REVIEW</a><br/>
            <a className="footer-links" href="#">CONTACT US</a>
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
