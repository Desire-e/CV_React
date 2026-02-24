import collaborations from '../../data/experience/collaborations.json';
import CardWide from '../CardWide';

function Collaborations() {
  return (
        <>
            {collaborations.map((collab) => (
                <CardWide key={collab.id} {...collab} colorClass="bg-secondary-item"/>
            ))}
        </>
  );
}

export default Collaborations;