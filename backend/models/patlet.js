class Patlet {
  constructor(id, image, introduction, graph_po, graph_vs, linkedPatlets, problem, solution, stars, title) {
    this.id = id;
    this.image = image;
    this.introduction = introduction;
    this.linkedPatlets = linkedPatlets;
    this.graph_po = graph_po;
    this.graph_vs = graph_vs;
    this.problem = problem;
    this.solution = solution;
    this.stars = stars;
    this.title = title;
  }
}

module.exports = Patlet;
