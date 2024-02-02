import React from "react";
import ItemList from "./itemList";  // Rename itemList to ItemList (convention is to use PascalCase for components)

const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <main>
      <div className="center">
        {items.length ? (
          <ItemList items={items} handleChange={handleChange} handleDelete={handleDelete} />
        ) : (
          <p>Your List is Empty</p>
        )}
      </div>
    </main>
  );
};

export default Content;
