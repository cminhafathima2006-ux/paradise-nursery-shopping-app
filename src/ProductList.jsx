import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate dynamic total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      description: 'Scientifically recognized for filtering indoor toxins and enriching room air quality.',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?w=600&auto=format&fit=crop&q=80',
          description: 'Produces oxygen at night and removes formaldehyde, benzene, and trichloroethylene.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484437-31820e39ec14?w=600&auto=format&fit=crop&q=80',
          description: 'Graceful cascading plant that filters carbon monoxide and household toxins effortlessly.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=600&auto=format&fit=crop&q=80',
          description: 'Features elegant white blooms while effectively breaking down airborne pollutants.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=80',
          description: 'Lush feathery fronds that boost indoor humidity and cleanse dry circulating air.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=600&auto=format&fit=crop&q=80',
          description: 'Broad waxy burgundy leaves that naturally absorb carbon monoxide and mold spores.',
          cost: '$22',
        },
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80',
          description: 'Known for its soothing medicinal gel, it purifies formaldehyde and benzene from air.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      description: 'Botanicals that release calming, natural herbal aromas to revitalize your living environment.',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=600&auto=format&fit=crop&q=80',
          description: 'Renowned for its soothing purple blossoms and calming scent that encourages sleep.',
          cost: '$16',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&auto=format&fit=crop&q=80',
          description: 'Exotic star-shaped blossoms that diffuse a sweet, intoxicating nighttime perfume.',
          cost: '$20',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=600&auto=format&fit=crop&q=80',
          description: 'Crisp pine-like aroma that enhances memory, alertness, and pairs well in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80',
          description: 'Refreshing aromatic herb that invigorates the senses and naturally repels insects.',
          cost: '$10',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1587593810117-6488390f384c?w=600&auto=format&fit=crop&q=80',
          description: 'Releases a delightful citrus-herbal fragrance that uplifts mood and reduces anxiety.',
          cost: '$12',
        },
        {
          name: 'Hyacinth',
          image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600&auto=format&fit=crop&q=80',
          description: 'Intense sweet floral fragrance from dense clusters of brightly colored blossoms.',
          cost: '$18',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      description: 'Durable, resilient plants that thrive on minimal attention—ideal for busy plant lovers.',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&auto=format&fit=crop&q=80',
          description: 'Virtually indestructible succulent that thrives in low light and irregular watering.',
          cost: '$24',
        },
        {
          name: 'Golden Pothos',
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600&auto=format&fit=crop&q=80',
          description: 'Hardy trailing vine with variegated heart leaves; excels in low-light environments.',
          cost: '$14',
        },
        {
          name: 'Jade Plant',
          image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?w=600&auto=format&fit=crop&q=80',
          description: 'Symbol of luck and prosperity featuring thick jade leaves with minimal water needs.',
          cost: '$15',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&auto=format&fit=crop&q=80',
          description: 'Extremely resilient foliage that tolerates neglect, temperature swings, and deep shade.',
          cost: '$25',
        },
        {
          name: 'Succulent Garden',
          image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&auto=format&fit=crop&q=80',
          description: 'Geometric assortment of drought-tolerant rosettes perfect for sunny window sills.',
          cost: '$18',
        },
        {
          name: 'Chinese Evergreen',
          image: 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?w=600&auto=format&fit=crop&q=80',
          description: 'Features lush patterned foliage that flourishes gracefully in low light settings.',
          cost: '$20',
        },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? plantsArray
      : plantsArray.filter((cat) => cat.category === selectedCategory);

  return (
    <div className="product-listing-page">
      {/* Dynamic Header / Navbar visible on both Product Listing and Cart pages */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand" onClick={handleHomeClick} role="button" tabIndex={0}>
            <span className="brand-leaf-icon">🌿</span>
            <div className="brand-text">
              <span className="brand-name">Paradise Nursery</span>
              <span className="brand-subtext">Where Green Dreams Blossom</span>
            </div>
          </div>

          <nav className="nav-links">
            <button
              id="nav-home"
              className="nav-link"
              onClick={handleHomeClick}
            >
              Home
            </button>
            <button
              id="nav-plants"
              className={`nav-link ${!showCart ? 'active' : ''}`}
              onClick={handlePlantsClick}
            >
              Plants
            </button>
            <button
              id="nav-cart"
              className={`nav-link cart-nav-link ${showCart ? 'active' : ''}`}
              onClick={handleCartClick}
            >
              <span>Cart</span>
              <div className="cart-icon-wrapper">
                <svg
                  className="cart-svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="cart_quantity_count">{totalQuantity}</span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="content-area">
        {showCart ? (
          <CartItem onContinueShopping={handleContinueShopping} />
        ) : (
          <div className="products-container">
            {/* Page Banner */}
            <section className="listing-banner">
              <span className="banner-pill">Handpicked Botanical Collection</span>
              <h1 className="banner-title">Bring Fresh Living Energy to Your Space</h1>
              <p className="banner-description">
                Explore our curated variety of healthy, farm-raised houseplants grouped into 
                specialized categories to match your lifestyle and aesthetic.
              </p>

              {/* Category Filter Pills */}
              <div className="category-filters">
                <button
                  className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('All')}
                >
                  All Plants ({plantsArray.reduce((acc, c) => acc + c.plants.length, 0)})
                </button>
                {plantsArray.map((cat) => (
                  <button
                    key={cat.category}
                    className={`filter-btn ${selectedCategory === cat.category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.category)}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </section>

            {/* Plant Categories & Cards */}
            <div className="categories-wrapper">
              {filteredCategories.map((categoryGroup) => (
                <section
                  className="category-section"
                  key={categoryGroup.category}
                  id={categoryGroup.category.toLowerCase().replace(/\s+/g, '-')}
                >
                  <div className="category-header">
                    <div className="category-title-wrap">
                      <h2 className="category-title">{categoryGroup.category}</h2>
                      <span className="category-badge">
                        {categoryGroup.plants.length} Varieties Available
                      </span>
                    </div>
                    <p className="category-description">{categoryGroup.description}</p>
                  </div>

                  <div className="plants-grid">
                    {categoryGroup.plants.map((plant) => {
                      const isAdded =
                        addedToCart[plant.name] ||
                        cartItems.some((item) => item.name === plant.name);

                      return (
                        <article className="product-card" key={plant.name}>
                          <div className="product-image-container">
                            <img
                              className="product-image"
                              src={plant.image}
                              alt={plant.name}
                              loading="lazy"
                            />
                            <div className="price-tag">{plant.cost}</div>
                          </div>

                          <div className="product-info">
                            <h3 className="product-title">{plant.name}</h3>
                            <p className="product-description">{plant.description}</p>
                            <div className="product-footer">
                              <span className="product-price">{plant.cost}</span>
                              <button
                                className={`product-button ${isAdded ? 'added' : ''}`}
                                onClick={() => handleAddToCart(plant)}
                                disabled={isAdded}
                                aria-label={isAdded ? `${plant.name} is added to cart` : `Add ${plant.name} to cart`}
                              >
                                {isAdded ? (
                                  <>
                                    <span className="btn-icon">✓</span> Added to Cart
                                  </>
                                ) : (
                                  <>
                                    <span className="btn-icon">+</span> Add to Cart
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductList;
