import React from 'react';

function ProductRow(props) {
  return (
    <div>
        <tr>
            {props.stocked 
            ? <td>{props.name}</td>
            : <td style={{color: "red"}}>{props.name}</td>
            }
            <td>{props.price}</td>
        </tr>
    </div>
  );
}

export default ProductRow;