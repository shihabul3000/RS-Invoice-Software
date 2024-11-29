import { useState } from "react";
import "./Invoice.css";

const Invoice = () => {
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [products, setProducts] = useState([
    { productName: "", color: "", imei: "", quantity: 1, unitPrice: 0 },
  ]);
  const [showSale, setShowSale] = useState(true);
  const [showOffer1, setShowOffer1] = useState(true);
  const [showOffer2, setShowOffer2] = useState(true);
  const [removeMode, setRemoveMode] = useState(false);

  const addProductRow = () => {
    setProducts([
      ...products,
      { productName: "", color: "", imei: "", quantity: 1, unitPrice: 0 },
    ]);
  };

  const removeSelectedProducts = () => {
    setProducts(products.filter((product) => !product.selected));
  };

  const updateProduct = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const calculateTotals = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((product) => {
      totalQuantity += product.quantity;
      totalPrice += product.quantity * product.unitPrice;
    });
    return { totalQuantity, totalPrice: totalPrice.toFixed(2) };
  };

  const { totalQuantity, totalPrice } = calculateTotals();

  const uniqueSalesOrderNo = `REQ_${new Date().toISOString().split("T")[0]}_${
    Math.floor(Math.random() * 10000) + 1
  }`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <header className="header">
        <h1>INVOICE</h1>
        <p>23/D/1 (1st Floor), Free School Street, Dhaka</p>
      </header>

      <section className="customer-details">
        <div>
          <p>
            <strong>Customer`s Name:</strong> Usa
          </p>
          <p>
            <strong>Mobile No:</strong> 17283333000
          </p>
          <p>
            <strong>Email:</strong> info@usabd.com
          </p>
          <p>
            <strong>Address:</strong> Motaleb Plaza, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <p>
            <strong>Invoice No.:</strong> 17
          </p>
          <p>
            <strong>Invoice Date:</strong>{" "}
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </p>
          <p>
            <strong>Sales Order No.:</strong> {uniqueSalesOrderNo}
          </p>
        </div>
      </section>

      <section className="filters">
        <label>
          <input
            type="checkbox"
            checked={showSale}
            onChange={(e) => setShowSale(e.target.checked)}
          />{" "}
          Show Sale
        </label>
        <label>
          <input
            type="checkbox"
            checked={showOffer1}
            onChange={(e) => setShowOffer1(e.target.checked)}
          />{" "}
          Show Offer 1
        </label>
        <label>
          <input
            type="checkbox"
            checked={showOffer2}
            onChange={(e) => setShowOffer2(e.target.checked)}
          />{" "}
          Show Offer 2
        </label>
      </section>

      <section className="table-section">
        <table className="invoice-table">
          <thead>
            <tr>
              {removeMode && <th>Select</th>}
              <th>Sl #</th>
              <th>Product Name</th>
              <th>Color</th>
              <th>IMEI</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              {showSale && <th>Sale</th>}
              {showOffer1 && <th>Offer 1</th>}
              {showOffer2 && <th>Offer 2</th>}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                {removeMode && (
                  <td>
                    <input
                      type="checkbox"
                      checked={product.selected || false}
                      onChange={(e) =>
                        updateProduct(index, "selected", e.target.checked)
                      }
                    />
                  </td>
                )}
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    value={product.productName}
                    onChange={(e) =>
                      updateProduct(index, "productName", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={product.color}
                    onChange={(e) =>
                      updateProduct(index, "color", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={product.imei}
                    onChange={(e) =>
                      updateProduct(index, "imei", e.target.value)
                    }
                  />
                </td>
                <td>
                  <select
                    value={product.quantity}
                    onChange={(e) =>
                      updateProduct(index, "quantity", parseInt(e.target.value))
                    }
                  >
                    {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={product.unitPrice}
                    onChange={(e) =>
                      updateProduct(index, "unitPrice", parseFloat(e.target.value))
                    }
                  />
                </td>
                {showSale && <td>Sale Details</td>}
                {showOffer1 && <td>Offer 1 Details</td>}
                {showOffer2 && <td>Offer 2 Details</td>}
                <td>{(product.quantity * product.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="totals">
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
        <button className="add-row-btn" onClick={addProductRow}>
          Add Product
        </button>
        <button
          className="remove-row-btn"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            if (removeMode) removeSelectedProducts();
            setRemoveMode(!removeMode);
          }}
        >
          {removeMode ? "Remove Selected" : "Remove Product"}
        </button>
        <button className="print-btn" onClick={handlePrint}>
          Print Summary
        </button>
      </section>
    </div>
  );
};

export default Invoice;
