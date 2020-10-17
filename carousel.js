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
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://image.zmenu.com/large/938470/20141104192622727000.jpg" className="d-block w-100" alt="french toast picture" />
            <div className="carousel-caption d-none d-md-block">
               <h3>Crème Brûlée French Toast</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.seriouseats.com/images/2012/07/20120725-lobster-ceviche-latin-cuisine-6.jpg" className="d-block w-100" alt="lobster ceviche picture" />
            <div className="carousel-caption d-none d-md-block">
               <h3>Lobster Ceviche</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://oursaltykitchen.com/wp-content/uploads/2019/01/whole30-steak-bites-11.jpg" className="d-block w-100" alt="rib eye picture" />
            <div className="carousel-caption d-none d-md-block">
               <h3>Rib Eye</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://thefirstyearblog.com/wp-content/uploads/2017/12/Chocolate-Peanut-Butter-Mousse-9-600x899.jpg" className="d-block w-100" alt="Reese's chocolate mousse" />
            <div className="carousel-caption d-none d-md-block">
               <h3>Reese's Gelato and Mousse</h3>
            </div>
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
