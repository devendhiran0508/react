import React, {useState} from 'react';

function ChangeEvent(){

    const [name,setname]=useState("Guest");
    const [quantity, setQuantity]=useState(0);
    const [comment, setComment]=useState("");
    const [payment, setPayment]=useState("");
    const [shipping, setShipping]=useState("");

    function handleNameChange(event){
        setname(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value);
    }
    function handleComment(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleShipping(event){
        setShipping(event.target.value);
    }


    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantity} />
            <p>Quantity: {quantity}</p>
            <textarea placeholder='comment please' onChange={handleComment}></textarea>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="card">Card</option>
                <option value="upi">UPI</option>
                <option value="cash">CASH</option>
            </select>
            <p>Payment method: {payment}</p>
            <label>
                <input type="radio" value="Pick up" checked={shipping==="Pick up"} onChange={handleShipping} />Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShipping}/>Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default ChangeEvent