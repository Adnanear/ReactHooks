import { StoreProvider, useStore } from './Hooks/useStore';
import './app.css';

const OutputContainer: React.FC = () => {
  const [state] = useStore();

  return (
    <fieldset>
      <legend>Output container</legend>
      <p>Firstname: {state.firstName}</p>
      <p>Lastname: {state.lastName}</p>
    </fieldset>
  );
};

interface InputProps {
  name: string;
}
const Input: React.FC<InputProps> = ({ name }) => {
  const [state, setState] = useStore();

  return (
    <div className='field'>
      <label htmlFor={name}>First Name</label>
      <input
        type='text'
        id={name}
        name={name}
        value={state[name]}
        onChange={(e) => setState({ [name]: e.currentTarget.value })}
      />
    </div>
  );
};

const FormContainer: React.FC = () => {
  return (
    <fieldset>
      <legend>Form container</legend>

      <Input name='firstName' />
      <Input name='lastName' />
    </fieldset>
  );
};

const AppContainer: React.FC = () => {
  return (
    <form
      method='post'
      autoComplete='off'
    >
      <fieldset>
        <legend>App container</legend>

        <FormContainer />
        <OutputContainer />
      </fieldset>
    </form>
  );
};

function App() {
  return (
    <div className='App'>
      <h1>Header 1</h1>
      <p>This is a simple tutorial of how to use the improved state hook.</p>
      <hr />
      <StoreProvider>
        <AppContainer />
      </StoreProvider>
    </div>
  );
}

export default App;
