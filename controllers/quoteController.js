const Quote = require("../models/Quote");

module.exports = {
  getQuote: async (req, res) => {
    try {
      let quote = await Quote.findOne({});

      if (!quote) {
        quote = { quote: "THINK TWICE CODE ONCE" };
        const newQuote = new Quote(quote);

        await newQuote.save();
      }

      res.status(200).json(quote);
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  },
};
