import express from "express";
const router = express.Router();
import Rule from "../models/rule.js";

function createRule(ruleString) {
  const tokens = ruleString.split(" ");
  const ast = {
    type: "operator",
    value: tokens[1],
    left: { type: "operand", value: tokens[0] },
    right: { type: "operand", value: tokens[2] },
  };
  return ast;
}

router.post("/create", async (req, res) => {
  const { rule_name, rule_string } = req.body;
  const ast = createRule(rule_string);

  const newRule = new Rule({ rule_name, root: ast });
  await newRule.save();

  res.json(newRule);
});

router.get("/", async (req, res) => {
  const rules = await Rule.find();
  res.json(rules);
});

router.post("/evaluate", async (req, res) => {
  const { rule_id, data } = req.body;
  const rule = await Rule.findById(rule_id);

  const evaluateRule = (ast, data) => {
    if (ast.type === "operand") {
      return data[ast.value];
    } else {
      const leftEval = evaluateRule(ast.left, data);
      const rightEval = evaluateRule(ast.right, data);
      return ast.value === "AND"
        ? leftEval && rightEval
        : leftEval || rightEval;
    }
  };

  const result = evaluateRule(rule.root, data);
  res.json({ result });
});

export default router;
