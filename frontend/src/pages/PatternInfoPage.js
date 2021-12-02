//import {Button} from 'react-bootstrap';
import Pattern from '../components/Pattern';
import '../style/PatternInfoPage.css'

export default function PatternInfoPage() {
    var pat = new Pattern();

    return (
        <div>
            <div className="header">
                <h1>{pat.getTitle()}</h1>
                <p className="patternSection">{pat.getSection()}</p>
                <p>{pat.getStars()}</p>
            </div>
            <body className="body"> 
                <p>{pat.getImage()}</p>
                <p>Introduction: {pat.getIntroduction()}</p>
                <p>Problem: {pat.getProblem()}</p>
                <p>Solution: {pat.getSolution()}</p>
            </body>
        </div>
    )
}