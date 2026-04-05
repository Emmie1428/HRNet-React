# HRNet

## Description 

HRnet is an internal application used by Wealth Health for employee file management. It allows users to view the employee list, search within it, and create new employee records. Previously based on jQuery, this version features a modern, customizable, and more efficient front-end.

## Used technologies

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/React_DOM-19.2.4-20232A?logo=react&logoColor=61DAFB" alt="React DOM" />
  <img src="https://img.shields.io/badge/Vite-8.0.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/React_Redux-9.2.0-593D88?logo=redux&logoColor=white" alt="React Redux" />
  <img src="https://img.shields.io/badge/React_Router-7.13.2-CA4245?logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/PrimeReact-10.9.7-00C4B3?logo=primereact&logoColor=white" alt="PrimeReact" />
  <img src="https://img.shields.io/badge/ESLint-9.39.4-4B32C3?logo=eslint&logoColor=white" alt="ESLint" />
</div>

## Overview

This project is a frontend application built with **React** and **Vite**.  
It uses **Redux Toolkit** for state management, **React Router** for navigation, and **PrimeReact** for UI components.

The project also includes a local custom dependency:

- `modal-react-plugin` https://github.com/Emmie1428/Modal-plugin---HRnet

---

## Tech Stack

### Main dependencies

- **React** `19.2.4`
- **React DOM** `19.2.4`
- **Redux Toolkit** `2.11.2`
- **React Redux** `9.2.0`
- **React Router** `7.13.2`
- **PrimeReact** `10.9.7`
- **modal-react-plugin** *(local package)*

### Development tools

- **Vite** `8.0.0`
- **@vitejs/plugin-react** `6.0.0`
- **ESLint** `9.39.4`
- **eslint-plugin-react-hooks** `7.0.1`
- **eslint-plugin-react-refresh** `0.5.2`
- **vite-plugin-purgecss** `0.2.13`

---

## Features

- Modern React application structure
- Fast development environment with Vite
- Global state management with Redux Toolkit
- Client-side routing with React Router
- UI components with PrimeReact
- Code linting with ESLint
- Custom modal integration via local plugin

## Installation

Clone the repository:
```bash
git clone https://github.com/Emmie1428/HRNet-React
cd my-react-app
npm install
```
## Available scripts

 - npm run dev
Starts the development server with Vite.
 - npm run build
Builds the app for production.
- npm run preview
Previews the production build locally.
- npm run lint
Runs ESLint to analyze code quality.

## Project structure

```bash
src/
├── assets/         # Images
├── components/     # Reusable UI components 
├── data/           # Static data
├── models/         # Data models and object structures
├── pages/          # Application pages (CreateEmployee, EmployeeList)
├── slices/         # Redux Toolkit slices
├── utils/          # Utility and helper functions
├── App.jsx         # Main app component with router and layout
├── main.jsx        # Application entry point, renders app into the DOM
└── store.js         # Redux store configuration
```

## Datas - Employee.json

-  Database containing 100 fictitious employees for testing and performance calculation purposes.