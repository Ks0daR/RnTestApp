import {HEADERS, URI} from '../../../constants';
import {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesError,
} from './imgActions';

const fetchImages = () => (dispatch) => {
  dispatch(fetchImagesRequest());

  fetch(URI, {headers: HEADERS}).then((data) => console.log(data));
};

export {fetchImages};
