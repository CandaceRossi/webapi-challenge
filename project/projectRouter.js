const express = require("express");
// const validateUserId = require("../middleware/validateUserId.js");
// const validateUser = require("../middleware/validateUser.js");
// const validatePost = require("../middleware/validatePost.js");
const router = express.Router();
const Projects = require("./projectModel.js");

router.post("/", validateProject, (req, res) => {
  //   Projects.insert(req.body)
  //     .then(project => {
  //       res.status(201).json(project);
  //     })
  //     .catch(err => {
  //       res.status(500).json({
  //         message: "Error adding the user."
  //       });
  //     });
});

router.post("/:id/posts", validateProjectId, validateProject, (req, res) => {
  //   Projects.insert(req.body)
  //     .then(project => {
  //       res.status(201).json(project);
  //     })
  //     .catch(err => {
  //       console.log("error: ", err);
  //       res.status(500).json({
  //         message: "Project error!"
  //       });
  //     });
});

router.get("/", (req, res) => {
  //   Project.get()
  //     .then(project => {
  //       res.status(200).json(project);
  //     })
  //     .catch(err => {
  //       res.status(500).json({ message: "Error retrieving projects." });
  //     });
});

router.get("/:id", validateProjectId, (req, res) => {
  //   const id = req.params.id;
  //   Projects.getById(id)
  //     .then(project => {
  //       res.status(200).json(project);
  //     })
  //     .catch(err => {
  //       res.status(500).json({ message: "Error to retriving project." });
  //     });
});

router.get("/:id/posts", validateUserId, (req, res) => {
  //   Users.getUserPosts(req.params.id)
  //     .then(post => {
  //       res.status(201).json(post);
  //     })
  //     .catch(err => {
  //       res.status(500).json({ message: "Error getting project." });
  //     });
});

router.delete("/:id", validateProjectId, (req, res) => {
  //   const id = req.params.id;
  //   Projects.remove(id)
  //     .then(countDeleted => {
  //       if (countDeleted) {
  //         res
  //           .status(200)
  //           .json({ message: `Project with ${id} has been deleted`, id: id });
  //       } else {
  //         res.status(404).json({ errorMessage: "No project found." });
  //       }
  //     })
  //     .catch(err => {
  //       res.status(500).json({ message: "internal Server Error" });
  //     });
});

router.put("/:id", validateProject, validateProjectId, (req, res) => {
  //   const id = req.params.id;
  //   const changes = req.body;
  //   Projects.update(id, changes)
  //     .then(project => {
  //       res.status(201).json(project);
  //     })
  //     .catch(err => {
  //       res.status(500).json({ message: "Error updating project" });
  //     });
});

module.exports = router;
