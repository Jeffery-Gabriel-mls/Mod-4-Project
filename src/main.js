import { artCollection, artPiece } from "./fetch";
import { renderArtCollection, renderSingleArt, renderFilters } from "./dom";

const loadGallery = async () => {
    const { data, error } = await artCollection()

    if (error || !data) {
        console.log('Error loading ART.');
        return
    }
    renderArtCollection(data);

    renderFilters(data); // builds checkboxes from the actual data

    // tracks selected filters per category
    const selectedFilters = {
        place_of_origin: [],
        artwork_type_title: [],
        artist_title: [],
        category_titles: [],
    };

    document.querySelectorAll('.art-filter').forEach(checkbox => {
        checkbox.addEventListener('change', async () => {
            const field = checkbox.dataset.field;
            const value = checkbox.value;

            if (checkbox.checked) {
                selectedFilters[field].push(value);
            } else {
                const index = selectedFilters[field].indexOf(value);
                selectedFilters[field].splice(index, 1);
            }

            // check if any filters are selected at all
            const hasFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

            if (hasFilters) {
                // filter the already fetched data locally instead of re-fetching
                const filtered = data.filter(piece => {
                    return Object.entries(selectedFilters).every(([field, values]) => {
                        if (values.length === 0) return true; // skip if no filter for this category
                        if (field === 'category_titles') {
                            return piece.category_titles?.some(cat => values.includes(cat));
                        }
                        return values.includes(piece[field]);
                    });
                });
                renderArtCollection(filtered);
            } else {
                renderArtCollection(data); // reset to all pieces
            }
        });
    });

    const galleryArt = document.querySelector('#gallery-art');
    galleryArt.addEventListener('click', async (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        const artId = li.dataset.artId;
        const { data, error } = await artPiece(artId);
        if (error || !data) {
            console.log('Error loading art piece.');
            return;
        }
        renderSingleArt(data);
    });
    // const galleryArt = document.querySelectorAll('#gallery-art li');
    //     galleryArt.forEach((art) => {
    //         art.addEventListener('click', async () => {
    //             const artId = art.dataset.artId;
    //             const { data, error } = await artPiece(artId);
    //             if (error || !data) {
    //                 console.log('Error loading art piece.');
    //                 return;
    //             }
    //             renderSingleArt(data);
    //         })
    //     })
};
loadGallery();