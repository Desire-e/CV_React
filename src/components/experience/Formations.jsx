import FormationDropdown from "../FormationDropdown";
import formations from "../../data/experience/formations.json";

function Formations(){
    return(
        <>
            {formations.map((formation) => (
                <FormationDropdown 
                key={formation.id} 
                title={formation.title} 
                course={formation.course} 
                knowns={formation.knowns} />
            ))}
        </>
    );
}
export default Formations;