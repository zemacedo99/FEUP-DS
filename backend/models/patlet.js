class Patlet {
  constructor(id, image, introduction, linkedPatlets, problem, solution, stars, title) {
    this.id = id;
    this.image = image;
    this.introduction = introduction;
    this.linkedPatlets = linkedPatlets;
    this.problem = problem;
    this.solution = solution;
    this.stars = stars;
    this.title = title;
  }
}

module.exports = Patlet;
