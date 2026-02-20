import { artCollection } from "./fetch";
import { renderArtCollection, renderSingleArt } from "./dom";

const loadGallery = async () => {
    const { data, error } = await artCollection()

    if (error || !data) {
        console.log('Error loading ART.');
        return
    }
    renderArtCollection(data);

    const galleryArt = document.querySelectorAll('#gallery-art li');
    galleryArt.forEach((art) => {
        art.addEventListener('click', async () => {
            const artId = art.dataset.artId;
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artId}?fields=title,image_id,description,place_of_origin,artist_display,artist_title,credit_line`);
            const data = await response.json();
            renderSingleArt(data.data);
        })
    })
};
loadGallery();