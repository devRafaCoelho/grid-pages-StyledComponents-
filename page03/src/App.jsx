import Banner from "./assets/banner.png";
import { Article } from "./components/Article";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { GridContainer } from "./components/GridContainer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

export default function App() {
  return (
    <GridContainer>
      <Header>
        <h1>The Fog Wall</h1>
      </Header>

      <Nav>
        <p>Categories:</p>
        <ul>
          <li>Film & Cinema</li>
          <li>Books & Reading</li>
          <li>Games & Consoles</li>
          <li>Food & Drink</li>
          <li>World News</li>
          <li>Outdoor Living</li>
        </ul>
      </Nav>

      <Article>
        <h2>The Best 5 Open World Adventure Games</h2>
        <img src={Banner} alt="banner" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores amet temporibus incidunt perferendis architecto omnis aliquam tenetur sapiente? Quo distinctio provident voluptates ab, laboriosam ipsam veritatis ullam debitis magnam cupiditate. Ullam ut harum deserunt eius enim ex laborum, vitae, dignissimos, perferendis incidunt nihil sint! Quidem deserunt laudantium nostrum illum numquam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores amet temporibus incidunt perferendis architecto omnis aliquam tenetur sapiente? Quo distinctio provident voluptates ab, laboriosam ipsam veritatis ullam debitis magnam cupiditate. Ullam ut harum deserunt eius enim ex laborum, vitae, dignissimos, perferendis incidunt nihil sint! Quidem deserunt laudantium nostrum illum numquam.
        </p>
      </Article>

      <Aside>
        <ul>
          <li>
            <p><strong>Published on:</strong></p>
            <p>May 6th 2020</p>
          </li>
          <li>
            <p><strong>In the category:</strong></p>
            <p>Games & Consoles</p>
          </li>
          <li>
            <p><strong>Wrinten by:</strong></p>
            <p>Mario</p>
          </li>
        </ul>
      </Aside>

      <Footer>
        <p>Copyright 2022 The Fog Wall</p>
      </Footer>
    </GridContainer>
  )
}