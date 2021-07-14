import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";

function ProfileSidbar(propriedade) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedade.githubUser}.png`}
        style={{ borderRadius: "10px" }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "anisberto";
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" className={{ gridArea: "profileArea" }}>
          <ProfileSidbar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" className={{ gridArea: "welcomeArea" }}>
          <Box>Bem vindo</Box>
        </div>
        <div
          className="profileRelacionsArea"
          className={{ gridArea: "profileRelacionsArea" }}
        >
          <Box>Pessoas da comunidade</Box>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
