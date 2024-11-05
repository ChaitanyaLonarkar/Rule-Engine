import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

function RuleForm() {
  const [ruleName, setRuleName] = useState('');
  const [ruleString, setRuleString] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/rules/create', {
        rule_name: ruleName,
        rule_string: ruleString,
      });
      toast.success('Rule created successfully');
    } catch (err) {
      console.error(err);
      toast.error('Error creating rule');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Rule</h3>
      <input
        type="text"
        placeholder="Rule Name"
        value={ruleName}
        onChange={(e) => setRuleName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rule String"
        value={ruleString}
        onChange={(e) => setRuleString(e.target.value)}
      />
      <button type="submit">Create Rule</button>
    </form>
  );
}

export default RuleForm;
