import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Form = () => {
  const [state, setState] = useState({ name: "", qty: "" });
  const [cart, setCart] = useState([]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newProduct = { name: state.name, qty: state.qty };
    setCart([...cart, newProduct]);

    // Clear the input fields after adding the product
    setState({ name: "", qty: "" });
  };

  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <section>
        <h2>Your Shopping Cart</h2>
        <div className="card">
          <table>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>
                    <Button
                      label="Delete"
                      onClick={() => deleteItem(index)}
                      severity="danger"
                      className="mr-2 mb-2"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2> Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <InputText
            placeholder="Enter Item Name"
            name="name"
            value={state.name}
            onChange={handleChange}
            className="mb-4"
          />
          <br /> <br />
          <InputText
            placeholder="Enter Qty"
            onChange={handleChange}
            name="qty"
            value={state.qty}
            className="mb-4"
          />
          <br /> <br />
          <Button label="Add To Cart" className="bg-black-400" type="submit" />
        </form>
      </section>
    </>
  );
};

export default Form;
