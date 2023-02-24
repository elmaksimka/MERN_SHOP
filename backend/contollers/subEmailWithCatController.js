const SubEmailWithCat = require("../models/subEmailWithCatModel");

const getSubEmailsWithCats = (req, res) => {
  SubEmailWithCat.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const postSubEmailsWithCats = async (req, res) => {
  const { email, checkbox } = req.body;

  const subEmailWithCat = new SubEmailWithCat({
    email,
    checkbox,
  });

  try {
    const emailExists = await SubEmailWithCat.findOne({ email: email });

    if (emailExists) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const emailSave = await subEmailWithCat.save();

    if (emailSave) {
      res.status(201).json({
        email: subEmailWithCat.email,
        checkbox: subEmailWithCat.checkbox,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getSubEmailsWithCats,
  postSubEmailsWithCats,
};
