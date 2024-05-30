
// import axios from "axios";

// const API_URL = 'http://localhost:3000/api';

// export const register = async (name, email, password) => {
//     try {
//     const response = await axios.post(`${API_URL}/auth/register`, {
//         name,
//         email,
//         password
//     });       
//     return response.data;
//     } catch (error) {
//         throw new Error(error.response.data.message);
//     }
// };

// export const login = async (email, password) => {
//     try {
//         const response = await axios.post(`${API_URL}/auth/login`, {
//             email,
//             password
//         });
//         return response.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// }