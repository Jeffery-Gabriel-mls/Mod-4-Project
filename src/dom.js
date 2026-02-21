export const renderArtCollection = (pieces) => {
    const galleryArt = document.querySelector('#gallery-art');
    galleryArt.innerHTML = '';


    pieces.filter(piece => piece.image_id);
    pieces.forEach(piece => {
        const imgUrl = `https://www.artic.edu/iiif/2/${piece.image_id}/full/843,/0/default.jpg`


        const li = document.createElement('li');
        li.dataset.artID = piece.id

        const img = document.createElement('img');
        img.src = imgUrl
        img.alt = piece.title;


        li.appendChild(img);
        galleryArt.appendChild(li);

    });
};

export const renderSingleArt = (art) => {
    // grabbing the "Landing Page" section from HTML
    const soloSection = document.getElementById('art-solo-mvp-details');
    soloSection.innerHTML = ''; // clears previous content
    soloSection.showModal();

    // creating the element "figure" that will hold the art and its details
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = art.image_id;
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
