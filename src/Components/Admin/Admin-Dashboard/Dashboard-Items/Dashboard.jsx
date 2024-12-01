import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FiMoreHorizontal } from 'react-icons/fi'; // For three-dot menus
import { FaHeart, FaBox, FaShoppingBag, FaUser } from 'react-icons/fa'; // For icons

function Dashboard() {
    // Chart data for Reports
    const reportData = [
        { time: '10am', sales: 30 },
        { time: '11am', sales: 50 },
        { time: '12am', sales: 40 },
        { time: '01am', sales: 80 },
        { time: '02am', sales: 20 },
        { time: '03am', sales: 60 },
        { time: '04am', sales: 40 },
        { time: '05am', sales: 70 },
    ];

    // Analytics data for the pie chart
    const analyticsData = [
        { name: 'Sale', value: 80, color: '#FB7181' },
        { name: 'Distribute', value: 15, color: '#34C38F' },
        { name: 'Return', value: 5, color: '#6F42C1' },
    ];

    // Top-selling products
    const products = [
        {
            name: 'NIKE Shoes Black Pattern',
            price: '$87',
            stars: 5,
            image: 'path/to/nike-shoes.jpg', // Replace with actual image paths
        },
        {
            name: 'iPhone 12',
            price: '$987',
            stars: 4.5,
            image: 'path/to/iphone12.jpg',
        },
    ];

    // Recent Orders
    const recentOrders = [
        {
            id: '#876354',
            product: 'Camera Lens',
            price: '$178',
            quantity: 325,
            total: '$1,46,650',
            image: 'path/to/camera-lens.jpg',
        },
        {
            id: '#876368',
            product: 'Black Sleep Dress',
            price: '$14',
            quantity: 53,
            total: '$46,660',
            image: 'path/to/sleep-dress.jpg',
        },
        {
            id: '#876412',
            product: 'Argan Oil',
            price: '$21',
            quantity: 78,
            total: '$3,46,676',
            image: 'path/to/argan-oil.jpg',
        },
        {
            id: '#876621',
            product: 'EAU DE Parfum',
            price: '$32',
            quantity: 98,
            total: '$3,46,981',
            image: 'path/to/parfum.jpg',
        },
    ];

    return (
        <div className="dashboard">
            <h1 className="title">Dashboard</h1>

            {/* Cards */}
            <div className="cards">
                <div className="card">
                    <FaHeart className="icon" />
                    <span className="cardNumber">178+</span>
                    <span className="cardName">Save Products</span>
                </div>
                <div className="card">
                    <FaBox className="icon" />
                    <span className="cardNumber">20+</span>
                    <span className="cardName">Stock Products</span>
                </div>
                <div className="card">
                    <FaShoppingBag className="icon" />
                    <span className="cardNumber">190+</span>
                    <span className="cardName">Sales Products</span>
                </div>
                <div className="card">
                    <FaUser className="icon" />
                    <span className="cardNumber">12+</span>
                    <span className="cardName">Unite Price Selection</span>
                </div>
            </div>

            <div className="content">
                {/* Reports Section */}
                <div className="reports">
                    <div className="header">
                        <h2>Reports</h2>
                        <FiMoreHorizontal className="menu-icon" />
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={reportData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="sales" stroke="#FB7181" strokeWidth={2} dot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Analytics Section */}
                <div className="analytics">
                    <div className="header">
                        <h2>Analytics</h2>
                        <FiMoreHorizontal className="menu-icon" />
                    </div>
                    <PieChart width={250} height={250}>
                        <Pie
                            data={analyticsData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {analyticsData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className="legend">
                        {analyticsData.map(item => (
                            <div className="legend-item" key={item.name}>
                                <span className="color-box" style={{ backgroundColor: item.color }}></span>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="content">
                {/* Recent Orders */}
                <div className="orders">
                    <div className="header">
                        <h2>Recent Orders</h2>
                        <FiMoreHorizontal className="menu-icon" />
                    </div>
                    <table className="orderTable">
                        <thead>
                            <tr>
                                <th>Tracking No</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={order.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                                    <td>{order.id}</td>
                                    <td>
                                        <img src={order.image} alt={order.product} className="product-image" />
                                        {order.product}
                                    </td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Top-Selling Products */}
                <div className="products">
                    <div className="header">
                        <h2>Top Selling Products</h2>
                        <FiMoreHorizontal className="menu-icon" />
                    </div>
                    <ul>
                        {products.map(product => (
                            <li key={product.name}>
                                <img src={product.image} alt={product.name} className="product-image" />
                                <div className="product-details">
                                    <span className="product-name">{product.name}</span>
                                    <span className="stars">{'★'.repeat(product.stars)}</span>
                                    <span className="price">{product.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
