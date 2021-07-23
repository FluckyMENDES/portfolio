import React, { useState } from 'react';
import 'normalize.css';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';

function App() {
  const [contentTopOffset, setContentTopOffset] = useState(0);

  return (
    <div className="App">
      <Layout setContentTopOffset={setContentTopOffset}>
        <Homepage contentTopOffset={contentTopOffset} />
      </Layout>
    </div>
  );
}

export default App;
