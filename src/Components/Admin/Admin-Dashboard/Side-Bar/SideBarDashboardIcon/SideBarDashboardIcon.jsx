import './SideBarDashboardIcon.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBarDashboardIcon = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const [showSale, setShowSale] = useState(false);
  const [showOffer1, setShowOffer1] = useState(false);
  const [showOffer2, setShowOffer2] = useState(false);
  const [showRemoveColumn, setShowRemoveColumn] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', unitPrice: 0, quantity: 0 },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
      name: '',
      unitPrice: 0,
      quantity: 0,
    };
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (e, id) => {
    const value = e.target.value;
    const validValue = value === '' ? 0 : parseInt(value) || 0;
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: validValue } : product
    );
    setProducts(updatedProducts);
  };

  const handleUnitPriceChange = (e, id) => {
    const value = Math.max(0, parseFloat(e.target.value) || 0);
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, unitPrice: value } : product
    );
    setProducts(updatedProducts);
  };

  const handleProductNameChange = (e, id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, name: e.target.value } : product
    );
    setProducts(updatedProducts);
  };

  const toggleRemoveColumn = () => {
    setShowRemoveColumn(!showRemoveColumn);
  };

  const handleOfferChange = (offer) => {
    if (offer === 'sale') {
      setShowSale(!showSale);
    } else if (offer === 'offer1') {
      setShowOffer1(!showOffer1);
    } else if (offer === 'offer2') {
      setShowOffer2(!showOffer2);
    }
  };

  const openSummaryReport = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Invoice Summary</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .summary { max-width: 800px; margin: 0 auto; }
            h2 { text-align: center; }
            .invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .invoice-table th, .invoice-table td { padding: 8px 12px; border: 1px solid #ddd; }
            .invoice-table th { background-color: #f4f4f4; text-align: left; }
            .total { font-size: 18px; font-weight: bold; }
            .print-btn { display: block; width: 200px; margin: 20px auto; padding: 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer; }
            .print-btn:hover { background-color: #45a049; }
          </style>
        </head>
        <body>
          <div class="summary">
            <h2>Invoice Summary</h2>
            <table class="invoice-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  ${showSale ? '<th>Sale</th>' : ''}
                  ${showOffer1 ? '<th>Offer 1</th>' : ''}
                  ${showOffer2 ? '<th>Offer 2</th>' : ''}
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${products
                  .map(
                    (product) => `
                    <tr>
                      <td>${product.name}</td>
                      <td>${product.unitPrice}</td>
                      <td>${product.quantity}</td>
                      ${showSale ? '<td>Sale Content</td>' : ''}
                      ${showOffer1 ? '<td>Offer 1 Content</td>' : ''}
                      ${showOffer2 ? '<td>Offer 2 Content</td>' : ''}
                      <td>${(product.unitPrice * product.quantity).toFixed(2)}</td>
                    </tr>`
                  )
                  .join('')}
              </tbody>
            </table>

            <p class="total">Total Quantity: ${totalQuantity}</p>
            <p class="total">Total Price: $${totalPrice.toFixed(2)}</p>

            <button class="print-btn" onclick="window.print()">Print Invoice</button>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <>
      <div className="dashboard">
        <button className="backButton" onClick={handleBack}>
          Back
        </button>
      </div>

      <div className="container">
        <header className="header">
          <h1>INVOICE</h1>
        </header>

        <section className="filters">
          <button className="dropdown-btn">
            Show Offers
            <div className="dropdown-content">
              <button onClick={() => handleOfferChange('sale')}>Show Sale</button>
              <button onClick={() => handleOfferChange('offer1')}>Show Offer 1</button>
              <button onClick={() => handleOfferChange('offer2')}>Show Offer 2</button>
            </div>
          </button>
          <button className="remove-btn" onClick={toggleRemoveColumn}>
            Remove Product
          </button>
        </section>

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
                  <td>
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) => handleProductNameChange(e, product.id)}
                      placeholder="Enter product name"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={product.unitPrice === 0 ? '' : product.unitPrice}
                      placeholder="0"
                      onChange={(e) => handleUnitPriceChange(e, product.id)}
                    />
                  </td>
                  <td>
                  <input
                      type="number"
                      value={product.quantity === 0 ? '' : product.quantity}
                      placeholder="0"
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
          <button className="add-product-btn" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>

        <section className="summary-section">
          <h2>Total</h2>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </section>

        <div className="action-buttons">
          <button className="summary-btn" onClick={openSummaryReport}>
            View Summary Report
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBarDashboardIcon;

