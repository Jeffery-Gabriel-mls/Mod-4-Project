import { artCollection } from "./fetch";
import { renderArtCollection } from "./dom";

const loadGallery = async () => {
    const { data, error } = await artCollection()

    if (error || !data) {
        console.log('Error loading ART.');
        return
    }
    renderArtCollection(data);
};
loadGallery();