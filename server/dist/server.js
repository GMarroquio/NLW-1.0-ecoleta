"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const app = _express2.default.call(void 0, );

app.get("/users", (req, res) => {
  res.json({ users: ["joao", "pedro", "gustavo"] });
});

app.listen(3333);
