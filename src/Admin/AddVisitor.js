// import React, { useState, useRef } from "react";
// import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'

// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Navbar from './Navbar'
// //import './AddVisitorForm'
// import './AddVisitor.css'
// import { HiOutlineCamera } from "react-icons/hi";
// import styled from '@emotion/styled';
// //import ReactDatePicker from 'react-datepicker';
// import SignatureCanvas from "react-signature-canvas";

// import { Clear, Save } from "@material-ui/icons";

// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogContentText,
//     DialogActions,
//     CardMedia,
// } from "@material-ui/core";
// const VisitorForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [place, setPlace] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [idproof, setIDProof] = useState("");
//     const [buildingvisitorid, setBuildingVisitorID] = useState("");
//     const [company, setCompany] = useState("");
//     const [purposeofvisit, setPurposeOfVisit] = useState("");
//     const [persontomeet, setPersonToMeet] = useState("");
//     const [personalbelongings, setPersonalBelongings] = useState("");
//     const [dateofvisit, setDateOfVisit] = useState("");
//     const [enddate, setEndDate] = useState("");
//     const [signature, setSignature] = useState("");
//     const [error, setError] = useState({
//         name: "",
//         email: "",
//         place: "",
//         mobile: "",
//         idproof: "",
//         buildingvisitorid: "",
//         company: "",
//         purposeofvisit: "",
//         personalbelongings: "",
//         persontomeet: "",
//         signature: "",
//         dateofvisit: "",
//         enddate: "",

//     })
//     const RequiredTypography = styled(Typography)({
//         '&::after': {
//             content: '"*"',
//             color: 'red',
//             marginLeft: 2,
//         },
//     });
//     const webcamRef = React.useRef(null);
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//         const nameregex = /^[A-Za-z]+$/i;
//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 name: "Name is required",
//             }))
//         }
//         else if (e.target.value.length < 3) {
//             setError((prevError) => ({
//                 ...prevError,
//                 name: "Name must have minimum length of 3 characters",
//             }))
//         }
//         else if (!nameregex.test(e.target.value)) {
//             setError((prevError) => ({
//                 ...prevError,
//                 name: "Invalid name. Only alphabets are allowed.",
//             }));
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 name: "",
//             }));
//         }
//     };


//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         const emailregex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 email: "Email is required",
//             }));
//         }
//         else if (!emailregex.test(e.target.value)) {
//             setError((prevError) => ({
//                 ...prevError,
//                 email: "Invalid email address format. The format must be 'name@domain.com'.",
//             }));
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 email: "",
//             }));
//         }
//     };

//     const handlePlaceChange = (e) => {
//         setPlace(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 place: "Place is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 place: "",
//             }));
//         }
//     };

//     // const [signature, setSignature] = useState(null);
//     const signatureRef = useRef(null);

//     const handleClear = () => {
//         signatureRef.current.clear();
//         setSignature(null);
//     };

//     const handleSavesignature = () => {
//         if (signatureRef.current.isEmpty()) {
//             return;
//         }
//         setSignature(signatureRef.current.toDataURL());
//     };

//     const handleChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//     };

//     const handleCheckBoxChange = (event) => {
//         setChecked({ ...state, [event.target.name]: event.target.checked });
//     };

//     const handleTextChange = (event) => {
//         setText(event.target.value);
//     };

//     const [checked, setChecked] = useState(false); // state to keep track of checkbox state
//     const [text, setText] = useState(""); // state to store text from TextField

//     const [state, setState] = useState({
//         checkedA: false,
//         checkedB: false,
//         checkedC: false,
//         checkedD: false,
//     });


//     const handlePurposeOfVisitChange = (e) => {
//         setPurposeOfVisit(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 purposeofvisit: "Purpose of visit is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 purposeofvisit: "",
//             }));
//         }
//     };

//     const handlePersonToMeetChange = (e) => {
//         setPersonToMeet(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 persontomeet: "Purpose of visit is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 persontomeet: "",
//             }));
//         }
//     };

//     const handleBuildingVisitorIDChange = (e) => {
//         setBuildingVisitorID(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 buildingvisitorid: "Building Visitor ID is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 buildingvisitorid: "",
//             }));
//         }
//     };

//     const handleIDProofChange = (e) => {
//         setIDProof(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 idproof: "ID proof is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 idproof: "",
//             }));
//         }
//     };

//     const handleCompanyChange = (e) => {
//         setCompany(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 company: "Company is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 company: "",
//             }));
//         }
//     };

//     const handlePersonalBelongingsChange = (e) => {
//         setPersonalBelongings(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 personalbelongings: "Purpose of visit is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 personalbelongings: "",
//             }));
//         }
//     };


