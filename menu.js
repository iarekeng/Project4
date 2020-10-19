class Menu extends React.Component {
  render = () => {
    return (

<div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Brunch Menu
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body daytime-menu">
        <h4 id="daytimeID">Brunch <small className=" text-muted">9am-3pm<hr/></small></h4>
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
        <p className="breakfast-sides">BREAKFAST SIDES <br/>Pork Sausage Patty * 4 | Tender Belly Bacon * 4<br/>
        Two Eggs * 5 | Grilled Sourdough * 2 | Avocado * 4<br/>
        Potatoes * 4 | Seasonal Fruit * 7 </p>
        </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Lunch Menu
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body lunch-menu">
        <h4 id="lunchID">Lunch <small className="text-muted">Available at 11:00am<hr/></small></h4>
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
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Dinner Menu
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body dinner-menu">
        <h4 id="dinnerID">Evening <small className="text-muted">5pm-10pm<hr/></small></h4>
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
  </div>


  <div className="card">
    <div className="card-header" id="headingFour">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Dessert Menu
        </button>
      </h2>
    </div>
  <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
        <div className="card-body dessert-menu">
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

</div>
</div>
</div>

)
}
}
