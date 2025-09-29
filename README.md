# Java-Full-Stack-Food-Ordering-Website

This is a full-stack web application built using the **MERN** stack, designed to facilitate seamless food ordering between customers and restaurant owners. It includes secure authentication, role-based access, payment integration, and a polished user interface.

---

## 🚀 Tech Stack

### 🧠 Backend
- **Node.js** – JavaScript runtime for server-side logic
- **Express.js** – Web framework for building RESTful APIs
- **MongoDB** – NoSQL database for storing user, restaurant, and order data
- **JWT (JSON Web Token)** – Secure authentication and session management
- **Nodemailer** – Email service integration (e.g., order confirmations)

### 🎨 Frontend
- **React.js** – Component-based UI framework
- **Tailwind CSS** – Utility-first CSS framework for rapid styling
- **Material UI (MUI)** – Pre-built React components for consistent design
- **Redux** – State management across components
- **Axios** – HTTP client for API communication

### 💳 Payment
- **Stripe** – Integrated payment gateway for secure transactions

---

## 🔐 Role-Based Access
- `ROLE_CUSTOMER` – Browse restaurants, place orders, make payments
- `ROLE_RESTAURANT_OWNER` – Manage menu, view orders, track revenue

---

### 🛠️ Development Tools

| Tool              | Usage                                         |
|-------------------|-----------------------------------------------|
| **IntelliJ IDEA** | Backend development with Spring Boot          |
| **VS Code**       | Frontend development with React               |

---

## 📦 Features
- User registration and login with JWT
- Role-based dashboard and access control
- Restaurant listing and menu management
- Cart functionality and order placement
- Stripe-powered payment flow
- Email notifications via Nodemailer
- Responsive UI with Tailwind and MUI
- State persistence using Redux

---

## 📁 Folder Structure (optional to include later)
You can add a section here to explain your folder organization once your project scales.

---

## 🧪 Getting Started
To run this project locally:
1. Clone the repo
2. Install dependencies using `npm install`
3. Set up your `.env` file with MongoDB URI, JWT secret, Stripe keys, etc.
4. Run backend: `npm run server`
5. Run frontend: `npm start`

---

## 🧬 Data Models

### 👤 User
Represents a customer or restaurant owner.

| Field           | Type     | Description                              |
|----------------|----------|------------------------------------------|
| `id`           | Long     | Unique identifier                        |
| `fullName`     | String   | User's full name                         |
| `email`        | String   | Login email                              |
| `password`     | String   | Hashed password                          |
| `role`         | Enum     | `ROLE_CUSTOMER` or `ROLE_RESTAURANT_OWNER` |
| `orders`       | Array    | List of placed orders                    |
| `favorites`    | Array    | Favorite restaurants or foods            |
| `addresses`    | Array    | Saved delivery addresses                 |
| `status`       | String   | Account status (e.g., active, blocked)   |

---

### 🏪 Restaurant
Represents a restaurant managed by an owner.

| Field             | Type     | Description                              |
|------------------|----------|------------------------------------------|
| `id`             | Long     | Unique identifier                        |
| `owner`          | User     | Reference to the restaurant owner        |
| `name`           | String   | Restaurant name                          |
| `description`    | String   | Brief overview of the restaurant         |
| `cuisineType`    | String   | Type of cuisine (e.g., Indian, Italian)  |
| `address`        | String   | Physical location                        |
| `contactInformation` | String | Phone/email                              |
| `openingHours`   | String   | Operating hours                          |
| `reviews`        | Array    | Customer reviews                         |
| `orders`         | Array    | Orders received                          |
| `numRating`      | Number   | Aggregate rating                         |
| `images`         | Array    | Restaurant images                        |
| `registrationDate` | Date   | Date of registration                     |
| `open`           | Boolean  | Open/closed status                       |
| `foods`          | Array    | Menu items                               |

---

### 🍔 Food
Represents a menu item offered by a restaurant.

