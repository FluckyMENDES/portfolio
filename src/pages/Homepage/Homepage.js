import React from 'react';
import Title from './../../components/Title/Title';

function Homepage({ contentTopOffset }) {
  return (
    <main style={{ paddingTop: contentTopOffset }}>
      <div className="container">
        <Title level={1}>Homepage</Title>
      </div>
    </main>
  );
}

export default Homepage;
