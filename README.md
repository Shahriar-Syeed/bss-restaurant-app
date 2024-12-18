
# Restaurant Management App

This project is a web-based restaurant management system designed to streamline various aspects of restaurant operations, including table management, food ordering, employee management, and order processing.  The system aims to enhance the overall dining experience for customers and improve operational efficiency for restaurant owners and staff.

## Challenges
The main challenge is to implement the functionalities like table management, employee management, order management, routing, and Redux State management using React JS and other technologies.


## Key Features
1. User Authentication: The application provides user authentication functionality, allowing users to log in, and log out securely. It employs token-based and refresh-token-base authentication for protecting routes and ensuring secure access to sensitive information.

2. Dashboard: The dashboard provides an overview of various aspects of the business, such as employee management, table management, food menu management, and order management. It offers a user-friendly interface for managing these operations efficiently.

3. Employee Management: The application allows administrators to manage employee information, including adding new employees, and removing employees from the system. This feature facilitates efficient management of staff members.

4. Table Management: It enables administrators to manage restaurant tables, including adding new tables, updating table configurations, and marking tables as occupied or available. This feature helps in optimizing table allocation and improving the dining experience for customers.

5. Food Menu Management: Administrators can manage the food menu, including adding new food items,  and removing items from the menu. This functionality enables businesses to keep their menu offerings up-to-date and appealing to customers.

6. Order Management: The application facilitates order management, allowing staff to view and manage incoming orders efficiently. It provides features such as order status updates, and order history to streamline the order fulfillment process.

## Used Technologies
1. Vite: 6.0.3
2. React: 18.3.1
3. React Router DOM: 6.28.0
4. React Redux: 9.1.2
5. Redux Toolkit: 2.3.0
6. Axios: 1.7.7
7. Tailwindcss: 3.4.14
8. Chartjs: 5.2.0

## Used Utility
1. Primary Color: #cc080b
2. Secondary Color: #79a33d
3. Primary Font: Josefin Sans, sans-serif
4. Secondary Font: Quattrocento, serif;

