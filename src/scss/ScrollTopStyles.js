import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: white;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   background-color:#ff6600ff;
   width: auto;
   right: 5%;
   bottom: 5%;
   height: auto;
   font-size: 2.5rem;
   border-radius:10px;
   z-index: 1;
   cursor: pointer;
   color: white;

   :hover{
    background-color:white;
    border:1px solid #ff6600ff;
    color:#ff6600ff;
    transition: 1s ease;
   }
`