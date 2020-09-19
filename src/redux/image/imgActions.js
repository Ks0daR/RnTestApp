import {createAction} from '@reduxjs/toolkit';

const fetchImagesRequest = createAction('fetchImageRequest');
const fetchImagesSuccess = createAction('fetchImageSuccess');
const fetchImagesError = createAction('fetchImageError');

export {fetchImagesError, fetchImagesRequest, fetchImagesSuccess};