| Field           | Type     | Description                              |
|----------------|----------|------------------------------------------|
| `id`           | Long     | Unique identifier                        |
| `name`         | String   | Name of the dish                         |
| `description`  | String   | Description of the dish                  |
| `price`        | Number   | Price in local currency                  |
| `foodCategory` | Category | Category reference (e.g., Starter, Main) |
| `images`       | Array    | Food images                              |
| `available`    | Boolean  | Availability status                      |
| `restaurant`   | Restaurant | Reference to the restaurant             |
| `isVegetarian` | Boolean  | Veg/non-veg flag                         |
| `isSeasonal`   | Boolean  | Seasonal availability                    |
| `ingredients`  | Array    | List of ingredients                      |
| `creationDate` | Date     | Date added to menu                       |

---

### 🗂️ Category
Represents a food category within a restaurant.

| Field       | Type       | Description                              |
|------------|------------|------------------------------------------|
| `id`       | Long       | Unique identifier                        |
| `name`     | String     | Category name (e.g., Beverages, Desserts)|
| `restaurant` | Restaurant | Reference to the restaurant             |

---

### 🧂 IngredientCategory
Represents a group of ingredients (e.g., Spices, Dairy) tied to a restaurant.

| Field         | Type       | Description                              |
|---------------|------------|------------------------------------------|
| `id`          | Long       | Unique identifier                        |
| `name`        | String     | Category name                            |
| `restaurant`  | Restaurant | Reference to the restaurant              |
| `ingredients` | Array      | List of `IngredientItem`s                |

---

### 🧄 IngredientItem
Represents an individual ingredient used in food preparation.

| Field       | Type             | Description                              |
|-------------|------------------|------------------------------------------|
| `id`        | Long             | Unique identifier                        |
| `name`      | String           | Ingredient name                          |
| `category`  | IngredientCategory | Reference to its category              |
| `restaurant`| Restaurant       | Reference to the restaurant              |
| `inStock`   | Boolean          | Availability status                      |

---

### 🎉 Events
Represents promotional or special events hosted by a restaurant.

| Field        | Type       | Description                              |
|--------------|------------|------------------------------------------|
| `id`         | Long       | Unique identifier                        |
| `image`      | String     | Event banner or image                    |
| `startedAt`  | DateTime   | Start time                               |
| `endsAt`     | DateTime   | End time                                 |
| `name`       | String     | Event name                               |
| `restaurant` | Restaurant | Host restaurant                          |
| `location`   | String     | Event location                           |

---

### 📦 Order
Represents a completed order placed by a customer.

| Field           | Type       | Description                              |
|-----------------|------------|------------------------------------------|
| `id`            | Long       | Unique identifier                        |
| `customer`      | User       | Reference to the customer                |
| `restaurant`    | Restaurant | Reference to the restaurant              |
| `totalAmount`   | Number     | Final billed amount                      |
| `orderStatus`   | String     | Status (e.g., pending, delivered)        |
| `createdAt`     | DateTime   | Timestamp of order creation              |
| `deliveryAddress` | String   | Delivery location                        |
| `items`         | Array      | List of `OrderItem`s                     |
| `payment`       | Object     | Payment details                          |
| `totalItem`     | Number     | Number of items                          |
| `totalPrice`    | Number     | Total price before taxes/fees           |

---

### 🍽️ OrderItem
Represents an individual item within an order.

| Field        | Type     | Description                              |
|--------------|----------|------------------------------------------|
| `id`         | Long     | Unique identifier                        |
| `food`       | Food     | Reference to the food item               |
| `quantity`   | Number   | Quantity ordered                         |
| `totalPrice` | Number   | Price for the quantity                   |
| `ingredients`| Array    | Custom ingredients (if applicable)       |

---

### 🛒 Cart
Represents a customer's active shopping cart.

| Field      | Type     | Description                              |
|------------|----------|------------------------------------------|
| `id`       | Long     | Unique identifier                        |
| `customer` | User     | Reference to the customer                |
| `items`    | Array    | List of `CartItem`s                      |
| `total`    | Number   | Total cart value                         |

---

### 🧾 CartItem
Represents an item added to the cart.

| Field        | Type     | Description                              |
|--------------|----------|------------------------------------------|
| `id`         | Long     | Unique identifier                        |
| `cart`       | Cart     | Reference to the cart                    |
| `food`       | Food     | Reference to the food item               |
| `quantity`   | Number   | Quantity added                           |
| `ingredients`| Array    | Selected ingredients                     |
| `totalPrice` | Number   | Price for the quantity                   |

---



