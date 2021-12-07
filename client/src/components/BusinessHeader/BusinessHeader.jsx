import './BusinessHeader.scss'

const BusinessHeader = ({establishment}) => {

    let headerStyle = {
        backgroundImage: `url(http://localhost:5000/${establishment.header_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return(
        <>
            <section className='business-header' style={headerStyle}>
                
            </section>
            <div className='business-header__titles'>
                <h1 className='business-header__place-name'>{establishment.name} |</h1>
                <h3>{establishment.cuisine}</h3>
            </div>
            <div className='business-header__info'>
                <p>{establishment.phone}</p><p>{establishment.address}</p><p>{establishment.menu}</p>
            </div>
        </>
    );
}

export default BusinessHeader