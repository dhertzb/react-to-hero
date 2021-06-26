import axios from "axios";

export default {
  getPassengers: (params) => {
    return axios.get("https://api.instantwebtools.net/v1/passenger", {
      params,
    });
  },
};
