import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`
h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

img {
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

body{
  font-family: "Manrope-Regular";
  font-weight: 400;
  font-size: 18px;
  background-color: var(--white);
  color: var(--text-desc);
}

// input:-webkit-autofill,
// input:-webkit-autofill:hover, 
// input:-webkit-autofill:focus,
// input:-webkit-autofill:active {
//     transition: background-color 5000s ease-in-out 0s;
//     background-color: inherit !important;
//     color: var(--text-forms);
// }

@media screen and (min-width: 767px) and (max-width: 1279px) {
  body {
    min-height: 1024px;
  }
}

@media screen and (max-width: 767px) {
  body {
    min-height: 100vh;
  }
}
`;

export default Global;
