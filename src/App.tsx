import './app.css';

function App() {
  return (
    <div className='App'>
      <h1>Header 1</h1>
      <p>This is a simple tutorial of how to use the improved state hook.</p>
      <hr />
      <form
        method='post'
        autoComplete='off'
      >
        <fieldset>
          <legend>App container</legend>

          <fieldset>
            <legend>Form container</legend>
            <div className='field'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
              />
            </div>
            <div className='field'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Output container</legend>
            <p>Firstname: </p>
            <p>Lastname: </p>
          </fieldset>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
