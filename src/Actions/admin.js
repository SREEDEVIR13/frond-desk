// import axios from "axios";
// import { adminClient } from "../client/api/admin";


// function postAdminLogin(data) {
//     return client.post(apiPath.postAdminLogin, data);       
// }


// const adminActions = {

   
//     async getVisitorDetails() {
//         try {
//             let response = await adminClient.getVisitorList();
//             return response;
//         }
//         catch (err) {
//             return null;
//         }
//     },

//     async postAdminLogin(details) {
//         try {
//             axios.get(`https://localhost:7194/api/Admin/adminLogin`,)
//             let response = await adminClient.postAdminLogin(details);
//             return response.data;
//         }
//         catch (err) {
//             return null;
//         }
//     },

//     async putVisitorDetails(details) {
//         try {
//             let response = await adminClient.putVisitorDetails(details);
//             return response.data;
//         }
//         catch (err) {
//             return null;
//         }
//     }
// };
// export { adminActions }