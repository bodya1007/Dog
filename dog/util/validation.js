const Dog = require('../model/dog.model');

function isHexColor(color) {
  // Перевірка на шестнадцятковий код
  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
    return true;
  }

  // Перевірка на кольори-слова
  const wordColors = [
    'red', 'blue', 'white', 'black', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown',
    'gray', 'beige', 'cyan', 'magenta', 'silver', 'gold', 'turquoise', 'lavender', 'indigo', 'maroon'
  ];

  if (wordColors.includes(color.toLowerCase())) {
    return true;
  }

  return false;
}

const validateDogData = async (req, res, next) => {
  const { name, color, tail_length, weight } = req.body;

  if (!name || !color || !tail_length || !weight) {
    return res.status(400).send('Missing required fields.');
  }

  if (name.length > 40 || name.length < 4) {
    return res.status(400).send('Name should be between 4 and 40 characters long.');
  }

  if (!isHexColor(color)) {
    return res.status(400).send('Invalid color provided.');
  }
  if (isNaN(tail_length) || tail_length < 0) {
    return res.status(400).send('Invalid tail_length provided.');
  }
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send('Invalid weight provided.');
  }

  try {
    const existingDog = await Dog.findOne({ where: { name } });
    if (existingDog) {
      return res.status(400).send('A dog with the same name already exists.');
    }
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }

  next();
};

module.exports = validateDogData;
