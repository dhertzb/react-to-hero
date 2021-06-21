import axios from "axios";

export default {
  getPassengers: () => {
    return axios.get(
      "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
    );
  },
};
