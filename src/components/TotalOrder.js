import { FaTimes } from 'react-icons/fa'

const TotalOrder = ({totalOrder, onDelete}) => {

    const alert = () => {
      window.alert("Order Placed");
      window.location.reload();
    };
  
  return (
    <div>
       <h2>Orders</h2>  
      {totalOrder.map((item)=>(
        <div className="order" key={item.id}>
          <h4>             
             {item.menu}
          </h4>
          <h6>   
             {item.pieces}<FaTimes 
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(item.id)}
            />
          </h6>

          </div>
        ))}
      {totalOrder.length > 0 && ( 
        <button className="btn btn-primary" onClick={alert}>
          Order
        </button>
      )}        
    </div>
  )
}

export default TotalOrder
