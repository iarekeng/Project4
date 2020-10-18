class Nav extends React.Component {
  render = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Pinch of Salt</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Reservations</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#reviewID">Leave Review</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menus
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#daytimeID">Breakfast</a>
          <a className="dropdown-item" href="#lunchID">Lunch</a>
          <a className="dropdown-item" href="#dinnerID">Dinner</a>
          <a className="dropdown-item" href="#dessertID">Dessert</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}
