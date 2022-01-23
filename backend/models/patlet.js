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
    link,
  ) {
    const languages = [];
    if (graphPo) languages.push('Product Organization Pattern Language');
    if (graphVs) languages.push('Value Stream Pattern Language');
    this.id = id;
    this.image = image;
    this.introduction = introduction;
    this.linkedPatlets = linkedPatlets;
    this.graphPo = graphPo;
    this.graphVs = graphVs;
    this.languages = languages;
    this.problem = problem;
    this.solution = solution;
    this.stars = stars;
    this.title = title;
    this.link = link;
  }
}

module.exports = Patlet;
