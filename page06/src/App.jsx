import { Header } from './components/Header';
import { Main } from './components/Main';
import { WelcomeContent } from './components/WelcomeContent';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <Header>
        <h1>12 Col Grid</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
      </Header>

      <Main>
        <img
          src="https://fofoqueando.com/wp-content/uploads/2022/10/As-alegacoes-de-Bill-Murray-no-set-continuam-abalando-Hollywood.jpg" alt="bill-murray"
        />

        <WelcomeContent>
          <h3>Welcome</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident expedita alias temporibus laudantium omnis, voluptatem rem nulla iusto. Blanditiis ratione et minus neque suscipit commodi fugiat eligendi assumenda earum!
          </p>
        </WelcomeContent>

        <h2>Services</h2>

        <Card>
          <h3>Hello</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati.
          </p>
        </Card>

        <Card>
          <h3>Hello</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati.
          </p>
        </Card>

        <Card>
          <h3>Hello</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, obcaecati.
          </p>
        </Card>
      </Main>
    </>
  )
}

export default App
