import { gql } from '@apollo/client'
import './App.css'
import logo from './logo.svg'

const GET_ARTICLES = gql`
  query GetArticle {
    article {
      name
    }
  }
`

function App() {
  // const { loading, error, data } = useQuery(GET_ARTICLES)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
