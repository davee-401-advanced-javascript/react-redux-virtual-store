# React / Redux Virtual Store

## Author: Davee Sok

[![Netlify Status](https://api.netlify.com/api/v1/badges/1fdc1601-efec-4843-8e23-969f39c6be04/deploy-status)](https://app.netlify.com/sites/daveesvirtualstorelab/deploys)

## Links and Resources:

- [Front-End Website](https://daveesvirtualstorelab.netlify.app/)
- [Back-End Server Repo](https://github.com/davee-401-advanced-javascript/authenticated-api-server)
- [API used for Products & Categories](https://davee-auth-api-server.herokuapp.com/)

## Overview

This is a react application that uses redux for state management. Material-UI is the framework used to build the layout. This is connected to our dynamic node/express server that performs crud operations to our mongo database.

## Business Requirements

This application will power an online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase.

The core requirements and functionality are as follows:

- Display a list of our product categories
- Display a listing of products for each category, when the category is selected
- From the product listings:
  - Click to view a full detail page about the product
  - Add the product to your shopping cart
- Shopping cart (simple version) always visible on screen
- Full shopping cart and check out screen available from main navigation

## Technical Requirements

The application will be created with the following overall architecture and methodologies

- React
- ES6 Classes
- Redux Store for Application State
- Deployed API with Mongo storage for storing categories and products
- Superagent or Axios for performing API Requests
- Material UI for layout and styling
- Test Driven Development, using Jest
- Deployment to a cloud provider (Netlify, Amplify, or GitHub Pages)

## Getting Started

- Clone down this Repo
- Install Dependencies: `npm i`
- Run application: `npm start`

## My Notes

```
Notes / Pseduo Code


// Redux Store will have the following Reducers
    Categories
      States
        - activeCategory
        - category list
      Actions
        - initializeCategory

    Products
      States
        - products list
      Actions
        - initalizeProducts

    Carts
      States
        - cart
      Actions
        - addToCart
        - deleteFromCart


<App>
// Will need to get API Data and intialize
    Actions:
      - initalizeCategory
      - intializeProducts

  <Header/>
    States:
      - cart

  <SimpleCart/>
  // Will list out all the carts
    States:
      - cart
    Actions:
      - deleteFromCart

  <StoreFront>

    <Categories/>
      // Will list out all categories
          States:
            - categories
          Actions:
            - changeCategory

    <CurrentCategories/>
      // Will render active category
          States:
            - activeCategory
          Actions:
            - None

    <Products/>
      // Will filter list based on active category
          States:
            - activeCategory
            - products
          Actions
            - addToCart


    </StoreFront>
  <Footer/>
</App>


```
