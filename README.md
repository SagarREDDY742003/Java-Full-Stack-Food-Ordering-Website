# Java-Full-Stack-Food-Ordering-Website

This is a full-stack web application built using the **Java Full Stack** stack, designed to facilitate seamless food ordering between customers and restaurant owners. It includes secure authentication, role-based access, payment integration, and a polished user interface.

---

## 🔙 Backend Dependencies (Spring Boot – Maven)

This project uses **Spring Boot 3.4.8** with Java 17, integrating secure authentication, Stripe payments, JWT, and MySQL. Below is a breakdown of the key dependencies used in the `pom.xml`.

### 🌐 Core Frameworks
| Dependency                         | Purpose                                      |
|------------------------------------|----------------------------------------------|
| `spring-boot-starter-web`          | Build RESTful APIs and web services          |
| `spring-boot-starter-data-jpa`     | ORM and database interaction via JPA         |
| `spring-boot-starter-security`     | Authentication and authorization             |
| `spring-boot-devtools`             | Hot reload and dev-time enhancements         |

---

### 🔐 Security & Authentication
| Dependency                         | Purpose                                      |
|------------------------------------|----------------------------------------------|
| `jjwt-api`, `jjwt-impl`, `jjwt-jackson` | JSON Web Token authentication stack     |
| `spring-security-test`             | Security testing utilities                   |

---

### 💳 Payment Integration
| Dependency                         | Purpose                                      |
|------------------------------------|----------------------------------------------|
| `stripe-java`                      | Stripe SDK for payment gateway integration   |

---

### 🧰 Utilities
| Dependency                         | Purpose                                      |
|------------------------------------|----------------------------------------------|
| `mysql-connector-j`                | MySQL database driver                        |
| `lombok`                           | Reduces boilerplate in Java classes          |

---

### 🧪 Testing
| Dependency                         | Purpose                                      |
|------------------------------------|----------------------------------------------|
| `spring-boot-starter-test`         | Core testing framework for Spring Boot       |

---

### ⚙️ Build Plugins
| Plugin                             | Purpose                                      |
|------------------------------------|----------------------------------------------|
| `maven-compiler-plugin`            | Java compilation and annotation processing   |
| `spring-boot-maven-plugin`         | Package and run Spring Boot apps             |

---

## 📦 Frontend Dependencies

This project uses a modern React stack with powerful libraries for UI, state management, routing, form handling, and testing.

### 🖼️ UI & Styling
| Package                  | Purpose                                      |
|--------------------------|----------------------------------------------|
| `@mui/material`          | Material UI components                      |
| `@mui/icons-material`    | Icon set for MUI                            |
| `@emotion/react`         | Emotion styling engine                      |
| `@emotion/styled`        | Styled components with Emotion              |
| `@mui/system`            | MUI system utilities                        |
| `@mui/base`              | Low-level UI primitives                     |
| `@mui/x-date-pickers`    | Date picker components                      |
| `tailwindcss` *(optional)* | Utility-first CSS framework              |
| `react-slick`            | Carousel/slider component                   |
| `slick-carousel`         | Slick styles for `react-slick`              |

### 🧠 State & Routing
| Package           | Purpose                                      |
|-------------------|----------------------------------------------|
| `redux`           | Global state management                     |
| `react-redux`     | React bindings for Redux                    |
| `redux-thunk`     | Middleware for async actions                |
| `react-router-dom`| Client-side routing                         |

### 📬 API & Utilities
| Package       | Purpose                                      |
|---------------|----------------------------------------------|
| `axios`       | HTTP client for API calls                    |
| `dayjs`       | Lightweight date/time manipulation           |

### 📝 Forms & Validation
| Package   | Purpose                                      |
|-----------|----------------------------------------------|
| `formik`  | Form state management and submission         |
| `yup`     | Schema-based form validation                 |

### 🔔 Notifications
| Package             | Purpose                                      |
|---------------------|----------------------------------------------|
| `react-toastify`    | Toast notifications                         |

### 🧪 Testing
| Package                     | Purpose                                      |
|-----------------------------|----------------------------------------------|
| `@testing-library/react`    | React component testing                     |
| `@testing-library/jest-dom` | Custom matchers for Jest                   |
| `@testing-library/user-event` | Simulate user interactions               |
| `@testing-library/dom`      | DOM testing utilities                      |

### ⚙️ Core React
| Package       | Purpose                                      |
|---------------|----------------------------------------------|
| `react`       | Core React library                          |
| `react-dom`   | DOM rendering for React                     |
| `react-scripts` | CRA build scripts                        |
| `web-vitals`  | Performance metrics                         |

---

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
- Responsive UI with Tailwind and MUI
- State persistence using Redux

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



