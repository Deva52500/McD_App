
const ItemCount = ({addOrder, selectedMenuItem}) => {

  const Add = () =>{
    //let selectMenu = document.querySelector('#name');
    //let menu = selectMenu.value;
    let itemCount = document.querySelector('#piece');
    let piece = itemCount.value; 
    addOrder({...selectedMenuItem, pieces:piece})
    piece=''
  }  

  return (
    <div>
        <div>
          <div className='form-control-count'> 
            <label>Piece:</label>
            <input type="number" id="piece" name="piece" step="1" min="1"/>
          </div>
        <br/>
        <button className="btn btn-primary" onClick={Add}>Add </button>
        </div>    
    </div>
  )
}

export default ItemCount
