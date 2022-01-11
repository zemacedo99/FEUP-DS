class Patlet {
  constructor(
    id,
    image,
    introduction,
    graphPo,
    graphVs,
    linkedPatlets,
    problem,
    solution,
    stars,
    title,
    ref,
  ) {
    this.id = id;
    this.image = image;
    this.introduction = introduction;
    this.linkedPatlets = linkedPatlets;
    this.graphPo = graphPo;
    this.graphVs = graphVs;
    this.problem = problem;
    this.solution = solution;
    this.stars = stars;
    this.title = title;
    this.ref = ref;
  }
}

module.exports = Patlet;
