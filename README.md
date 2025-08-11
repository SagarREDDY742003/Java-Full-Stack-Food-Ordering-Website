# Java-Full-Stack-Food-Ordering-Website

## Technology (mern)
  React
  node js
  express js
  role base access (ROLE_CUSTOMER, ROLE_RESTAURANT_OWNER)
  nodemailer
  jeson web token
  mongoDB(Data base)
  Tailwind css
  Mui (css component library)
  Redux (State managment library)
  Axios
  strip payment gatway
## Tools
  vs code (react)
  
## Model
  User
    User Entity
    	Long id;
    	fullName;
    	email;
    	password;
    	role;
    	orders;
    	favorites
    	addresses 
    	status;
​
Restaurant
public class Restaurant {
    id;
    owner;
    name;
    description;
    cuisineType;
    address;
    contactInformation;
    openingHours;
    reviews;
    orders;
    numRating;
    images;
    registrationDate;
    open;
    foods;
}
