import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
  background-color: #333;
  color:#fff;
  // text-align:center;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    & header{
      & h1{
        text-align:center;
      }
      & nav ul{
        display:flex;
        & li{
          margin-right:50px;
          align-self:center;
        }
        & [class~='group-1']:last-of-type {
          flex:1;
        }
      }
    }
}
/* .item-moment{
  margin: 20px !important;
  max-width: 400px !important;
} */
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

li {
  list-style-type:none;
}

  
  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  
  .title a {
    color: #0070f3;
    text-decoration: none;
  }
  
  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }
  
  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }
  
  .title,
  .description {
    text-align: center;
  }
  
  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }
  
  .code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
  }
  
  
  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 45%;
  }
  
  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  
  .card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  
  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  
  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }
  
  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
  
`