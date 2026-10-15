# Paradise Nursery Shopping Application

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-purple.svg)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)

An elegant, modern e-commerce web application for **Paradise Nursery**, where plant lovers can browse a diverse collection of indoor houseplants, filter by categories, add items to a dynamic shopping cart, manage quantities, and review order totals.

Developed as the final project for the **Developing Front-End Apps with React** course on Coursera.

---

## 🌿 Application Overview

Paradise Nursery is designed to bring greenery, tranquility, and clean air into every living space. The application is built with React, Redux Toolkit for centralized state management, and modern responsive CSS with glassmorphism aesthetics.

The application features three main views:
1. **Landing Page**: Immersive botanical hero view with the company branding, background image, company mission overview, and a "Get Started" call-to-action button.
2. **Product Listing Page**: Rich catalog showcasing 18 unique houseplants grouped into 3 distinct categories with dynamic "Add to Cart" functionality and button state tracking.
3. **Shopping Cart Page**: Comprehensive cart view displaying unit prices, individual item subtotals, quantity increase/decrease buttons, item removal, grand total calculation, continue shopping navigation, and checkout confirmation.

---

## ✨ Features & Rubric Requirements

### 1. Landing Page (`App.jsx`, `App.css`, `AboutUs.jsx`)
- **Background Image**: Full-screen botanical nursery background with linear gradient overlay defined in `App.css`.
- **Company Branding**: Prominent display of the company name **Paradise Nursery** and inspiring tagline.
- **About Us Section**: Detailed background story on company history, organic care philosophy, and air purification benefits.
- **Get Started Button**: Interactive button that smoothly transitions the user from the landing page to the product listing catalog.

### 2. Product Listing Page (`ProductList.jsx`, `ProductList.css`)
- **Diverse Plant Catalog**: 18 unique houseplants organized into 3 distinct categories (6 plants per category):
  - *Air Purifying Plants*: Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera.
  - *Aromatic Fragrant Plants*: Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Hyacinth.
  - *Low Maintenance Plants*: ZZ Plant, Golden Pothos, Jade Plant, Cast Iron Plant, Succulent Garden, Chinese Evergreen.
- **Plant Details**: Every plant displays a high-resolution thumbnail image, botanical name, description, and price tag.
- **Add to Cart & Button Disabling**: Clicking "Add to Cart" dispatches the plant to the Redux cart slice and disables the button with an updated state ("✓ Added to Cart").
- **Dynamic Header / Navbar**:
  - Visible across both the Product Listing and Shopping Cart pages.
  - Includes links to navigate between **Home**, **Plants**, and **Cart**.
  - Dynamic shopping cart badge displaying the total count of items in real time.

### 3. Shopping Cart Page (`CartItem.jsx`, `CartItem.css`)
- **Prominent Totals**: Displays both the total count of plants in the cart and the grand total cost (`calculateTotalAmount()`).
- **Detailed Item Breakdown**: Each plant in the cart displays its thumbnail, name, unit price, quantity, and individual subtotal (`calculateTotalCost(item)`).
- **Quantity Controls**:
  - `+` button increments item quantity and updates cart totals.
  - `-` button decrements item quantity; if quantity drops to 1 and is decremented, removes the item.
- **Delete Button**: One-click removal button for each item in the cart.
- **Navigation Actions**:
  - "Continue Shopping" button to return to the plant catalog.
  - "Proceed to Checkout" button displaying a "Coming Soon" prompt.

### 4. Redux State Management (`CartSlice.jsx`, `store.js`)
- Configured using Redux Toolkit `createSlice` and `configureStore`.
- Cart state slice manages an array of `items`.
- Reducers:
  - `addItem`: Adds an item or increments existing item quantity.
  - `removeItem`: Removes an item by name.
  - `updateQuantity`: Updates the specific item quantity.

---

## 📂 Project Directory Structure

```text
coursera/
├── public/
├── src/
│   ├── assets/
│   ├── AboutUs.css         # Styling for About Us company component
│   ├── AboutUs.jsx         # Company mission, values, and story
│   ├── App.css             # Background image & landing page styling
│   ├── App.jsx             # Main application container & landing page
│   ├── CartItem.css        # Shopping cart page styling
│   ├── CartItem.jsx        # Shopping cart view with item controls & totals
│   ├── CartSlice.jsx       # Redux Toolkit slice for cart state
│   ├── index.css           # Global CSS variables & layout resets
│   ├── main.jsx            # React root with Redux Provider
│   ├── ProductList.css     # Product catalog & navbar styles
│   ├── ProductList.jsx     # Plant catalog grouped into 3 categories
│   └── store.js            # Redux store configuration
├── index.html              # HTML template with Google Fonts & metadata
├── package.json            # Scripts & project dependencies
├── vite.config.js          # Vite config with relative base path
└── README.md               # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd coursera
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 🌐 Deployment to GitHub Pages

This project is configured with `gh-pages` and relative asset paths for seamless deployment:

1. In `package.json`, ensure the repository URL or homepage is set if desired, or run:
   ```bash
   npm run deploy
   ```
2. Enable GitHub Pages in your repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Set branch to `gh-pages` and folder to `/(root)`.
3. Your live application will be accessible at:
   `https://<your-username>.github.io/<repository-name>/`

---

## 📝 Coursera Submission Deliverables Reference

| Deliverable | File Path | Criteria Points |
| :--- | :--- | :--- |
| Project README | `README.md` | 2 Points |
| About Us Component | `src/AboutUs.jsx` | 1 Point |
| Landing Page Background CSS | `src/App.css` | 1 Point |
| Landing Page Component | `src/App.jsx` | 3 Points |
| Redux Cart Slice | `src/CartSlice.jsx` | 4 Points |
| Product Catalog Component | `src/ProductList.jsx` | 16 Points |
| Shopping Cart Component | `src/CartItem.jsx` | 23 Points |

---

## 🌿 License
This project is open-source and available under the [MIT License](LICENSE).
