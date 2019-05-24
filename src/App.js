import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          install semantic-release library as a dev dependency (npm install -D semantic-release)
          Configure CI:
            hook project up to circleci
            make sure you have a .circleci/config.yml file in root directory
              example:
          version: 2
          jobs:
            release:
              docker:
                - image: circleci/node:8
              steps:
                - checkout
                - run: npm install
                # Run optional required steps before releasing
                # - run: npm run build-script
                - run: npx semantic-release

          workflows:
            version: 2
            test_and_release:
              # Run the test jobs first, then the release only when all the test jobs are successful
              jobs:
                - release

          Add GH_TOKEN GIT_CREDENTIALS and NPM_TOKENin circleci project settings
        
        </a>
      </header>
    </div>
  );
}

export default App;
