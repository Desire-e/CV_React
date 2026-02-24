import experiences from '../../data/experience/experiences.json';
import CardWide from '../CardWide';


function Experiences() {
  return (
        <>
            {experiences.map((exper) => (
                <CardWide key={exper.id} {...exper} colorClass="bg-primary-item" />
            ))}
        </>
  );
}

export default Experiences;