//     const handleSignatureChange = (e) => {
//         setSignature(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 signature: "Purpose of visit is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 signature: "",
//             }));
//         }
//     };

//     const handleDateOfVisitChange = (e) => {
//         setDateOfVisit(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 dateofvisit: "Date Of Visit is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 dateofvisit: "",
//             }));
//         }
//     };

//     const handleEndDateChange = (e) => {
//         setEndDate(e.target.value);

//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 enddate: "End date is required",
//             }))
//         }
//         else {
//             setError((prevError) => ({
//                 ...prevError,
//                 enddate: "",
//             }));
//         }
//     };


//     const handleMobileChange = (e) => {
//         setMobile(e.target.value)
//         const mobilenumberpattern = /^(?!\s)[0-9]{10}$/;
//         if (!e.target.value) {
//             setError((prevError) => ({
//                 ...prevError,
//                 mobile: "Phone numnber is required",
//             }));
//         }
//         else if (!mobilenumberpattern.test(e.target.value)) {
//             setError((prevError) => ({
//                 ...prevError,
//                 mobile: "Please  enter valid Phone Number. It must have ten digits.",
//             }));
//         } else {
//             setError((prevError) => ({
//                 ...prevError,
//                 mobile: ""
//             }));
//         }
//     }
//     return (
//         <div><Navbar/>
//         <div class='mainDiv' >

//             <form style={{ flexDirection: 'column', margin: 'auto', marginTop: '10', padding: '5' }}>
//                 {/* <Box></Box> */}



//                 {/* <HiOutlineCamera className='cameraicon' size={"10ch"} /> */}



//                 <Typography
//                     fontFamily={"Roboto, sans-serif"}
//                     variant="h4"
//                     padding={3}
//                     textAlign="center"
//                     fontSize={40}
//                     style={{
//                         textDecoration: "underline",
//                         fontWeight: "300",
//                         textDecorationThickness: "from-font",
//                     }}
//                 >
//                     Visitor Form
//                 </Typography>
//                 <div class='subDiv' >
//                     <div class='Div-1'>
//                         <TextField
//                             label="Name"

//                             onChange={handleNameChange}
//                             placeholder='Enter your Name'
//                             id="name"
//                             name="name"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={name}
//                             helperText={error.name}
//                             error={error.name}
//                             sx={{ m: 1, width: "35ch" }}
//                         />


//                         <TextField
//                             label="Email"

//                             onChange={handleEmailChange}
//                             placeholder='Enter your Email'
//                             id="email"
//                             name="email"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={email}
//                             helperText={error.email}
//                             error={error.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />

//                         <TextField
//                             label="Place"

//                             onChange={handlePlaceChange}
//                             placeholder='Enter your Place'
//                             id="place"
//                             name="place"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={place}
//                             helperText={error.place}
//                             error={place.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />

//                         <TextField
//                             label="Mobile"

//                             onChange={handleMobileChange}
//                             placeholder='Enter your mobile number'
//                             id="mobile"
//                             name="mobile"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={mobile}
//                             helperText={error.mobile}
//                             error={mobile.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />
//                     </div>

//                     <div class='Div-2'>
//                         <div class="DateDiv">
//                             <TextField className="DateDiv"
//                                 label="Date Of Visit"

//                                 onChange={handleDateOfVisitChange}
//                                 // placeholder='Enter your start date'
//                                 id="dateofvisit"
//                                 name="dateofvisit"
//                                 margin="normal"
//                                 type="date"
//                                 variant="standard"
//                                 value={dateofvisit}
//                                 helperText={error.dateofvisit}
//                                 error={dateofvisit.email}
//                                 sx={{ m: 1, width: "35ch" }}

//                             />

//                         </div>

//                         <TextField
//                             label="ID Proof"

//                             onChange={handleIDProofChange}
//                             placeholder='Enter your ID Proof'
//                             id="idproof"
//                             name="idproof"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={idproof}
//                             helperText={error.idproof}
//                             error={idproof.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />

//                         <TextField
//                             label="Building Visitor ID"

//                             onChange={handleBuildingVisitorIDChange}
//                             placeholder='Enter your building visitor number'
//                             id="buildingvisitorid"
//                             name="buildingvisitorid"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={buildingvisitorid}
//                             helperText={error.buildingvisitorid}
//                             error={buildingvisitorid.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />
//                     </div>


//                     <div>
//                         <TextField
//                             label="Company"

//                             onChange={handleCompanyChange}
//                             placeholder='Enter your company name'
//                             id="company"
//                             name="company"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={company}
//                             helperText={error.company}
//                             error={company.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />

//                         <TextField
//                             label="Purpose of Visit"

//                             onChange={handlePurposeOfVisitChange}
//                             placeholder='Enter your purpose of visit'
//                             id="purposeofvisit"
//                             name="purposeofvisit"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={purposeofvisit}
//                             helperText={error.purposeofvisit}
//                             error={purposeofvisit.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />

