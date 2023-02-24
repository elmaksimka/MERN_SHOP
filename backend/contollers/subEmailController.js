const SubEmail = require("../models/subEmailModel");

const getSubEmails = (req, res) => {
  SubEmail.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const postSubEmails = async (req, res) => {
  const { email } = req.body;

  const subEmail = new SubEmail({
    email,
  });

  try {
    const emailExists = await SubEmail.findOne({ email: email });

    if (emailExists) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const emailSave = await subEmail.save();

    if (emailSave) {
      res.status(201).json({ email: subEmail.email });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getSubEmails,
  postSubEmails,
};
