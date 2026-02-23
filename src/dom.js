import { artCollection, artPiece } from "./fetch";




export const renderArtCollection = (pieces) => {
    const galleryArt = document.querySelector('#gallery-art');
    galleryArt.innerHTML = '';


    pieces.filter(piece => piece.image_id);
    pieces.forEach(piece => {
        const imgUrl = `https://www.artic.edu/iiif/2/${piece.image_id}/full/843,/0/default.jpg`


        const li = document.createElement('li');
        li.dataset.artId = piece.id

        const img = document.createElement('img');
        img.src = imgUrl
        img.alt = piece.title;


        li.appendChild(img);
        galleryArt.appendChild(li);

    });
};
const soloSection = document.querySelector('#art-solo-mvp-details');
// const artImgId = await artPiece(art.image_id);

export const renderSingleArt = (art) => {
    // grabbing the "Landing Page" section from HTML

    soloSection.innerHTML = ''; // clears previous content
    soloSection.showModal();


    // creating the element "figure" that will hold the art and its details
    const figure = document.createElement('figure');


    const imgUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = art.title;

    // figcaption holds all the "detail" elements
    const figcaption = document.createElement('figcaption');

    const title = document.createElement('h2');
    title.textContent = art.title;

    const placeOfOrigin = document.createElement('p');
    placeOfOrigin.textContent = art.place_of_origin;

    const artistName = document.createElement('p');
    artistName.textContent = art.artist_display;
    //-------- OR ----------
    // artistName.textContent = art.data.artist_title;

    const description = document.createElement('p');
    description.innerHTML = art.description;

    // appending the elements to fit our desired formatting
    figcaption.append(title, description, artistName, placeOfOrigin);
    figure.append(img, figcaption);
    soloSection.appendChild(figure);
};

export const renderFilters = (pieces) => {
    /*
    unique values for each category. In soccer terms, each player has stats:
    their nationality, position, club, and their name.
    .map() goes through each player and grabs THAT stat
    new Set() removes duplicates 
    .filter() removes blank entries, ex. player with no nationality
    */
    const origins = [...new Set(pieces.map(p => p.place_of_origin).filter(Boolean))];
    const artTypes = [...new Set(pieces.map(p => p.artwork_type_title).filter(Boolean))];
    const artists = [...new Set(pieces.map(p => p.artist_title).filter(Boolean))];
    const categories = [...new Set(pieces.flatMap(p => p.category_titles).filter(Boolean))];

    // map each category to its filter container in the HTML
    const filterMap = {
        'place_of_origin': { values: origins, containerId: 'filter-origin' },
        'artwork_type_title': { values: artTypes, containerId: 'filter-type' },
        'artist_title': { values: artists, containerId: 'filter-artist' },
        'category_titles': { values: categories, containerId: 'filter-category' },
    };

    Object.entries(filterMap).forEach(([field, { values, containerId }]) => {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        values.forEach(value => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = value;
            checkbox.dataset.field = field; // stores which category it belongs to
            checkbox.classList.add('art-filter'); // shared class for all filter checkboxes
            label.append(checkbox, value);
            container.appendChild(label);
        });
    });
};

soloSection.addEventListener('click', (e) => {
    if (e.target === soloSection) {
        soloSection.close();
    }
})
