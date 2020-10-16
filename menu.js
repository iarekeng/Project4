class Menu extends React.Component {
  render = () => {
    return (
      <div className="menu-container">
      <span id="daytimeID" className="h4">Daytime <span className="h6">9am-3pm</span></span>
        <div className="daytime-menu">
        <div className="item-menu">
        <p>Fried Egg Brioche Sandwich * 13<br/>
        American Cheese, Tender Belly Bacon, Lettuce, Tomato Confit</p>
        </div>
        <div className="item-menu">
        <p>Avocado Toast * 10<br/>
        Crushed Avocado, Frisée, Arugula, Salsa Verde</p>
        </div>
        <div className="item-menu">
        <p>Funfetti Pancakes * 10<br/>
        Vanilla Icing, Vermont Maple Syrup</p>
        </div>
        <div className="item-menu">
        <p>Crème Brûlée French Toast * 14<br/>
        Seasonal Fruit, Whipped Cream, Maple Syrup</p>
        </div>
        <div className="item-menu">
        <p>Farm Egg Benedict * 12<br/>
        Sourdough, Tender Belly Bacon, Tomato Confit, Hollandaise</p>
        </div>
        <div className="item-menu">
        <p className="breakfast-sides">Breakfast Sides <br/>Pork Sausage Patty * 4 | Tender Belly Bacon * 4<br/>
        Two Eggs * 5 | Grilled Sourdough * 2 | Avocado * 4<br/>
        Potatoes * 4 | Seasonal Fruit * 7 </p>
        </div>
      </div>
    </div>
    )
  }
}
