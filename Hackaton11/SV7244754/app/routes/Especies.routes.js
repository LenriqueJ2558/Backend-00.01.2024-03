
module.exports = app => {
    const rEspecies = require("../controllers/Especie.controller.js");
   // const tags = require("../controllers/tag.controller.js");
    var router = require("express").Router();

    router.post("/", rEspecies.create);
    /*router.get("/", tutorials.findAll);
    router.get("/:id", tutorials.findOne);
    router.put("/:id",tutorials.update);
    router.delete("/:id", tutorials.delete);
    router.delete("/", tutorials.deleteAll);
    router.get("/published/:id", tutorials.findAllPublished);

    router.post("/comment/:id", tutorials.createComment);

    router.post("/tag", tags.create);
    router.get("/tag/:id", tags.findAll);
    router.post("/tag/tutorial", tags.addTutorial)*/


    app.use('/api/veterinaria/especies', router);
}