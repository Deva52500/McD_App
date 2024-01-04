
const Menu = ({menuList, addMenu}) => {

const add = (menu) =>{
  //let selectMenu = document.querySelector('#name');
  //let menu = selectMenu.value;
   
  addMenu({menu})
}  
  return (
    
    <div className="menu">
      <h5>Menu</h5>
      
      {menuList.map((menu) =>(
        <div className="card" key={menu.id} style={{width: "12rem"}}>
          <img src={menu.img} className="card-img-top" alt="Burger, Fries and Icecream"/>
          <div className="card-body">
            <h5 id="name" className="card-title">{menu.name}</h5>
            <p className="card-text" >{menu.ingridients}</p>
            <button value={menu.name} className="btn btn-primary" onClick={e =>add(e.target.value)}>Add </button>
          </div>
        </div>
        
      ))}  
      

        
    </div>    
  )
}

export default Menu
