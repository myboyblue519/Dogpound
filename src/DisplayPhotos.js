function DisplayPhotos(photos) {
console.log(photos)
    return (
      <section>
        {photos.length === 0 ? (
        <h2>No photos found!</h2>
      ): (
      <>
        <h2>Dogs!</h2>
        <div className="photos">
        {photos.map((dogs) => {
          return (
            <div className="photo-container" key={photos.dogs}>
              <img src={photos.dogs} />
            </div>
          );
        })}
        </div>
      </>
      )}
      </section>
    );
  }
console.log()
  export default DisplayPhotos;