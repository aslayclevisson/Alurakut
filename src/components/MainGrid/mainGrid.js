import styled from "styled-components";

const MainGrid = styled.main`
  display: grid;
  margin: 0 auto;
  grid-gap: 10px;
  padding: 16px;
  width: 100%;
  max-width: 500px;  

  .profile {
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }
  
  @media(min-width: 860px) {
    display: grid;
    max-width: 1100px;
    grid-template-columns: 160px 1fr 312px;
    grid-template-areas: 
    "Profile Welcome RelationShips";
  }
`;


export default MainGrid;