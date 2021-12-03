

const BusinessHeader = ({establishment}) => {
    return(
        <section className='business-header'>
            <div>
                <h1>{establishment.name}</h1>
                <h3>{establishment.cuisine}</h3>
            </div>
            <div>
                <p>{establishment.phone}</p><p>{establishment.address}</p><a>{establishment.menu}</a>
            </div>
        </section>
    );
}

export default BusinessHeader