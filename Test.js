import axios from 'axios';

const res_data = async data => {
  const config = {
    method: 'post',
    url: 'https://hotels4.p.rapidapi.com/properties/v2/get-offers',
    headers: {
      'X-RapidAPI-Key': 'a68161d5c7msh3ff3089ec161cc0p169f02jsn409ec78a66c1',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: data,
  };
  const res = await axios(config).catch(function (error) {
    console.log(error);
  });
  return res.data;
};
export default res_data;
