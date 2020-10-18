class Carousel extends React.Component {
  render = () => {
    return (
      <div className="container">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.getbento.com/accounts/d71e3903e4a7ed5faf7c73be0be329b1/media/images/84119Tomahawk_Steak.jpg?w=1800&fit=max&auto=compress,format&h=1800" />
          </div>
          <div className="carousel-item">
            <img src="https://www.seriouseats.com/images/2012/07/20120725-lobster-ceviche-latin-cuisine-6.jpg" className="d-block w-100" alt="lobster ceviche picture" />
          </div>
          <div className="carousel-item">
            <img src="https://images.getbento.com/accounts/d71e3903e4a7ed5faf7c73be0be329b1/media/images/99511Tequila_Cocktail.jpg?w=1800&fit=max&auto=compress,format&h=1800" className="d-block w-100" alt="tequila cocktail" />
          </div>
          <div className="carousel-item">
            <img src="https://oursaltykitchen.com/wp-content/uploads/2019/01/whole30-steak-bites-11.jpg" className="d-block w-100" alt="rib eye picture" />
          </div>
          <div className="carousel-item">
            <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/p960x960/67313944_107340703941245_8872894850005991424_o.jpg?_nc_cat=100&_nc_sid=cdbe9c&_nc_ohc=aG5wXfOuPtgAX-6n4FU&_nc_ht=scontent-lax3-1.xx&tp=6&oh=4ef5b954149581959cd80fc3d93833ee&oe=5FB0002F" className="d-block w-100" alt="cocktail" />
          </div>
          <div className="carousel-item">
            <img src="https://thefirstyearblog.com/wp-content/uploads/2017/12/Chocolate-Peanut-Butter-Mousse-9-600x899.jpg" className="d-block w-100" alt="Reese's chocolate mousse" />
          </div>
          <div className="carousel-item">
            <img src="https://images.getbento.com/accounts/d71e3903e4a7ed5faf7c73be0be329b1/media/images/36147Champagne_Cocktail.jpg?w=1800&fit=max&auto=compress,format&h=1800" className="d-block w-100" alt="champagne cocktail" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
    </div>
    )
  }
}
