// import React from "react";
// import ReactDOM from "react-dom";
// `
// // El props es la array de items

// const List = (props) => {
//   // Yоur cоdе gоеs hеrе
//   // Move the items up when they are clicked
//   const { items } = props;
//   const [index, setIndex] = React.useState(0);

//   const handleChange = (index) => {
//     // move the item up after it is clicked
//     setIndex(index + 1);
//   };
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index} onClick={() => handleChange(index)}>
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// };