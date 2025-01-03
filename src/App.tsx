import Loading from './Loading';
import Response from './Response';
import ErrorResponse from './ErrorResponse';
import './App.css';

function App() {
  return (
    <>
      <Response />
      <ErrorResponse />
      <Loading />
    </>
  )
}

export default App;