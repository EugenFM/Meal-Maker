
const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this.courses[courseName].push(dish);
  },

  getRandomDishFromCourse: function (courseName) {
    const dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is: ${appetizer.name}, ${main.name}, and ${dessert.name}.
     Total cost: $${totalPrice}.`
  }
};

menu.addDishToCourse('appetizers', 'Omlette', 14);
menu.addDishToCourse('appetizers', 'Pancakes', 12);
menu.addDishToCourse('appetizers', 'Belgian Waffles', 14);

menu.addDishToCourse('mains', 'Pork chops', 22);
menu.addDishToCourse('mains', 'Alaskan Salmon', 20);
menu.addDishToCourse('mains', 'T-bone Steak', 24);

menu.addDishToCourse('desserts', 'Tiramisu', 12);
menu.addDishToCourse('desserts', 'Hot Chocolate', 10);
menu.addDishToCourse('desserts', 'Creme Brulee', 15);

const meal = menu.generateRandomMeal()
console.log(meal);

