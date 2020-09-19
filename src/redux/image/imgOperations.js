import {HEADERS, URI} from '../../../constants';
import {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesError,
} from './imgActions';

const fetchImages = () => (dispatch) => {
  dispatch(fetchImagesRequest());

  fetch(URI, {headers: HEADERS})
    .then((response) => response.json())
    .then((data) => dispatch(fetchImagesSuccess(data)))
    .catch((error) => dispatch(fetchImagesError(data)));
};

export {fetchImages};
