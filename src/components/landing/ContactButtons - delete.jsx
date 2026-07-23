import Button from 'react-bootstrap/Button';
import contactInfo from '../../data/contact.json'


function ContactButtons() {
    // Organizar datos sin un json
    /*
    const contactInfo = [
        {
            info:'desireeruedatorresalmeria@gmail.com',
            type:'mail',
            description:'Correo'
        }, 
        {
            info:'+34 000 00 00 00',
            type:'phone',
            description:'Teléfono'
        },
        {
            info:'Desiree rueda Torres',
            type:'page',
            description:'Linkedin',
            url:'https://www.google.com/'
        },
        {
            info:'desire-e',
            type:'page',
            description:'GitHub',
            url:'https://github.com/desire-e'
        } 
    ];*/

    // Devuelve datos
    const getHref = (contact) => {
        if (contact.type === 'mail') return `mailto:${contact.info}`;
        if (contact.type === 'phone') return `tel:${contact.info}`;
        if (contact.type === 'page') return contact.url;
        return '#'; // fallback
    };

    /* href="mailto:..." -- Para que un botón en HTML abra Gmail 
    (o cualquier cliente de correo predeterminado) y prepare un 
    correo a una dirección concreta 
    
    No se usa <Link>: está pensado solo para navegar dentro de tu 
    app React, (las rutas que maneja el BrowserRouter)
    No puede abrir apps externas ni URLs especiales (mailto:, tel:, https: externas).
    */

    /* target="_blank" -- El enlace se abrirá en una nueva pestaña. */

    /* rel="noopener noreferrer" -- noopener evita que la página que abres 
    pueda acceder a tu ventana con window.opener.
    noreferrer evita que la página externa vea la URL de tu página como “referer”.
    (la URL de la página desde la que llegaste a otra página.) 
    */

  return (
    <>
        {contactInfo.map((contact, index) => (
            <Button
            key={index}
            href={getHref(contact)} // devuelve la URL / mailTo:... / tel:...
            target='_blank' // abrir en nueva pestaña
            rel='noopener noreferrer' // seguridad solo para links externos
            >
                {contact.description}
            </Button>
        ))}
    </>
  );
}

export default ContactButtons;