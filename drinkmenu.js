class DrinkMenu extends React.Component {
  render = () => {
    return (
      <div className="drink-container">
      <hr/>
      <h4 id="drinkID">Cocktails<hr/></h4>
        <div className="drink-menu">
        <div className="item-menu">
        <p>APEROL + BUBBLES * 14<br/>
        Aperol, Lillet Rouge, Cassis, Champagne, Fever Tree Club Soda</p>
        </div>
        <div className="item-menu">
        <p>YUZU G + G * 14<br/>
        Aviation Gin, Yuzu, Lemongrass, Mediterranean Tonic, Black Fluer de Sal</p>
        </div>
        <div className="item-menu">
        <p>VODKA + LYCHEE * 14<br/>
        Absolute Elyx Vodka, Lychee, Strawberry Brandy, Sicilian Lemon, Tiki Bitters</p>
        </div>
        <div className="item-menu">
        <p>MEZCAL + CUCUMBER * 14<br/>
        Vida Mezcal, Cucumber, Herbs De Provence, Aloe, Metaxa, Lime</p>
        </div>
        <div className="item-menu">
        <p>BOURBON + GINGER * 14<br/>
        Woodinville Bourbon, Ginger, Lemon Verbena, Cabernet Sauvignon, Citris, Vanilla Bean Tincture</p>
        </div>
        <div className="item-menu">
        <p>RUM + COCONUT * 14<br/>
        Ron Zacapa Rum, Coconut Roasted Cashew, Amontillado Sherry, Lime Mint</p>
        </div>
      </div>
          <hr/>
    </div>
    )
  }
}
