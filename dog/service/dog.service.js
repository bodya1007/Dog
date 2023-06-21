const Dog = require('../model/dog.model');

class DogService {
  async getAllDogs({ attribute, order, pageNumber, limit }) {
    const sortingOptions = attribute && order ? [[attribute, order]] : [];
    const paginationOptions = pageNumber && limit ? { offset: (pageNumber - 1) * limit, limit } : {};

    try {
      const dogs = await Dog.findAll({ order: sortingOptions, ...paginationOptions });
      return dogs;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }

  async createDog({ name, color, tail_length, weight }) {
    try {
      const dog = await Dog.create({ name, color, tail_length, weight });
      return dog;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = new DogService();
