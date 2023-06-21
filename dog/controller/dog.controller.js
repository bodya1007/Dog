const DogService = require('../service/dog.service');

class DogController {
  ping(req, res) {
    res.send('Dogshouseservice.Version1.0.1');
  }

  async getDogs(req, res) {
    const { attribute, order, pageNumber, pageSize } = req.query;
    const queryOptions = {};

    if (attribute && order) {
      queryOptions.attribute = attribute;
      queryOptions.order = order;
    }

    if (pageNumber && pageSize) {
      queryOptions.pageNumber = parseInt(pageNumber);
      queryOptions.limit = parseInt(pageSize);
    }

    try {
      const dogs = await DogService.getAllDogs(queryOptions);

      res.json(dogs);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }
  async createDog(req, res) {
    const { name, color, tail_length, weight } = req.body;

    try {
      const dog = await DogService.createDog({ name, color, tail_length, weight });
      res.json(dog);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new DogController();
