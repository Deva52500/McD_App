import Header from "./components/Header";
import BurgersMenu from "./components/BurgersMenu";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import DrinksMenu from "./components/DrinksMenu";
import TotalOrder from "./components/TotalOrder";

import img1 from './assets/pictures/Burger1.jpg';
import img2 from './assets/pictures/Burger2.jpg';
import img3 from './assets/pictures/Burger3.jpg';
import img4 from './assets/pictures/Burger4.jpg';

import img5 from './assets/pictures/coke.jpg';
import img6 from './assets/pictures/sprit.jpg';
import img7 from './assets/pictures/fanta.jpg';
import img8 from './assets/pictures/chocolate.jpg';
import img9 from './assets/pictures/vanila.jpg';

import { useState } from 'react'

function App() {

  const [showBurgersMenu, setShowBurgersMenu] = useState(true);
  const [selectedMenu, setSelectedMenu]= useState ({})
  const [showPieceCount, setShowPieceCount]= useState(false)
  const [showTotalOrder, setShowTotalOrder]= useState(false)
  let [showMenu, setShowMenu]= useState(true)
  let [showNav, setShowNav]= useState(true)
  let [showDrinksMenu, setShowDrinksMenu]= useState(false)
  const [orderList, setOrderList]= useState([])
  const [menuList, setMenuList]= useState([
    {
      id:1,
      img: img1,
      name: 'Double Cheese Burger',
      ingridients: 'Beef, cheese, sauce and pickle',
      price : '4 €'    
    },
    
    {
      id:2,
      img: img2,
      name: 'Cheese Burger',
      ingridients: 'Beef, cheese, sauce and pickle',
      price : '3 €'        
    },

    {
      id:3,
      img: img3,
      name: 'Big Mac Burger',
      ingridients: 'Beef, cheese, onion, salad, sauce and pickle',
      price : '5 €'        
    },
    
    {
      id:4,
      img: img4,
      name: 'Big Tasty Burger',
      ingridients: 'Beef, cheese, onion, tomato, salad, sauce and bacon',
      price : '7 €'        
    }
    
])


const [drinksMenuList, setDrinksMenuList]= useState([
  {
    id:111,
    img: img5,
    name: 'Coke',
    price : '2 €'        
  },
  
  {
    id:222,
    img: img6,
    name: 'Sprit',
    price : '2 €'       
  },

  {
    id:222,
    img: img7,
    name: 'Fanta',
    price : '2 €'       
  },
  
  {
    id:222,
    img: img8,
    name: 'Chocolate',
    price : '4 €'       
  },

  {
    id:222,
    img: img9,
    name: 'Vanilla',
    price : '4 €'       
  },
])

const toggleBurgersMenu = () => {
  setShowBurgersMenu(true);
  setShowDrinksMenu(false);
}

const toggleDrinksMenu = () => {
  setShowBurgersMenu(false);
  setShowDrinksMenu(true);
}

const onAddMenu = (menu) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const addOrder= {id, ...menu}
  setSelectedMenu(addOrder)
  setShowPieceCount(!showPieceCount)
  setShowBurgersMenu(!showBurgersMenu)
  setShowNav(false);
}

const onAddDrinksMenu = (menu) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const addOrder= {id, ...menu}
  setSelectedMenu(addOrder)
  setShowPieceCount(!showPieceCount)
  setShowDrinksMenu(!showDrinksMenu)
  setShowNav(!showNav)
}

const onAddOrder = (orderCount) =>{
  setOrderList((prevList)=> [...prevList, orderCount]);
  setShowTotalOrder(!showTotalOrder)
  setShowPieceCount(!showPieceCount)
  setShowTotalOrder(true)
  setShowNav(true);  
}

//Delete Order
const deleteOrder = (id) =>{
  setOrderList(orderList.filter((order) => order.id !==id))
}
 
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <Header /> 
        </div>
        <div className="col-12">
        {showNav && <NavBar toggleDrinksMenu={toggleDrinksMenu} toggleBurgersMenu={toggleBurgersMenu} />}
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {showBurgersMenu && <BurgersMenu menuList={menuList} addMenu= {onAddMenu}/>}
          {showDrinksMenu && <DrinksMenu drinksMenuList={drinksMenuList} addDrinksMenu= {onAddDrinksMenu}/>}
          {showPieceCount && <ItemCount selectedMenuItem = {selectedMenu} addOrder={onAddOrder}/>}
        </div>
        <div className="col-6">
          {showTotalOrder && <TotalOrder totalOrder={orderList} onDelete={deleteOrder} />} 
        </div>
      </div>
          
    </div>
  );
}

export default App;
