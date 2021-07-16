import Box from "../src/components/Box/box.js";
import MainGrid from "../src/components/MainGrid/mainGrid.js";
import { AlurakutProfileSidebarMenuDefault, AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from '../src/components/RelationsShips/relationsShips.js';

function ProfileLeftSidebar(user) {
  return (
    <Box>
      <img src={`https://github.com/${user.gitUser}.png`} alt="User" style={{ borderRadius: '8px'}} />
      <hr />

      <a className="boxLink" href="{`https://github.com/${user.gitUser}.png`}"> @{user.gitUser}</a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box> 
  )
}

function Friendships(imagemShips) {

  return (
    <Box>
      <img src={`https://github.com/${imagemShips.gitImages[0]}.png`} alt="User" style={{ borderRadius: '8px'}} />
    </Box> 
  )
}

export default function Home() {
  const gitUser = 'aslayclevisson';

  const gitFriends = ['y','x','z','a','b','h','l','k','q']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profile" style={{ gridArea:'Profile'}}>
          <ProfileLeftSidebar gitUser= {gitUser}/>
        </div>
        
        <div className="welcomeArea" style={{ gridArea:'Welcome'}}>
          <Box>
            <h1 className="title">
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box> 
        </div>

        <div className="relationsArea" style={{ gridArea:'RelationShips'}}>
          <ProfileRelationsBoxWrapper>  
            <h2 className="smallTitle">Amizades</h2>
            <p>Pessoas na comunidade ({gitFriends.length})</p>
            <ul>
              {gitFriends.map((followers) => {
                return (
                  <li>
                    <a href={`/users/${followers}`} key={followers}>
                      <img src={`https://github.com/${followers}.png`} alt="Users" style={{ borderRadius: '4px'}} />
                      <span>{followers}</span>
                    </a>
                  </li>
                )
              })}
            </ul>  
          </ProfileRelationsBoxWrapper>

          <Box>
            Comunidades
          </Box > 
        </div>
      </MainGrid>
    </>
  )
}
