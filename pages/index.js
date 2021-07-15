import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import ProfileRelationsBoxWrapper from "../src/components/ProfileRelations";

function ProfileSidbar(propriedade) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedade.githubUser}.png`}
        style={{ borderRadius: "10px" }}
      />
      <hr />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${propriedade.githubUser}`}
        >
          @ {propriedade.githubUser} <hr />
        </a>
      </p>
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = "anisberto";
  const pessoasFavoritas = [
    "juunegreiros",
    "marcosPaixao",
    "omariosouto",
    "jonatas",
    "peas",
    "anisberto",
  ];
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" className={{ gridArea: "profileArea" }}>
          <ProfileSidbar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" className={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo (a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h5 className="subTitle">Qual seu desejo do dia ?</h5>
            <form
              onSubmit={function handleComunidade() {
                alert("ola");
              }}
            >
              <div>
                <input
                  placeholder="como você deseja nomear sua comunidade ?"
                  name="title"
                  aria-label="como você deseja nomear sua comunidade ?"
                  type="text"
                ></input>
              </div>
              <div>
                <input
                  placeholder="qual o brazão da sua comunidade ?"
                  name="title"
                  aria-label="qual o brazão da sua comunidade ?"
                ></input>
              </div>
              <button type="submit" style={{ color: "#ffff" }}>
                criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelacionsArea"
          className={{ gridArea: "profileRelacionsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ( {pessoasFavoritas.length} )
            </h2>
            <ul>
              {pessoasFavoritas.map((itens) => {
                return (
                  <li>
                    <a href={`/users/${itens}`} key={itens}>
                      <img src={`https://github.com/${itens}.png`} />
                      <span>{itens}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
