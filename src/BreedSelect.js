const BreedSelect = () => {
    const handleClick = () => {

       }
    return (
              <div className="App">
                <Header />
            
                
                <button onClick={handleClick}>Show me a random dog</button>
                <section className='photoDisplay'>
                {
                  allPhotos
                    ? <img src={allPhotos} alt="" />
                    : null
                }
                </section>
                </div>
                )
        
}

export default BreedSelect;

