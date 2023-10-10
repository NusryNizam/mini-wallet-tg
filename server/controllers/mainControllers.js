const Entry = require("../models/Entry.model");
const validator = require("validator");

const getEntries = async (req, res, next) => {
  try {
    let user = req.user;
    console.log(user);

    const products = await Entry.find({ user: user }).populate("user").exec();
    res.status(200).send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const addEntry = (req, res, next) => {
  let { user, name, category, amount, date } = req.body;
  //   console.log(req.body);
  let newEntry = new Entry({
    user,
    name,
    category,
    amount,
    date,
  });

  newEntry.save((err) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    res.status(200).send({ message: "Entry successfully added" });
    return;
  });
};

const deleteEntries = (req, res, nex) => {
  Entry.deleteMany(
    {
      _id: {
        $in: req.body,
      },
    },
    function (err, result) {
      if (err) {
        res.status(500).send({ error: err.message });
      } else {
        res.status(200).send(result);
      }
    }
  );
};

const getEntriesByMonth = async (req, res) => {
  const { year, month } = req.params;

  if (
    !validator.isInt(year, { min: 1900, max: 3000 }) ||
    !validator.isInt(month, { min: 1, max: 12 })
  ) {
    return res.status(400).json({ error: "Invalid year or month." });
  }

  const startDate = new Date(year, month - 1, 1); // month is 0-based index in JavaScript Date object
  const endDate = new Date(year, month, 0);

  console.log(req.params);

  try {
    const entries = await Entry.aggregate([
      {
        $match: {
          date: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    const result = {
      month: month,
      year: year,
      entries: entries,
    };

    if (entries.length === 0) {
      return res.status(200).send({
        month: month,
        year: year,
        entries: [
          {
            _id: "income",
            total: 0,
          },
          {
            _id: "expense",
            total: 0,
          },
        ],
      });
    }

    return res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

module.exports = {
  getEntries,
  addEntry,
  deleteEntries,
  getEntriesByMonth,
};
