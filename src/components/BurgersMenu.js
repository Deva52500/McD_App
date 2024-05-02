
const BurgersMenu = ({menuList, addMenu}) => {

const add = (menu) =>{
  addMenu({menu})
}  
  return (
    
    <div className="menu">
      <h5>Menu</h5>
      <div className="menuList">
      {menuList.map((menu) =>(
        <div className="card" key={menu.id} style={{width: "12rem"}}>
          <img src={menu.img} className="card-img-top" alt="Burger, Fries and Icecream"/>
          <div className="card-body">
            <h5 id="name" className="card-title"> {menu.name}</h5>
            <p className="card-text" >{menu.ingridients}</p>
            <p className="card-text" >Price: {menu.price}</p>
            <button value={menu.name} className="btn btn-primary" onClick={e =>add(e.target.value)}>Add </button>
          </div>
        </div>
        
      ))}  
      </div>

        
    </div>    
  )
}

export default BurgersMenu
