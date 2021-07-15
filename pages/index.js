import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

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
    grid-template-columns: 160px 1fr 312px;
    max-width: 1100px;
    grid-template-areas: "
      Profile Welcome RelationShips
    ";
  }
`;

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
`;

export default function Home() {
  return (

    <MainGrid>
      <div className="profile" style={{ gridArea:'Profile'}}>
        <Box>
          Imagem
        </Box> 
      </div>
      <div style={{ gridArea:'Welcome'}}>
        <Box>
          Bem-vindo
        </Box> 
      </div>
      <div style={{ gridArea:'RelationShips'}}>
        <Box>
          Amigos
        </Box > 

        <Box>
          Comunidades
        </Box > 
      </div>
    </MainGrid>

  )
}
