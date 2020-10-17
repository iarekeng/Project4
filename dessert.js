class DessertMenu extends React.Component {
  render = () => {
    return (
      <div className="dessert-container">
      <hr/>
      <h4 id="dessertID">Dessert<hr/></h4>
        <div className="dessert-menu">
        <div className="item-menu">
        <p>CHEESE COURSE * 14<br/>
        Humboldt Fog, Blue, Honey Comb, Quince, French Toast, Walnuts</p>
        </div>
        <div className="item-menu">
        <p>BUTTERSCOTCH PUDDING * 10<br/>
        Caramel, Crème Fraîche, Maldon Sea Salt</p>
        </div>
        <div className="item-menu">
        <p>REESE'S * 10<br/>
        Chocolate Gelato, Peanut Butter Mousse</p>
        </div>
        <div className="item-menu">
        <p>CHOCOLATE CAKE * 12<br/>
        Chocolate Galette, Oreo McFlurry</p>
        </div>
      </div>
    </div>
    )
  }
}
