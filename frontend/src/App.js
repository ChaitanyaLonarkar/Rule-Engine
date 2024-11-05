import React from 'react';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';
import './App.css'
function App() {
  return (
    <div>
      <h1>Rule Engine</h1>
      <div className="container">
        <RuleForm />
        <RuleList />
      </div>
    </div>
  );
}

export default App;
