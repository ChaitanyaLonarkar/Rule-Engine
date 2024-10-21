// const mongoose = require('mongoose');
import mongoose from "mongoose";

const NodeSchema = new mongoose.Schema({
  type: String, // operator/operand
  left: Object, // left node
  right: Object, // right node
  value: Object, // operand or operator value
});

const RuleSchema = new mongoose.Schema({
  rule_name: String,
  root: NodeSchema, // The AST root node
  metadata: Object, // Optional metadata
});

const Rule = mongoose.model('Rule', RuleSchema);

export default Rule;
