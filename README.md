# Virtual Store Lab

## Author: Davee Sok / Chris Bortel

### Links and Resources:

<!-- - [ci/cd](http://xyz.com) (GitHub Actions) -->

- [Front-End application](http://xyz.com)
- [API used for Products & Categories](https://davee-auth-api-server.herokuapp.com/)

### Tests:

<!-- - How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc -->

Currently No Tests.

### UML:

<!-- Link to an image of the UML for your application and response to events -->

```
Pseduo Code

<App>
// Will bring in Provider React Redux
// Redux Store
  // States
    - active category
    - category list
    - products list
  // Actions
    - set active category(may need to set default to first)

  <Header/>
  <StoreFront>
    <Categories/>
      // Will list out all categories


    <CurrentCategories/>
      // Will render active category

    <Products/>
      // Will filter list based on active category


    </StoreFront>
  <Footer/>
</App>


```
