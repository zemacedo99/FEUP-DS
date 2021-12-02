import React from 'react';
// import ReactDOM from 'react-dom';

class Pattern extends React.Component {
  constructor() {
    super();
    this.title = 'The Spirit of the Game';
    this.stars = 2;
    this.section = 'Product Organization Pattern Language';
    this.image = 'IMAGE: TODO';
    this.introduction = '...the Scrum framework does not have all the answers, which means that the team cannot look to Scrum for direction when it does not give a final answer.';
    this.problem = 'Written rules might give concrete guidance for how to work together, but spirit is part of culture that guides interactions and may be discerned only when ignored or violated.';
    this.solution = 'When using Scrum, the product community must focus on explicitly creating a culture in the organization where people know and follow the spirit of Scrum.';
    this.related = '0';
  }

  getTitle() {
    return this.title;
  }

  getStars() {
    return this.stars;
  }

  getSection() {
    return this.section;
  }

  getImage() {
    return this.image;
  }

  getIntroduction() {
    return this.introduction;
  }

  getProblem() {
    return this.problem;
  }

  getSolution() {
    return this.solution;
  }

  getRelated() {
    return this.related;
  }

  render() {
    return;
  }
}

export default Pattern;