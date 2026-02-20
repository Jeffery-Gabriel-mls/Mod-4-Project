import { artCollection } from "./fetch";
import { renderArtCollection } from "./dom";

const loadGallery = async () => {
    const { data, error } = await artCollection()
}
loadGallery()