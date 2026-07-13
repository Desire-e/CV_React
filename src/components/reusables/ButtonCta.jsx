function ButtonCta({children, route="#"}) {
  return (
    <a role="button" href={route} className="btn-cta">
        {children}
    </a>
  );
}
export default ButtonCta;