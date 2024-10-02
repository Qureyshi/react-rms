import React, { useState } from 'react';
import './Menu.css'; // Make sure to include your CSS styles
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';

const menuData = {
  appetizers: [
    { name: 'Deviled eggs', price: 5.99, imagesrc: "https://static01.nyt.com/images/2021/10/15/dining/aw-classic-deviled-eggs/aw-classic-deviled-eggs-square640.jpg" },
    { name: 'Garlic Bread', price: 4.99, imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOQY51mHZNUxClEfPmhIPByh_oa-XHHoMDw&s" },
  ],
  mainCourse: [
    { name: 'Grilled Chicken', price: 12.99, imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOQY51mHZNUxClEfPmhIPByh_oa-XHHoMDw&s" },
    { name: 'Beef Steak', price: 15.99, imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOQY51mHZNUxClEfPmhIPByh_oa-XHHoMDw&s" },
    { name: 'Vegetarian Pasta', price: 10.99, imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOQY51mHZNUxClEfPmhIPByh_oa-XHHoMDw&s" },
  ],
  desserts: [
    { name: 'Cheesecake', price: 6.99, imagesrc: "https://www.allrecipes.com/thmb/y-S61IJkYyCUjTMGYqkaoJGwBrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-228515-simple-creme-brulee-dessert-dmfs-4x3-821623e7a86548eeb89370ac23d5f251.jpg" },
    { name: 'Chocolate Lava Cake', price: 7.99, imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL0IBxMNhuQvi-fVAd7SBrg5QCx4c8LEyGg&s" },
  ],
  drinks: [
    { name: 'Lemonade', price: 3.99, imagesrc: "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2021/04/Lemonade-2-2.jpg?resize=740%2C792&ssl=1" },
    { name: 'Iced Tea', price: 3.49, imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAlwSaIh7fUD8R-YF-7s0VKs-EU3gqLMp1A&s" },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(orderItem => orderItem.name === item.name);
      if (existingItem) {
        return prevOrder.map(orderItem =>
          orderItem.name === item.name
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const renderMenuItems = (category) => {
    return menuData[category].map((item, index) => (
      <div className="col-12 col-xl-4" key={index}>
        <div className="rounded bg-light my-3 p-2">
          <img src={item.imagesrc} alt={item.name} style={{ width: '100%', height: 'auto' }} />
          <span className='d-block m-2'>{item.name}</span>
          <span className='d-block m-2'>${item.price.toFixed(2)}</span>
          <button 
            className='btn btn-danger mb-3'
            onClick={() => addToOrder(item)}
          >
            Order Now
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <MyNavbar />
      <div className='container-fluid p-5 orders'>
        <div className='p-5 text-center text-danger'>
          <h1>Orders</h1>
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-xl-2 col-12">
            <div className="sidebar p-3 rounded">
              <h2>Menu</h2>
              <div className="categories">
                {Object.keys(menuData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? 'active' : ''}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-12 text-center">
            <h2 className='p-2'>{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</h2>
            <div className="container">
              <div className='row'>
                {renderMenuItems(activeCategory)}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12">
            <div className="bg-light p-3">
              <h4 className='bg-dark text-light p-2'>My Order</h4>
              <ul className='list-group'>
                {order.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    {item.name} {item.quantity > 1 && `(${item.quantity})`} - ${(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </li>
                ))}
              </ul>
              <h6 className='my-3'>Total: ${calculateTotal()}</h6>
              <a href='#' className='btn btn-danger'>Confirm Order</a>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default Menu;
