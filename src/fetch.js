export const artCollection = async () => {
  try {
    const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artwork_type_title,description,place_of_origin,term_titles,artist_display,credit_line,artist_title,category_titles');
    // const response = await fetch(`https://api.artic.edu/api/v1/artworks/129884`)
    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    const art = await response.json();
    // console.log(art.data) test
    return { data: art.data, error: null }
  } catch (error) {
    console.error(`Error caught!`, error);
    return { data: null, error: error }
  };
}
// artCollection(); test 