## 🔗 Live Demo Link
[![Live](https://img.shields.io/badge/Click_Here_For_Restaurant_APP-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://restaurant-bss.netlify.app)


## Admin Login Credential

Username: admin@mail.com \
Password: Admin@123

## Project Setup

Install Dependencies

```bash
  npm install
```
Install React Router

```bash
  npm install react-router-dom
```

Install Tailwind CSS

```bash
  npm install -D tailwindcss
```

Install Redux

```bash
  npm install @reduxjs/toolkit react-redux
```

Run Development Server

```bash
  npm run dev
```

Build for Production

```bash
  npm run build
```

## Deployment

For Netlify Deployment Add The _redirects File Into Public Folder And Paste This-

```bash
  /*    /index.html   200
```
    
## Output for Desktop Mode

=> This is the Main page. User can go to register page or login page.

![Main Home Page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-main.png)

=> This is the register page. User can register with correct information.

![Registration Page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-registration.png)

=> This is the login page. Admin can login using credential or go back to the main page.

![login Page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-login.png)

=> After login initially dashboard will show user information, who is admin.

![User Info Page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-user-info.png)

=>This is Home page of dashboard. Here admin can see all kind of report taking data form data warehouse (now dummy data).

![Home Page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-home.png)

=> This is Employee List page. Here admin can see all kinds of information about an employee. Admin can update all employees information by clicking on edit button. Also, the employees information can be deleted by clicking on the delete button.

![All Employee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-list.png)

=> This page is for add a new employee. This page will open when admin click on the Add Employee button of the employee list.

![Add Employee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-add.png)

=> Here is the validation check for add a new employee. So all fields except middle name and image field must be filled.

![Add Employee Validation](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-add-validation.png)

=> This page is for edit designation of an employee. This page will open when admin click on the edit button of an employee in the employee list.

![Employee Edit](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-edit.png)

=> This is Table List page. Here admin can see all kinds of information about table. The tables information can be deleted by clicking on the delete button.

![All Table List](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-list.png)

=> This page is for add a new table. This page will open when admin click on the Add Table button of the table list.

![Add Table](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-add.png)

=> By clicking on the plus button of the Table List page will open this modal and admin can assign employee to a table.

![asign](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-assign-employee.png)

=> By clicking on the cross button on the right side of the employee chip, the assigned employee from a table will be removed by confirmation of the alert.

![Remove employee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-remove-employee)

=> This is Food List page. Here admin can see all kinds of information about foods. Admin can update all foods information by clicking on edit button. Also, the foods information can be deleted by clicking on the delete button.

![All Food List](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-list.png)

=> This page is for add a new food. This page will open when admin click on the Add Food button of the food list.

![Add Food](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-add.png)

=> Here is the validation check for add a new food. So all fields except image field must be filled.

![Add Food Validation](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-add-validation.png)

=> This page is for food edit, every info of a food item. This page will open when admin click on the edit button of a food in the food list.

![Food Edit](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-edit.png)

=>This is New Order page. When no table is selected from the table list, the food list will be hidden and show a message "select a table first".

![New Order Food1](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order.png)

=> After Select a Table user can select the food items and order.

![New order Food select table](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order-after-select-table.png)

=> This is the cart where user can modify the order items then place the order.

![Order Cart](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order-cart.png)

=> This is Order List page. Here admin can see all kinds of information about order. The orders information can be deleted by clicking on the delete button also modify the order status by clicking edit button.

![order list](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-order-list.png)

=> This is Order List page. Here admin can see all kinds of information about order. The orders information can be deleted by clicking on the delete button also modify the order status by clicking edit button.

![Screenshot 2024-03-22 010550](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-order-list.png)

=> This is 404 not found page. This page have a button to back to the main page.
 
![Screenshot 2024-03-22 010550](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-404.png)


## Output for Tab Mode

=> For tab responsive, Drawer Menu will be open and close by clicking the hamburger icon. 

![tab view](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-tab-view.png)

![drawer](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-tab-view-open-menu.png)


## Output for Mobile Mode

=> For mobile responsive Main page. 

![main page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-main-mobile.png)

=> For mobile responsive Register page. 

![registration](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-registration-mobile.png)

=> For mobile responsive Login page. 

![login page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-login-mobile.png)

=> For mobile responsive User info page. 

![User info page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-user-info-mobile.png)

=> For mobile responsive dashboard home page. 

![Home page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-home-mobile.png)

=> For mobile responsive, sidebar shown bottom navigation bar and logout will be in top navigation bar. 

![Employee list](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-list-mobile.png)

=> All table such as employees list, tables list, and food list will converted into card ui in mobile responsive.

![All Employee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-list-mobile.png)

![All Table](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-list-mobile.png)

![All Food](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-list-mobile.png)

=> For mobile responsive, employee add.

![Employee Add page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-add-mobile.png)

=> For mobile responsive, employee add validation.

![Employee Edit validation](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-add-validation-mobile.png)

=> For mobile responsive, employee edit.

![Employee Edit page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-edit-mobile.png)

=> For mobile responsive, food add.

![Food Add page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-add-mobile.png)

=> For mobile responsive, food add validation.

![Food Add validation](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-add-validation-mobile.png)

=> For mobile responsive, food edit.

![Food Edit page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-edit-mobile.png)

=> For mobile responsive, New Order page.

![New Order page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order-mobie.png)

=> For mobile responsive, Cart Drawer.

![Cart Drawer](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order-cart-mobile.png)

=> For mobile responsive, New Order page After selecting table.

![New Order page](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order-after-select-table-mobile.png)

=> For mobile responsive, Modal will resized as small. Also the modal contents will shown as column view.

![Assign Employee To Table](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-assign-employee-mobile.png)

=> For mobile responsive, all the order list will shown as a column view.

![All Order List Mobile](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-order-list-mobile.png)

=> When user want to change the order status, by clicking the edit button from the Order List page user can change it.

![Change Order Status](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-order-status-change-mobile.png)





