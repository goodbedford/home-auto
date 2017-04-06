import axios  from "axios";

const baseUrl = "https://home-data.herokuapp.com/api/homes";
const getHomes =  () => {
  return axios.get(baseUrl)
    .then(homesData => {
      let homes = homesData.data;
      return homes;
    })
    .catch(error => {
      console.warn("Error with getHomes", error);
    });
};

const getHome = (homeId) => {
  return axios.get(`${baseUrl}/${homeId}`)
    .then(home => {
      return home.data;
    })
    .catch(error => {
      console.warn("Error with getHome", error);
    });
};
const getRooms = (homeId) => {
  return axios.get(`${baseUrl}/${homeId}/rooms`)
    .then(rooms => {
      return rooms.data;
    })
    .catch(error => {
      console.warn("Error with getRooms", error);
    });
};
const getRoom = (homeId, roomId) => {
  return axios.get(`${baseUrl}/${homeId}/rooms/${roomId}`)
    .then(room => {
      return room.data;
    })
    .catch(error => {
      console.warn("Error with getRoomById", error);
    });
};

const updateRoom = (homeId, roomId, room) => {
  return axios.put(`${baseUrl}/${homeId}/rooms/${roomId}`, room)
    .then(updatedRoom => {
      return updatedRoom.data;
    });
};
const createRoom = (homeId, room) => {
  return axios.post(`${baseUrl}/${homeId}/rooms`, room)
    .then(newRoom => {
      return newRoom.data;
    });
};
const deleteRoom = (homeId, roomId) => {
  return axios.delete(`${baseUrl}/${homeId}/rooms/${roomId}`)
    .then(home => {
      console.log("successful delete")
    })
    .catch(error => {
      console.warn("Error with delete room", error);
    });
};
const httpHelper = {
  getHomes: getHomes,
  getHome: getHome,
  getRooms: getRooms,
  getRoom: getRoom,
  updateRoom: updateRoom,
  createRoom: createRoom,
  deleteRoom: deleteRoom
};


export default httpHelper;
