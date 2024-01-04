import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemCount from "./components/ItemCount";
import TotalOrder from "./components/TotalOrder";
import img1 from './assets/pictures/Burger1.jpg';
import img2 from './assets/pictures/Burger2.jpg';
import img3 from './assets/pictures/Burger3.jpg';
import img4 from './assets/pictures/Burger4.jpg';


import { useState } from 'react'


function App() {
  const [selectedMenu, setSelectedMenu]= useState ({})
  const [showPieceCount, setShowPieceCount]= useState(false)
  const [showTotalOrder, setShowTotalOrder]= useState(false)
  const [showMenu, setShowMenu]= useState(true)
  const [orderList, setOrderList]= useState([])
  const [menuList, setMenuList]= useState([
    {
      id:1,
      img: img1,
      name: 'Double Cheese Burger',
      ingridients: 'Beef, cheese, sauce and pickle'    
    },
    
    {
      id:2,
      img: img2,
      name: 'Cheese Burger',
      ingridients: 'Beef, cheese, sauce and pickle'    
    },

    {
      id:3,
      img: img3,
      name: 'Big Mac Burger',
      ingridients: 'Beef, cheese, onion, salad, sauce and pickle'    
    },
    
    {
      id:4,
      img: img4,
      name: 'Big Tasty Burger',
      ingridients: 'Beef, cheese, onion, tomato, salad, sauce and bacon'    
    }

])


const onAddMenu = (menu) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const addOrder= {id, ...menu}
  console.log("Add order Menu in App:", addOrder )
  setSelectedMenu(addOrder)
  setShowPieceCount(!showPieceCount)
  setShowMenu(!showMenu)
}

const onAddOrder = (orderCount) =>{
  console.log("Order Places",orderCount)
  console.log("Total Order",orderCount)
  setOrderList((prevList)=> [...prevList, orderCount]);
  setShowTotalOrder(!showTotalOrder)
  console.log("New List", orderList)
  setShowMenu(!showMenu)
  setShowPieceCount(!showPieceCount)
  setShowTotalOrder(true)
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
      </div>
      <div className="row">
        <div className="col-6">
          {showMenu && <Menu menuList={menuList} addMenu= {onAddMenu}/>}
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
