import Card from 'react-bootstrap/Card';
import skills from '../../data/landing/skills.json';

function CardSkills() {

  return (
        /* key -- identificador único de cada elemento en una lista
        Ayuda a React a actualizar solo los elementos que cambian
        Evita warnings y posibles bugs en componentes dinámicos 
        */
        <>
            {skills.map((skill) => (
                <Card key={skill.id}>
                    <Card.Body>
                        <Card.Title>{skill.title}</Card.Title>

                        <div><i className={skill.icon} style={{ fontSize: "2rem" }}></i></div>

                        
                        {skill.items.map((item, index) => (
                            <Card.Text key={index}>{item}</Card.Text>
                        ))}
                    </Card.Body>
                </Card>
            ))}
        </>
  );
}

export default CardSkills;