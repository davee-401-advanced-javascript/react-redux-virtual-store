# React / Redux Virtual Store

## Author: Davee Sok

## Links and Resources:

- [Front-End Application](https://daveesvirtualstorelab.netlify.app/)
- [API used for Products & Categories](https://davee-auth-api-server.herokuapp.com/)
- [Lab36 Pull Request](https://github.com/davee-401-advanced-javascript/storefront/pull/1)
- [Lab37 Pull Request](https://github.com/davee-401-advanced-javascript/storefront/pull/3)
- [Lab38 Pull Request](https://github.com/davee-401-advanced-javascript/storefront/pull/5)

```
Our Notes / Pseduo Code


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
