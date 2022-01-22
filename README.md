# Datasales Frontend Challenge

![](https://github.com/euclidesdry/datasales-frontend-challenge/actions/workflows/frontend-ci.yml/badge.svg?branch=main&style=flat-square)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/euclidesdry/datasales-frontend-challenge/main?color=%230088FF&label=VERSION&style=flat-square)
![](https://img.shields.io/badge/Language-TypeScript-blue.svg?style=flat-square)
![](https://img.shields.io/badge/Language-CSS-blue.svg?style=flat-square)
![](https://img.shields.io/badge/React-17.0.2-brightgreen.svg?style=flat-square&logo=react)
![](https://img.shields.io/badge/React-Redux-brightgreen.svg?style=flat-square&logo=react)
![](https://img.shields.io/badge/React-Jest--27-brightgreen.svg?style=flat-square&logo=react)

A simple challenge powered by Datasales

## Deployed App

  Follow the links below to see the deployed app.

#### Netlify

[datasales-frontend-challenge.netlify.app](https://datasales-frontend-challenge.netlify.app)

#### Heroku

[https://euclidesdry-datasales-frontend.herokuapp.com](https://euclidesdry-datasales-frontend.herokuapp.com)

#### Users

```bash
[
  { username: "Euclides", password: "@123456" },
  { username: "Admin", password: "@12345678" },
];
```

## Routes

- Authentication [Auth]
  - Authentication Page to Login
- Application [App]
  - Shows cards from API Request to List Drinks

### Auth Route [must do/have]

- [X] User and Password authentication fields
- [X] User authentication feedback to user
- [X] Form validations

### Auth Route [must do/have]

- [X] Items Listed by a Table
- [X] At least 5 columns and one of them is the image
- [ ] 3 Buttons New, Edit, Delete
- [ ] The button New Must insert an Items on top of the Table list
- [ ] The button Edit Must edit the selected item
- [X] The button Delete Must remove the selected item
- [X] User Must have a feedback about all of the actions

## Requirements

- [X] ReactJS
- [X] React Hooks
- [X] React Router Dom
- [X] Material UI
- [X] Axios
- [X] Publish Repository as public

## Differential Requirements

- [X] Redux
- [X] TypeScript
- [X] Save data to LocalStorage
- [X] Deploy Application (Heroku, Netlify)

## Bonus

- [X] Setup CI/CD Pipelines (GitHub Actions [Node v14-16])
- [X] Setup Unit Tests

### The Fake API was based on [https://www.thecocktaildb.com/](https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee)
