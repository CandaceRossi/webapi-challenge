const Actions = require("../action/actionModel.js");

function validateActionId(req, res, next) {
  const { id } = req.params;

  Actions.get(id).then(actions => {
    if (actions) {
      req.actions = actions;
      next();
    } else {
      res.status(400).json({ message: "Invalid user id" });
    }
  });
}
module.exports = validateActionId;
