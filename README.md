# *Tika Taka*

Tiki Taka is an interactive art gallery web app that lets users browse and examine many of the artworks from the Art Institute of Chicago API.

## *Site*
https://jeffery-gabriel-mls.github.io/Mod-4-Project/

**By:** Gabriel C, Jeffrey C

Api used: 
- https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artwork_type_title,description,place_of_origin,artist_display,artist_title,category_titles

## *FEATURES*

### *MVP*
- Browse all artworks with pagination/navigation
- Modal view to examine individual pieces in detail
### *STRETCH*
- Filter by place of origin, category type
- Blur affect on "Modal"
- Interactive hover affects
## *SETUP*
``` js
npm install

npm run dev
```

## *TECH STACK*
HTML - CSS - JavaScript - Vite


**Features include a main screen that allows navigation through all the art pieces.**

<img width="2880" height="1557" alt="image" src="https://github.com/user-attachments/assets/741f7cee-a7ba-46b5-9a9f-071b2051fcc6" />

**And examine as if you are grabbing it yourself!**

<img width="2880" height="1558" alt="image" src="https://github.com/user-attachments/assets/f706718a-d734-4899-acfc-2793f6fd3f64" />


**Filter out your desired search choices!**

<img width="250" height="800" alt="Screenshot 2026-02-24 at 9 32 14 PM" src="https://github.com/user-attachments/assets/57d6e808-894c-4429-8892-485a7e792f28" />

## *KNOWN LIMITATIONS*
- Unable to properly adapt the page for mobile devices
- No drop-down for the list of filters each category has
- No `localStorage`, will add a "bookmark" feature in the future

## *Claude.AI Usage*
Claude.ai Usage link: https://claude.ai/share/a184d4e6-cdb3-4119-b859-a2f7bda37436