//                         <TextField
//                             label="Person to meet"

//                             onChange={handleEmailChange}
//                             placeholder='Enter the name of person to meet'
//                             id="persontomeet"
//                             name="persontomeet"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={persontomeet}
//                             helperText={error.persontomeet}
//                             error={persontomeet.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         />

//                         <div class='box1'>
//                             <Box

//                             >
//                                 <RequiredTypography
//                                     marginLeft="32px"
//                                     variant="subtitle1"
//                                     component="label"
//                                     fontFamily={"Roboto, sans-serif"}
//                                 >
//                                     Personal belongings
//                                 </RequiredTypography>
//                                 <div className="check-box">
//                                     <div className="first-row">
//                                         <FormControlLabel
//                                             control={
//                                                 <Checkbox
//                                                     checked={state.checkedA}
//                                                     onChange={handleChange}
//                                                     name="checkedA"
//                                                     color="primary"
//                                                 />
//                                             }
//                                             label="Laptop"
//                                         />
//                                         <FormControlLabel
//                                             control={
//                                                 <Checkbox
//                                                     checked={state.checkedB}
//                                                     onChange={handleChange}
//                                                     name="checkedB"
//                                                     color="primary"
//                                                 />
//                                             }
//                                             label="External storage devices"
//                                         />
//                                     </div>
//                                     <div className="second-row">
//                                         <FormControlLabel
//                                             control={
//                                                 <Checkbox
//                                                     checked={state.checkedC}
//                                                     onChange={handleChange}
//                                                     name="checkedC"
//                                                     color="primary"
//                                                 />
//                                             }
//                                             label="Dongle"
//                                         />
//                                         <FormControlLabel
//                                             control={
//                                                 <Checkbox
//                                                     checked={state.checkedD}
//                                                     onChange={handleChange}
//                                                     name="checkedD"
//                                                     color="primary"
//                                                 />
//                                             }
//                                             label="Others"
//                                         />
//                                         {state.checkedD === true && (
//                                             <TextField
//                                                 label="Specify here"
//                                                 value={text}
//                                                 onChange={handleTextChange}
//                                             />
//                                         )}
//                                     </div>
//                                 </div></Box></div></div>
//                 </div>



//                 {/* <TextField
//                             label="Signature"

//                             onChange={handleSignatureChange}
//                             placeholder='Enter your Signature'
//                             id="signature"
//                             name="signature"
//                             margin="normal"
//                             type="text"
//                             variant="standard"
//                             value={signature}
//                             helperText={error.email}
//                             error={signature.email}
//                             sx={{ m: 1, width: "35ch" }}

//                         /> */}
//                 <div class="SignatureDiv">
//                     <RequiredTypography
//                         marginLeft="32px"
//                         variant="subtitle1"
//                         component="label"
//                         fontFamily={"Roboto, sans-serif"}
//                     >
//                         Signature
//                     </RequiredTypography>

//                     <>
//                         {!signature && (
//                             <div style={{ border: "1px solid black", height: 200 }}>
//                                 <SignatureCanvas
//                                     ref={signatureRef}
//                                     canvasProps={{ width: 500, height: 200 }}
//                                 />
//                                 <Button
//                                     onClick={handleClear}
//                                     variant="contained"
//                                     color="secondary"
//                                 >
//                                     <Clear />
//                                     Clear
//                                 </Button>
//                                 <Button
//                                     onClick={handleSavesignature}
//                                     variant="contained"
//                                     color="primary"
//                                 >
//                                     <Save />
//                                     Save
//                                 </Button>
//                             </div>
//                         )}
//                         {signature && (
//                             <>
//                                 <CardMedia
//                                     component="img"
//                                     alt="Saved Signature"
//                                     image={signature}
//                                     style={{ maxWidth: 500 }}
//                                 />
//                                 <Button
//                                     onClick={() => setSignature(null)}
//                                     variant="contained"
//                                     color="primary"
//                                 >
//                                     Clear Signature
//                                 </Button>
//                             </>
//                         )}
//                     </>
//                 </div>







//                 <Button
//                     className="next-button"
//                     type="submit"
//                     sx={{
//                         marginTop: 3,
//                         borderRadius: 3,
//                         fontWeight: 900,
//                         backgroundColor: "#e9b30b",
//                         display: "block",
//                         marginLeft: "auto",
//                         width: "fit-content",
//                         fontFamily: "Roboto, sans-serif",
//                         textTransform: "none",
//                     }}

//                     variant="contained"
//                 >
//                     Submit
//                 </Button>
//             </form>
        
//         </div >
//         </div>
//     )
// }
// export default VisitorForm