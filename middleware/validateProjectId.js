const Projects = require("../project/projectModel.js");

function validateProjectId(req, res, next) {
  const { id } = req.params;

  Projects.get(id).then(projects => {
    if (projects) {
      req.projects = projects;
      next();
    } else {
      res.status(400).json({ message: "Invalid Project id" });
    }
  });
}
module.exports = validateProjectId;
