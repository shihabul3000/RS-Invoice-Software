import { useState, useEffect } from "react";
import "./Invoice.css";

const Invoice = () => {
  const [showSale, setShowSale] = useState(false);
  const [showOffer1, setShowOffer1] = useState(false);
  const [showOffer2, setShowOffer2] = useState(false);
  const [showRemoveColumn, setShowRemoveColumn] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", unitPrice: 10, quantity: 1 },
  ]);
  const [totalPrice, setTotalPrice] = useState(10);
  const [totalQuantity, setTotalQuantity] = useState(1);

  // Automatically calculate totals whenever 'products' changes
  useEffect(() => {
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((product) => {
      totalQuantity += parseInt(product.quantity) || 0;
      totalPrice += parseFloat(product.unitPrice) * (parseInt(product.quantity) || 0);
    });
    setTotalQuantity(totalQuantity);
    setTotalPrice(totalPrice);
  }, [products]);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      unitPrice: 10,
      quantity: 1,
    };
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (e, id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: parseInt(e.target.value) || 0 }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleUnitPriceChange = (e, id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, unitPrice: parseFloat(e.target.value) || 0 }
        : product
    );
    setProducts(updatedProducts);
  };

  const toggleRemoveColumn = () => {
    setShowRemoveColumn(!showRemoveColumn);
  };

  const handleOfferChange = (offer) => {
    if (offer === "sale") {
      setShowSale(!showSale);
    } else if (offer === "offer1") {
      setShowOffer1(!showOffer1);
    } else if (offer === "offer2") {
      setShowOffer2(!showOffer2);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>INVOICE</h1>
        <p>23/D/1 (1st Floor), Free School Street, Dhaka</p>
      </header>

      <section className="customer-details">
        <div>
          <p><strong>Customer`s Name:</strong> Usa</p>
          <p><strong>Mobile No:</strong> 17283333000</p>
          <p><strong>Email:</strong> info@usabd.com</p>
          <p><strong>Address:</strong> Motaleb Plaza, Dhaka, Bangladesh</p>
        </div>
        <div>
          <p><strong>Invoice No.:</strong> 17</p>
          <p><strong>Invoice Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Sales Order No.:</strong> REQ_2018_08_09</p>
          <p><strong>Entry Date:</strong> 12-Aug-18</p>
        </div>
      </section>

      <section className="filters">
        <button className="dropdown-btn">
          Show Offers
          <div className="dropdown-content">
            <button onClick={() => handleOfferChange("sale")}>Show Sale</button>
            <button onClick={() => handleOfferChange("offer1")}>Show Offer 1</button>
            <button onClick={() => handleOfferChange("offer2")}>Show Offer 2</button>
          </div>
        </button>
        <button className="remove-btn" onClick={toggleRemoveColumn}>Remove Product</button>
      </section>

      {/* Table Content */}
      <div className="table-section">
        <table className="invoice-table">
          <thead>
            <tr>
              {showRemoveColumn && <th>Remove</th>}
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              {showSale && <th>Sale</th>}
              {showOffer1 && <th>Offer 1</th>}
              {showOffer2 && <th>Offer 2</th>}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {showRemoveColumn && (
                  <td>
                    <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                  </td>
                )}
                <td>{product.name}</td>
                <td>
                  <input
                    type="number"
                    value={product.unitPrice}
                    onChange={(e) => handleUnitPriceChange(e, product.id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(e, product.id)}
                  />
                </td>
                {showSale && <td>Sale Content</td>}
                {showOffer1 && <td>Offer 1 Content</td>}
                {showOffer2 && <td>Offer 2 Content</td>}
                <td>{(product.unitPrice * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="totals">
          <div className="total-quantity">
            <strong>Total Quantity: </strong>{totalQuantity}
          </div>
          <div className="total-price">
            <strong>Total Price: </strong>${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>

      <button className="add-row-btn" onClick={handleAddProduct}>
        Add Product
      </button>
      <button className="summary-btn">View Summary Report</button>
    </div>
  );
};

export default Invoice;
