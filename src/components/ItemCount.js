import React, { useState } from 'react';

const ItemCount = ({addOrder, selectedMenuItem}) => {

  const [piece, setPiece] = useState('');

  const handlePieceChange = (event) => {
    const value = event.target.value;
    if (value <= 0) {
      setPiece('');
    } else {
      setPiece(value);
    }
  };

  const handleAdd = () => {
    if (piece > 0) {
      addOrder({ ...selectedMenuItem, pieces: piece });
      setPiece('');
    }
  }; 

  return (
    <div>
        <div>
          <div className='form-control-count'> 
            <label>Piece:</label>
            <input   type="number"
            id="piece"
            name="piece"
            step="1"
            min="1"
            value={piece}
            onChange={handlePieceChange}
            />
          </div>
        <br/>
        <button className="btn btn-primary" onClick={handleAdd}>Add </button>
        </div>    
    </div>
  )
}

export default ItemCount
