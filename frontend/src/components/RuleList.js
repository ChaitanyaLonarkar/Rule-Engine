import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RuleList() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    async function fetchRules() {
      const res = await axios.get('http://localhost:4000/api/rules');
      setRules(res.data);
    }
    fetchRules();
  }, []);

  return (
    <div>
      <h3>Available Rules</h3>
      <ul>
        {rules.map(rule => (
          <li key={rule._id}>{rule.rule_name}: {JSON.stringify(rule.root)}</li>
        ))}
      </ul>
    </div>
  );
}

export default RuleList;
