const express = require("express");
const userSchema = require("../module/user");

const router = express.Router();

//crear pokemonFavorito

router.post("/favorito", (req,res) => {
    res.send("agregar pokemon Favoritos")
})


router.get("/favoritos", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  

  router.get("/favoritos/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });