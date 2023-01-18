import Image01 from './assets/1.png';
import Image02 from './assets/2.png';
import Image03 from './assets/3.png';
import { SmallCard } from './components/SmallCard';
import { BigCard } from './components/BigCard';
import { Header } from './components/Header';
import { Main } from './components/Main';

export default function App() {
  return (
    <>
      <Header>
        <nav>
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <h1>
            <div>Express</div>
            <div>Yourself</div>
          </h1>
          <a href="/">Guides</a>
          <a href="/">Contact</a>
        </nav>
      </Header>

      <Main>
        <SmallCard>
          <h3>A note about style</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi error quae eligendi accusamus at asperiores!
          </p>
          <a href="">Read More</a>
        </SmallCard>

        <BigCard>
          <img src={Image01} alt="model" />
        </BigCard>

        <SmallCard>
          <h3>A note about style</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi error quae eligendi accusamus at asperiores!
          </p>
          <a href="">Read More</a>
        </SmallCard>

        <BigCard>
          <img src={Image02} alt="model" />
        </BigCard>

        <BigCard>
          <img src={Image03} alt="model" />
        </BigCard>

        <BigCard>
          <h3>A note about style</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi error quae eligendi accusamus at asperiores!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi error quae eligendi accusamus at asperiores!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi error quae eligendi accusamus at asperiores!
          </p>
          <a href="">Read More</a>
        </BigCard>

        <BigCard>
          <img src={Image01} alt="model" />
        </BigCard>

        <SmallCard>
          <h3>A note about style</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi error quae eligendi accusamus at asperiores!
          </p>
          <a href="">Read More</a>
        </SmallCard>

        <SmallCard>
          <h3>A note about style</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi error quae eligendi accusamus at asperiores!
          </p>
          <a href="">Read More</a>
        </SmallCard>
      </Main>
    </>
  )
}