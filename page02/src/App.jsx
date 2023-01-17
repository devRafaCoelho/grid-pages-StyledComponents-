import Image01 from "./assets/1.png";
import Image02 from "./assets/2.png";
import Image03 from "./assets/3.png";
import { Article } from "./components/Article";
import { Content } from "./components/Content";
import { FirstArticle } from "./components/FirstArticle";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function App() {

  return (
    <>
      <Header>
        <h1>Globe Roamer</h1>
      </Header>

      <Main>
        <FirstArticle>
          <img src={Image01} alt="feature-img" />
          <Content>
            <h2>Balloon Magic</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptate! Exercitationem vero corporis explicabo. Ipsum incidunt sunt ipsam obcaecati numquam ut nisi sit nostrum tempora nemo consequuntur, minus, quisquam aperiam.
            </p>
          </Content>
        </FirstArticle>

        <Article>
          <img src={Image01} alt="article-img" />
          <Content>
            <h3>Balloon Magic</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus illo tempore. Necessitatibus fuga dolor molestiae ea consequuntur quos et.
            </p>
          </Content>
        </Article>

        <Article>
          <img src={Image02} alt="article-img" />
          <Content>
            <h3>Road To Freedom</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus illo tempore. Necessitatibus fuga dolor molestiae ea consequuntur quos et.
            </p>
          </Content>
        </Article>

        <Article>
          <img src={Image03} alt="article-img" />
          <Content>
            <h3>The Clear Blue</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus illo tempore. Necessitatibus fuga dolor molestiae ea consequuntur quos et.
            </p>
          </Content>
        </Article>

      </Main>
    </>
  )
}