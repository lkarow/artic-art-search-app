import axios from 'axios';

export const getAllArtworks = async (page) => {
  try {
    let response = await axios.get(
      `https://api.artic.edu/api/v1/artworks?[term][is_public_domain]=true&fields=id,title,artist_titles,date_display,image_id,classification_title,alt_text,exhibition_history&page=${page}&limit=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArtwork = async (artworkId) => {
  try {
    let response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/${artworkId}?[term][is_public_domain]=true&fields=id,title,artist_titles,date_display,image_id,classification_title,alt_text,exhibition_history`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get list with ids und pagination
export const searchForArtworkIds = async (querry, page) => {
  try {
    let response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${querry}&page=${page}&limit=12&fields=id`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get artworks from array of ids
export const getArtworkFromIds = async (artIds) => {
  try {
    let response = await axios.get(
      `https://api.artic.edu/api/v1/artworks?[term][is_public_domain]=true&ids=${[
        artIds
      ]}&fields=id,title,artist_titles,date_display,image_id,classification_title,alt_text,exhibition_history`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
