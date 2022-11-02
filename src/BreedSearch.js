const BreedSearch = () => {
    axios({
        url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
      },
    }).then((response) => {
     setAllPhotos(response.data.message)
  
    })
}

export default BreedSearch;