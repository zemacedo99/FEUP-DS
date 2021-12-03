import Pattern from '../components/Pattern'
import '../style/PatternInfoPage.css'
import { FaStar } from 'react-icons/fa';

export default function PatternInfoPage() {
    var pat = new Pattern();
    var related = new Pattern();
    var stars_pat = [];
    var stars_related =[];
    for (var i = 0; i < pat.getStars(); i++) {
        stars_pat.push(<FaStar key={i} />);
    } 
    for (var i = 0; i < related.getStars(); i++) {
        stars_related.push(<FaStar key={i} />);
    } 
    return (
        <div>
            <div className="pattern_header">
                <h1>{pat.getTitle()}</h1>
                <p className="patternSection">{pat.getSection()}</p>
                <p className="pattern_stars">{stars_pat}</p>
            </div>
            <div className="pattern_body"> 
                <p>{pat.getImage()}</p>
                <p>{pat.getIntroduction()}</p>
                <p className="pattern_problem">{pat.getProblem()}</p>
                <p className="pattern_solution">{pat.getSolution()}</p>
                <p className="pattern_related_title">Related Patterns</p>
                <div className="pattern_related">
                    <p className="related_title"> {related.getTitle()}</p>
                    <p className="related_stars"> {stars_related}</p>
                </div>
            </div>
        </div>
    )

}