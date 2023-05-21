import axios from "axios";
export const apiURL =
    process.env.NODE_ENV !== "production"
        ? // ? "http://192.168.1.145:3000"
          "http://localhost:3000"
        : "https://scs-backend-wvbu.onrender.com";

export const getEvents = (payload) =>
    axios.post(`${apiURL}/events/search`, { include: { charityCall: true, moneyDonations: true } });
// export const getPosts = (payload) => axios.post(`${apiURL}/posts/search`, payload);
export const getEventDetail = (payload) =>
    axios.post(`${apiURL}/events/${payload}`, {
        include: {
            posts: true,
            moneyDonations: true,
            charityCall: { include: { user: true } },
        },
    });

export const getPosts = () =>
    axios.post(`${apiURL}/posts/search`, {
        include: { event: { include: { charityCall: true } } },
    });
export const getPostDetail = (payload) => axios.post(`${apiURL}/posts/${payload}`);
export const updateUser = (payload) => axios.patch(`${apiURL}/auth/profiles`, payload);
