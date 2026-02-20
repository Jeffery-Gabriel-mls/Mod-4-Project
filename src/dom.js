// export async const fetchSinglePiece = (url) => {
//     const response = await fetch(url);
//     const art = await response.json();
// }
export async const renderSingleArt = (art) => {
    // grabbing the "Landing Page" section from HTML
    const soloSection = document.getElementById('art-solo-mvp-details');

    // creating the element "figure" that will hold the art and its details
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = art.data.image_id;
    img.alt = art.data.title;

    // figcaption holds all the "detail" elements
    const figcaption = document.createElement('figcaption');

    const title = document.createElement('h2');
    title.textContent = art.data.title;

    const placeOfOrigin = document.createElement('p');
    placeOfOrigin.textContent = art.data.place_of_origin;

    const artistName = document.createElement('p');
    artistName.textContent = art.data.artist_display;
    //-------- OR ----------
    // artistName.textContent = art.data.artist_title;

    const description = document.createElement('p');
    description.textContent = art.data.description;

    const creditLine = document.createElement('p');
    creditLine.textContent = art.data.credit_line



};