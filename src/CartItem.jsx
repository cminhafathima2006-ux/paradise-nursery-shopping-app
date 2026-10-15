import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const unitPrice = parseFloat(item.cost.toString().replace('$', '')) || 0;
      total += unitPrice * item.quantity;
    });
    return total.toFixed(2);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    const unitPrice = parseFloat(item.cost.toString().replace('$', '')) || 0;
    return (unitPrice * item.quantity).toFixed(2);
  };

  // Calculate total number of items in the cart
  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckout = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    alert('Coming Soon! Checkout functionality will be available in future updates.');
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <div className="cart-header-section">
        <h2 className="cart-main-heading">Your Plant Sanctuary Cart</h2>
        <div className="cart-summary-badge">
          <span>🌿 Total Plants in Cart: <strong>{calculateTotalItems()}</strong></span>
          <span className="summary-separator">•</span>
          <span>Grand Total: <strong>${calculateTotalAmount()}</strong></span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-view">
          <div className="empty-cart-icon">🌱</div>
          <h3>Your cart is feeling a bit empty!</h3>
          <p>Bring vitality and fresh oxygen into your home with our handpicked houseplants.</p>
          <button 
            id="continue-shopping-empty"
            className="continue_shopping_btn continue-shopping-button" 
            onClick={handleContinueShopping}
          >
            Explore Houseplants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <div className="cart-item-image-wrapper">
                  <img 
                    className="cart-item-image" 
                    src={item.image} 
                    alt={item.name} 
                    loading="lazy"
                  />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-unit-cost">
                    Unit Price: <span className="cart-item-cost">{item.cost}</span>
                  </div>
                  
                  <div className="cart-item-quantity-control">
                    <span className="quantity-label">Quantity:</span>
                    <div className="quantity-btn-group">
                      <button
                        className="cart-item-button cart-item-button-dec"
                        onClick={() => handleDecrement(item)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="cart-item-quantity-value">{item.quantity}</span>
                      <button
                        className="cart-item-button cart-item-button-inc"
                        onClick={() => handleIncrement(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal">
                    Subtotal: <strong>${calculateTotalCost(item)}</strong>
                  </div>
                </div>

                <div className="cart-item-actions">
                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                    aria-label={`Delete ${item.name} from cart`}
                  >
                    <span className="delete-icon">🗑️</span>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-checkout-section">
            <div className="cart-totals-card">
              <div className="totals-row">
                <span>Total Items:</span>
                <span>{calculateTotalItems()} plants</span>
              </div>
              <div className="totals-row grand-total">
                <span>Total Cart Amount:</span>
                <span className="total_cart_amount">${calculateTotalAmount()}</span>
              </div>
            </div>

            <div className="cart-navigation-buttons">
              <button
                id="continue-shopping-btn"
                className="continue_shopping_btn continue-shopping-button"
                onClick={handleContinueShopping}
              >
                ← Continue Shopping
              </button>
              <button
                id="checkout-btn"
                className="checkout_btn checkout-button"
                onClick={handleCheckout}
              >
                Proceed to Checkout →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
