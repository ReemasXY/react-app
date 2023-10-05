import React from "react";

export default function ListGroup() {
  let items = ["Kathmandu", "Bhaktapur", "Lalitpur", "Sindhuli", "Nuwakot"];
  //   items = [];
  const liOfItems = items.map((item) => {
    return (
      <li className="list-group-item" key={item}>
        {item}
      </li>
    );
  });
  return (
    <>
      <div className="container">
        <h1>List Group</h1>
        {items.length === 0 && <div> No items found</div>}
        <ul className="list-group">{liOfItems}</ul>
      </div>
    </>
  );
}
