const { products } = require("../data/products"); // ✅ fix here

const getAllProducts = (req, res) => {
  const { category, subcategory } = req.query;

  let filtered = products;

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (subcategory) {
    filtered = filtered.filter(
      (p) => p.subcategory?.toLowerCase() === subcategory.toLowerCase()
    );
  }

  res.json(filtered);
};

module.exports = { getAllProducts };
