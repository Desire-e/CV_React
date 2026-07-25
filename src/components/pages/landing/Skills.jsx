import './Skills.css';
import skills from '../../../data/landing/skills.json';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CardsStack from './CardsStack';

function Skills() {

  return (
    <>
        <div id="skills"></div>

        <div className="contenido skills">

            <h2>Habilidades</h2>

            <CardsStack
                data={skills}
                />
        </div>
    </>

  );
}

export default Skills;