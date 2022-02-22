import React from 'react';

const ListGroup = ({ items,
    textProperty, 
    valueProperty, 
    SelectedItem, 
    onItemSelect } ) => {
    return (
        <ul className="list-group">
            {items.map(item =>
             <li 
             key={item[valueProperty]} 
             onClick={() => onItemSelect(item)}
             className={item === SelectedItem ? 
             "list-group-item active" : "list-group-item"
             }>
            {item[textProperty]}
            </li>
             )}
        </ul>
    );
}
 
ListGroup.defaultProps = {
    valueProperty: "_id",
    textProperty: "name"
}

export default ListGroup;