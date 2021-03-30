import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';



describe("App Component",()=>{
  test('renders App component', () => {
    const div = document.createElement("div")
    ReactDOM.render(<App/>, div)
  });
  test('render header correctly', () => {
    const h1 = document.createElement("h1")
    ReactDOM.render(<App/>, h1)
  });
  test('display title correctly', () => {
    const {getByText} = render(<App/>)
    getByText('Memory Game')
  });
})
