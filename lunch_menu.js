class LunchMenu extends React.Component {
  render = () => {
    return (
      <div className="lunch-container">
      <hr/>
      <h4 id="lunchID">Lunch <small className="text-muted">Available at 11:00am<hr/></small></h4>
        <div className="lunch-menu">
        <div className="item-menu">
        <p>ROASTED BABY CARROTS * 12<br/>
        Avocado, Cumin, Sunflower Shoots, Humboldt Fog Cheese</p>
        </div>
        <div className="item-menu">
        <p>LOBSTER CEVICHE * 18<br/>
        Cucumber, Avocado, Onion, Shrimp Chips, Cilantro, Peruvian Chili</p>
        </div>
        <div className="item-menu">
        <p>PICKLED POTATOES * 9<br/>
        Crème Fraîche, Onion</p>
        </div>
        <div className="item-menu">
        <p>DOUBLE DOUBLE * 17<br/>
        Two Beef Patties, Cheddar, Arugula, Tomato Confit, Onion, Fries</p>
        </div>
        <div className="item-menu">
        <p>KALE SALAD * 14<br/>
        Parmesan, Almonds, Golden Raisens, Apple, Lemon-Pepper <br/><small>*Add: Grilled Chicken * 6 | Grilled Shrimp * 8</small></p>
        </div>
        <div className="item-menu">
        <p className="lunch-sides">EXTRAS <br/>Chicken * 6 | Shrimp * 4 | Avocado * 4 | Fries * 6</p>
        </div>
      </div>
    </div>
    )
  }
}
