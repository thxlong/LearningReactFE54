import React from "react";

// React function component nhận props là tham số đầu vào của hàm component     
export default function ProductRFC(props) {
  // ES5
  //   let name = props.name;
  //   let price = props.price;

  let { name, price } = props;
  return (
    <div>
      <div classname="card text-white bg-primary">
        <img classname="card-img-top" src="https://picsum.photos/200/200" alt />
        <div classname="card-body">
          <h4 classname="card-title"> {name}</h4>
          <p classname="card-text">Price: {price}</p>
        </div>
      </div>
    </div>
  );
}
