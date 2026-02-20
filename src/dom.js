export const renderArtCollection = (pieces) => {
    const galleryArt = document.querySelector('#gallery-art');
    galleryArt.innerHTML = '';

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