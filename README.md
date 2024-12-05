
# Restaurant Management App

This project is a web-based restaurant management system designed to streamline various aspects of restaurant operations, including table management, food ordering, employee management, and order processing.  The system aims to enhance the overall dining experience for customers and improve operational efficiency for restaurant owners and staff.

## Challenges
The main challenge is to implement the functionalities like table management, employee management, order management, routing, and Redux State management using React JS and other technologies.


## Key Features
1. User Authentication: The application provides user authentication functionality, allowing users to log in, and log out securely. It employs token-based authentication for protecting routes and ensuring secure access to sensitive information.

2. Dashboard: The dashboard provides an overview of various aspects of the business, such as employee management, table management, food menu management, and order management. It offers a user-friendly interface for managing these operations efficiently.

3. Employee Management: The application allows administrators to manage employee information, including adding new employees, and removing employees from the system. This feature facilitates efficient management of staff members.

4. Table Management: It enables administrators to manage restaurant tables, including adding new tables, updating table configurations, and marking tables as occupied or available. This feature helps in optimizing table allocation and improving the dining experience for customers.

5. Food Menu Management: Administrators can manage the food menu, including adding new food items,  and removing items from the menu. This functionality enables businesses to keep their menu offerings up-to-date and appealing to customers.

6. Order Management: The application facilitates order management, allowing staff to view and manage incoming orders efficiently. It provides features such as order status updates, and order history to streamline the order fulfillment process.

## Used Technologies
1. vite: 5.1.0
2. react: 18.2.0
3. react-redux: 9.1.0
4. reduxjs/toolkit: 2.2.1
6. axios: 1.6.7
7. tailwindcss: 3.4.1

## Used Utility
1. Primary Color: #cc080b
2. Secondary Color: #79a33d
3. Primary Font: Josefin Sans, sans-serif
4. Secondary Font: Quattrocento, serif;

## 🔗 Live Site Link
[![Live](https://img.shields.io/badge/Click_Here_For_Restaurant_APP-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://restaurant-bss.netlify.app)


## Admin Login Credential

Username: admin@mail.com \
Password: Admin@123

## Project Setup

Install the App with npm

```bash
  npm install
```

Run the App with npm

```bash
  npm run dev
```

Build the App with npm

```bash
  npm run build
```
    
## Output for Desktop Mode

=> This is the login page. Admin can login using credential.

![loginPage](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-login.png)


=> This is Employee List page. Here admin can see all kinds of information about an employee. Admin can update all employees information by clicking on edit button. Also, the employees information can be deleted by clicking on the delete button.

![allEmployee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-list.png)


=> This page is for add a new employee. This page will open when admin click on the Add Employee button of the employee list.

![addEmployee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/ab7c9a9d-b8fa-42aa-9c55-555173896429)


=> Here is the validation check for add a new employee. So all fields except middle name and image field must be filled.

![error](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-add.png)

=> This is Table List page. Here admin can see all kinds of information about table. The tables information can be deleted by clicking on the delete button.

![AllTableList](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-list.png)

=> This page is for add a new table. This page will open when admin click on the Add Table button of the table list.

![Add Table](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-add.png)

=> By clicking on the plus button of the Table List page will open this modal and admin can assign employee to a table.

![asign](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-assign-employee.png)

=> By clicking on the cross button on the right side of the employee chip, the assigned employee from a table will be removed by confirmation of the alert.

![remove employee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-remove-employee)

=> This is Food List page. Here admin can see all kinds of information about foods. Admin can update all foods information by clicking on edit button. Also, the foods information can be deleted by clicking on the delete button.

![AllFoodList](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-list.png)

=> This page is for add a new food. This page will open when admin click on the Add Food button of the food list.

![Addfood](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-add.png)

=> When no table is selected from the table list, the food list will be hidden and show a message "select a table first".

![orderFood1](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order.png)

=> After Select a Table user can select the food items and order.

![orderFood2](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order-after-select-table.png)

=> This is the cart where user can modify the order items then place the order.

![orderCart](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-new-order-cart.png)

=> This is Order List page. Here admin can see all kinds of information about order. The orders information can be deleted by clicking on the delete button also modify the order status by clicking edit button.

![Screenshot 2024-03-22 010550](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-order-list.png)

## Output for Tab Mode

=> For tab responsive, Drawer Menu will be open and close by clicking the hamburger icon. 

![drawer](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/94469896-048b-46a6-902d-caebebefe2a4)


## Output for Mobile Mode

=> For mobile responsive Login page. 

![drawer](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-login-mobile.png)

=> For mobile responsive, sidebar shown bottom navigation bar and logout will be in top navigation bar. 

![drawer](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-list-mobile.png)

=> All table such as employees list, tables list, and food list will converted into card ui in mobile responsive.

![All Employee](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-employee-list-mobile.png)

![All Table](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-table-list-mobile.png)

![All Food](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-food-list-mobile.png)

=> For mobile responsive, Modal will resized as small. Also the modal contents will shown as column view.

![AssignEmployeeToTable](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/fc1ab84e-4178-402e-9ac1-bbf2c185e3a6)

=> For mobile responsive, all the order list will shown as a column view.

![allOrderListMobile](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-order-list-mobile.png)

=> When user want to change the order status, by clicking the edit button from the Order List page user can change it.

![ChabgeOrderStatus](https://github.com/Shahriar-Syeed/bss-restaurant-app/blob/main/src/assets/screenshot/resturant-dahboard-order-status-change-mobile.png)


## Deployment

For Netlify Deployment Add The _redirects File Into Public Folder And Paste This-

```bash
  /*    /index.html   200
```


