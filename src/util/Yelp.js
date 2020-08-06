const apiKey = 'bm3n9RP1YflZhrZTdIrK82lhe1bXYdZc1FhUSu-FADfWvDUY2mwBd-oMiJygXfCq9ztBC4XGEun6uS00h4lYgyNUUY7uSn6-_4lPiXf4pSKFJMNeI1FWL3HEQh8BX3Yx'; // Insert API key here.

 const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
