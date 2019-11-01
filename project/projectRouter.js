const express = require("express");
const validateProjectId = require("../middleware/validateProjectId.js");
const validateProject = require("../middleware/validateProject.js");

const router = express.Router();
const Projects = require("./projectModel.js");

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Error retrieving projects." });
    });
});

router.get("/:id", validateProjectId, (req, res) => {
  const id = req.params.id;
  Projects.get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Error to retriving project." });
    });
});

router.post("/", validateProject, (req, res) => {
  Projects.insert(req.body)
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error adding the user."
      });
    });
});

router.delete("/:id", validateProjectId, (req, res) => {
  const id = req.params.id;
  Projects.remove(id)
    .then(countDeleted => {
      if (countDeleted) {
        res
          .status(200)
          .json({ message: `Project with ${id} has been deleted`, id: id });
      } else {
        res.status(404).json({ errorMessage: "No project found." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "internal Server Error" });
    });
});

router.put("/:id", validateProject, validateProjectId, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Projects.update(id, changes)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Error updating project" });
    });
});

module.exports = router;
