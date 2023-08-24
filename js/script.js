const API_URL = "https://workspace-methed.vercel.app/";
const LOCATION_URL = "api/locations";

const getData = async (url, cbSuccess, cbError) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    cbSuccess(data);
  } catch (err) {
    cbError(err);
  }
};

const init = () => {
  const citySelect = document.querySelector("#city");
  const cityChoices = new Choices(citySelect, {
    itemSelectText: "",
  });

  //получаем данные с сервера (города)
  getData(
    `${API_URL}${LOCATION_URL}`,
    (locationData) => {
      const locations = locationData.map((location) => ({
        value: location,
      }));
      cityChoices.setChoices(locations, "value", "label", false);
    },
    (err) => {
      console.log(err);
    }
  );
};

init();

//тоже самое, что и getdata()
// fetch(API_URL + LOCATION_URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
