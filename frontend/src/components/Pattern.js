import React from 'react';
//import ReactDOM from 'react-dom';

class Pattern extends React.Component {
    constructor() {
        super();
        this.title = "The Spirit of the Game";
        this.stars = 2;
        this.section = "Product Organization Pattern Language"
        this.image = "IMAGE: TODO"
        this.introduction = "";
        this.problem = "Written rules might give concrete guidance for how to work together, but spirit is part of culture that guides interactions and may be discerned only when ignored or violated.";
        this.solution = "Scrum requires a spirit of interaction between people, and that spirit can be difficult to define. This spirit is part of the culture of the organization and may be indiscernible for the people within the culture. Though it may be difficult to define, the spirit is easy to recognize when it is broken. Scrum is a lightweight process framework which is simple to understand but difficult to master. [3] Because it is easy to understand, people tend to fill in their blind spots with assumptions. It’s easy to assume that Scrum requires only simple changes in work practices, while missing its core spirit. Consequently, some treat Scrum as instructions rather than as guiding principles. Scrum itself does not give any answers but creates transparency on a daily basis, so team members can start to gain insights into how they work together. With this insight, they can start to improve. Culture plays out in habits, and changing habits is difficult. Moving from a command-and-control organization to Autonomous Teams might feel uncomfortable for developers as they are faced with the need to think more for themselves. It might make managers feel that they are losing power as the teams can make decisions without their approval. Individuals in the organization might balk at changing behavior with the excuse that “we have always done it like this.” We may take comfort in the fact that what we are doing now works in some known way. We don’t want to mess with that success—just tweak it a bit. Thus can an organization sabotage Scrum by holding on to old ways of working. The standing organizational design can be at odds with Scrum principles. For example, a Vice President might demand a fixed date and scope, creating constraints that the team cannot satisfy. This will likely lead to unintended consequences such as poor quality or burnout. Another example is when a project manager requests daily reports from the Development Team: it telegraphs suspicion instead of trust, wasted time instead of efficiency, and an expectation of control instead of autonomy. In Scrum, the Development Team should be an Autonomous Team and a Self-Organizing Team. There is no hierarchy within the team. This is easier said than done because prior hierarchy might persist. One example on an organizational level is when a manager “tries to improve” the Scrum implementation by using the team’s development tracking tool for individual performance assessment. The focus turns from teams to individuals, and such metrics are at best second- or third-hand measurements that abstract away crucial contributions beyond the number of bricks they have laid that day. This thwarts team autonomy and self-organization, and may constrain the way the team works (individuals act in accordance with measurements instead of their own effectiveness, perhaps to optimize their financial compensation) so it falls short of its potential effectiveness. Another example is when a resource manager changes the team composition every Sprint trying to optimize the knowledge needed for each Sprint: this of course robs the team of self-organization opportunities and destroys their autonomy. Scrum is about teamwork, but some prefer to pursue personal success instead of team success, or even broader definitions of success. In the land of the blind, the one-eyed man is king. Anyone in the organization can assert their authority by claiming they can see what others don’t. A team member, a Vice President, or a manager can assert any outlandish measure, using the excuse that it does not violate any rules in The Scrum Guide. Some misunderstand the spirit, ignore the spirit, or are coerced to break the spirit. That the question of “compliance” even arises is itself outside the spirit. The examples from the earlier paragraph are not literally in contradiction with The Scrum Guide, but neither are they in the spirit of the Agile Manifesto and its sixteen principles, which are mainly about people, their interactions, and change. [4] As Scrum is under the umbrella of these values, it stands against what these examples say about their organizations, based on at least one of the principles: “Build projects around motivated individuals. Give them the environment and support their needs, and trust them to get the job done.” "
        this.related = "0"
    }

    getTitle() {
        return this.title
    }
    
    getStars() {
        return this.stars
    }

    getSection() {
        return this.section
    }

    getImage() {
        return this.image
    }

    getIntroduction() {
        return this.introduction
    }

    getProblem() {
        return this.problem
    }

    getSolution() {
        return this.solution
    }

    getRelated() {
        return this.related
    }
    
    render() {
        return 
    }
}

export default Pattern;