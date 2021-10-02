import axios from "./axios";

const typeApi = {
  getAlltype: async () => {
    // const url = "/api/categories";
    const path = "/categories";
    let types = [];
    await axios
      .get(path)
      .then((res) => {
        types = res.data.category_list;
      })
      .catch((error) => {
        //   handle error follow messages
        console.log(error);
      });
    return types;
  },
};

export default typeApi;
