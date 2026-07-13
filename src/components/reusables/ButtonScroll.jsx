function ButtonScroll({scrollDown, position="#"}) {
    return (
    <a role="button" href={position} className="button-scroll">

        {/* &&: short-circuit evaluation. 
        A && B significa "si A es falsy, devuelve A (sin siquiera mirar B). Si A es truthy, devuelve B." 
        
        {scrollDown && <i class="bi bi-chevron-down"></i>} */}
        
        { scrollDown ? 
        <i className="bi bi-chevron-down"></i> : 
        <i className="bi bi-chevron-up"></i> }
    </a>
  );
}
export default ButtonScroll;