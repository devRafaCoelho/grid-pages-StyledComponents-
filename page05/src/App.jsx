import { GridMain } from './components/GridMain';
import { WelcomePanel } from './components/WelcomePanel';
import { AboutPanel } from './components/AboutPanel';
import { PhotosPanel } from './components/PhotosPanel';
import Image01 from './assets/1.png'
import Image02 from './assets/2.png'

export default function App() {
  return (
    <GridMain>
      <WelcomePanel>
        <nav>
          <a href="/">Home</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
        </nav>

        <div>
          <h1>Moony</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, recusandae fuga consequuntur nostrum asperiores adipisci nemo corrupti consequatur dolore facilis, accusantium odio quidem sit saepe velit. Nulla eligendi consectetur optio.
          </p>
        </div>

        <footer>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </footer>
      </WelcomePanel>

      <AboutPanel>
        <img src={Image01} alt="main-pic" />

        <div>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nam nesciunt in?
          </p>
        </div>
      </AboutPanel>

      <PhotosPanel>
        <div>
          <h2>Photography</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nam nesciunt in?
          </p>
        </div>

        <img src={Image02} alt="main-pic" />
      </PhotosPanel>

    </GridMain>
  )
}