const Details = require("../models/DetailsSchema");

const getalldata = async (req, res) => {
  const details=await Details.find();
  return res.status(201).send({
    success: true,
    message: "details fetched",
    details,
  });
};

const storealldetails = async (req, res) => {
  try {
    const detail = new Details(req.body);
    await detail.save();

    return res.status(201).send({
      success: true,
      message: "details added successfully...",
      detail,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "An error occurred during adding",
    });
  }
};

module.exports = { getalldata, storealldetails };
