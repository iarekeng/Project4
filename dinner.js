class DinnerMenu extends React.Component {
  render = () => {
    return (
      <div className="dinner-container">
      <hr/>
      <h4 id="dinnerID">Evening <small className="text-muted">5pm-10pm<hr/></small></h4>
        <div className="dinner-menu">
        <div className="item-menu">
        <p>WILD SALMON AUTUMN BOWL * 17<br/>
        Carolina Gold Rice, Fall Vegetables, Lemon</p>
        </div>
        <div className="item-menu">
        <p>ROASTED MARY'S CHICKEN * 28<br/>
        Potato Purèe Turnip, Onion, Salsify, Salsa Verde, Garlic Purèe</p>
        </div>
        <div className="item-menu">
        <p>GRILLED AUSTRALIAN LAMB CHOPS * 32<br/>
        Crushed Potato Scallion, Roasted Carrots, Brussels, Peruvian Sauces</p>
        </div>
        <div className="item-menu">
        <p>RICOTTA AGNOLOTTI * 25<br/>
        Roasted Squash, Mushrooms, Black Truffle Jus</p>
        </div>
        <div className="item-menu">
        <p>40oz MEYERS RANCH BONE-IN RIBEYE * 90<br/>
        Fried Onions, Roasted Root Vegetables, Crispy Potato, KEX A1</p>
        </div>
        <div className="item-menu">
        <p className="dinner-sides">EXTRAS <br/>Chicken * 6 | Shrimp * 4 | Avocado * 4 | Fries * 6</p>
        </div>
      </div>
    </div>
    )
  }
}
