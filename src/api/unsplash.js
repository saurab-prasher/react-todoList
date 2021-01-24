import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID rJtu8lzLYge6GPOKizPY4FJ14UEMwDoCZXn97_-SFBI",
  },
});
