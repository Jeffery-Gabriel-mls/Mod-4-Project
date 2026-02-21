import { artCollection, artPiece } from "./fetch";
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
            const { data, error } = await artPiece(artId);
            if (error || !data) {
                console.log('Error loading art piece.');
                return;
            }
            renderSingleArt(data);
        })
    })
};
loadGallery();


