import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
  params: {
    key: "0b3c180d1f774a3bace3676f990a3bef",
  },
})