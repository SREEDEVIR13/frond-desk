import React, { useState, useRef } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@mui/material";
import { Clear, Save } from "@material-ui/icons";
import SignatureCanvas from "react-signature-canvas";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CardMedia,
} from "@material-ui/core";
import { Button } from "@mui/material";
import Webcam from "react-webcam";
import { HiOutlineCamera } from "react-icons/hi";
import "./Visitor.css";
import { IconButton, TextField, Typography } from "@mui/material";
import format from "date-fns/format";
import { VisitorForm_url } from "../Constants";

import Logo from "./logo/logo";
import axios from "axios";
const VisitorForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [visitorPass, setVisitorPass] = useState("");
  const [buildingPass, setBuildingPass] = useState("");
  const [host, setHost] = useState("");
  const [purpose, SetPurpose] = useState("");
  const [idProof, SetIdProof] = useState(null);
  const [error, setError] = useState({
    fullName: "",
    email: "",
    mobile: "",
    place: "",
    visitorPass: "",
    buildingPass: "",
    purpose: "",
    host: "",
    company: "",
  });
  const date = format(new Date(), "yyyy-MM-dd");
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        fullName: "Name is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        fullName: "",
      }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        email: "Email is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        email: "",
      }));
    }
  };
  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        place: "Place is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        place: "",
      }));
    }
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        mobile: "Phone Number is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        mobile: "",
      }));
    }
  };
  const handleVisitorPassChange = (e) => {
    setVisitorPass(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        visitorPass: "Visitor Id is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        visitorPass: "",
      }));
    }
  };
  const handleBuildingPassChange = (e) => {
    setBuildingPass(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        buildingPass: "Building Visitor Id is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        buildingPass: "",
      }));
    }
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        company: "Company Name is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        company: "",
      }));
    }
  };
  const handleHostChange = (e) => {
    setHost(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        host: "Person to meet is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        host: "",
      }));
    }
  };
  const handlePurposeChange = (e) => {
    SetPurpose(e.target.value);
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,

        purpose: "Purpose of visit is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        purpose: "",
      }));
    }
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleCheckBoxChange = (event) => {
    setChecked({ ...state, [event.target.name]: event.target.checked });
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const [checked, setChecked] = useState(false); // state to keep track of checkbox state
  const [text, setText] = useState(""); // state to store text from TextField

  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });
  const [open, setOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);
  const webcamRef = React.useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleSave = () => {
    setSavedImage(capturedImage);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setCapturedImage(null);
  };
  const [signature, setSignature] = useState(null);
  const signatureRef = useRef(null);

  const handleClear = () => {
    signatureRef.current.clear();

    setSignature(null);
  };

  const handleSavesignature = () => {
    if (signatureRef.current.isEmpty()) {
      return;
    }
    setSignature(signatureRef.current.toDataURL());
    // console.log("base",signatureRef.current.toDataURL())
    // console.log("converted",signatureRef.current.toDataURL("image/png"))
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [openVisitor, setOpenVisitor] = useState(false);
  const [capturedVisitorImage, setCapturedVisitorImage] = useState(null);
  const [savedVisitorImage, setSavedVisitorImage] = useState(null);
  const webcamref = React.useRef(null);

  const handleVisitorCapture = () => {
    const imageSrc = webcamref.current.getScreenshot();
    setCapturedVisitorImage(imageSrc);
  };

  const handleVisitorSave = () => {
    setSavedVisitorImage(capturedVisitorImage);
    handleVisitorClose();
  };

  const handleVisitorClickOpen = () => {
    setOpenVisitor(true);
  };

  const handleVisitorClose = () => {
    setOpenVisitor(false);
    // setCapturedVisitorImage(null);
  };

  // var file1 = dataURLtoFile(
  //   "data:text/plain;base64,aGVsbG8gd29ybGQ=",
  //   "hello.txt"
  // );
  // function dataURLtoFile(dataurl, filename) {
  //   var arr = dataurl.split(","),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n);

  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }

  //   return new File([u8arr], filename, { type: mime });
  // }
  // const handleApi = () => {

  //     const date=format(new Date,'yyyy-MM-dd')
  //     console.log(date);
  //     let formValues = {
  //         fullName:"hai",
  //         email: "lakshi@gmail.com",
  //         place: "fd",
  //         mobile: "fdg",
  //         visitorPass: "fdg",
  //         buildingPass: "ffd",
  //         company: "fd",
  //         fromDate:date,
  //         purpose: "fdgfdg",
  //         subtypeId: 0,
  //         visitorType: 1,
  //         Image:null,
  //         idProof:null,
  //         signature:null,

  //         host:
  //             {
  //                 fullName:"hostname",
  //                 email: "fd"
  //             },
  //         assets: [
  //             {
  //                 name: "fd",
  //                 assetNumber: "", //assetdetails

  //             },
  //             {
  //                 name:"hh",
  //                 assetNumber:"hh"
  //             }
  //         ]

  //     };
  //     console.log("formValues", formValues);
  //     console.log(VisitorForm_url);
  //     const data= axios.post(VisitorForm_url, formValues)
  //     axios.post(VisitorForm_url, formValues)
  //         .then((result) => {
  //             console.log(result);
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  // }
  const handleApi = () => {
    let errorCount = 0;
    if (fullName?.trim().length === 0) {
      error.fullName = "Name is required";
      errorCount++;
    }
    if (email?.trim().length === 0) {
      error.email = "Email is required";
      errorCount++;
    }
    if (mobile?.trim().length === 0) {
      error.mobile = "Phone number is required";
      errorCount++;
    }
    if (place?.trim().length === 0) {
      error.place = "Place is required";
      errorCount++;
    }
    if (company?.trim().length === 0) {
      error.company = "Company Name is required";
      errorCount++;
    }
    if (visitorPass?.trim().length === 0) {
      error.visitorPass = " Visitor Id is required";
      errorCount++;
    }
    if (buildingPass?.trim().length === 0) {
      error.buildingPass = "Building Visitor Id is required";
      errorCount++;
    }
    if (purpose?.trim().length === 0) {
      error.purpose = "Purpose of Visit is required";
      errorCount++;
    }
    if (host?.trim().length === 0) {
      error.host = "Person to meet is required";
      errorCount++;
    }

    if (errorCount > 0) {
      return false;
    }
    if (
      !error.fullName &&
      !error.email &&
      !error.mobile &&
      !error.place &&
      !error.company &&
      !error.visitorPass &&
      !error.buildingPass &&
      !error.purpose &&
      !error.host
    ) {
      // const date = format(new Date, 'yyyy-MM-dd')
      // console.log(date);
      let formValues = {
        fullName,
        email,
        place,
        mobile,
        visitorPass,
        buildingPass,
        company,
        fromDate: date,
        purpose,
        subtypeId: 0,
        visitorType: 1,
        // image: null,
        image: capturedVisitorImage,
        idProof: capturedImage,
        // signature: null,
        signature: signature,

        host: {
          fullName: host,
          email: "nil",
        },
        assets: [
          {
            name: "nil",
            assetNumber: "nil", //assetdetails
          },
        ],
      };

      axios
        .post(VisitorForm_url, formValues)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="outer-handler">
      <div className="visitor-form">
        <div className="capture-handler">
          <Typography> Visitor Form </Typography>
          <>
            {!savedVisitorImage && (
              <>
                {!capturedVisitorImage && (
                  <IconButton
                    className="camera-Button"
                    onClick={handleVisitorClickOpen}
                  >
                    <HiOutlineCamera className="camera-Icon" />
                  </IconButton>
                )}
                {capturedVisitorImage && (
                  <div onClick={handleVisitorClickOpen}>
                    <CardMedia
                      component="img"
                      alt="Captured Image"
                      image={capturedVisitorImage}
                    />
                  </div>
                )}
              </>
            )}
            {savedVisitorImage && (
              <CardMedia
                component="img"
                alt="Saved Image"
                image={savedVisitorImage}
              />
            )}
            <Dialog open={openVisitor} onClose={handleVisitorClose}>
              <DialogTitle>Take a photo</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please click the capture button to take a photo.
                </DialogContentText>
                {capturedVisitorImage ? (
                  <CardMedia
                    component="img"
                    alt="Captured Image"
                    image={capturedVisitorImage}
                  />
                ) : (
                  <Webcam
                    audio={false}
                    ref={webcamref}
                    screenshotFormat="image/jpeg"
                  />
                )}
              </DialogContent>
              <DialogActions>
                {!capturedVisitorImage && (
                  <Button onClick={handleVisitorClose}>Cancel</Button>
                )}
                {capturedVisitorImage && (
                  <Button
                    className="close-button"
                    onClick={handleVisitorClose}
                    color="primary"
                    variant="contained"
                  >
                    Close
                  </Button>
                )}
                {!capturedVisitorImage && (
                  <Button
                    className="capture-button"
                    onClick={handleVisitorCapture}
                    color="primary"
                    variant="contained"
                  >
                    Capture
                  </Button>
                )}
                {capturedVisitorImage && (
                  <Button
                    className="save-button"
                    onClick={handleVisitorSave}
                    color="primary"
                    variant="contained"
                  >
                    Save
                  </Button>
                )}
              </DialogActions>
            </Dialog>
          </>
        </div>

        <div className="main-div">
          <div className="subDiv1">
            <TextField
              onChange={handleFullNameChange}
              className="fullName"
              id="fullName"
              name="fullName"
              label="Name"
              variant="standard"
              value={fullName}
              helperText={error.fullName}
              error={error.fullName}
            />
            <TextField
              onChange={handleEmailChange}
              className="email"
              id="email"
              name="email"
              label="Email"
              variant="standard"
              value={email}
              helperText={error.email}
              error={error.email}
            />
            <TextField
              onChange={handlePlaceChange}
              className="place"
              id="place"
              name="place"
              label="Place"
              variant="standard"
              value={place}
              helperText={error.place}
              error={error.place}
            />
            <TextField
              onChange={handleMobileChange}
              className="mobile"
              id="mobile"
              name="mobile"
              label="Mobile"
              variant="standard"
              value={mobile}
              helperText={error.mobile}
              error={error.mobile}
            />
            <TextField
              className="idProof"
              id="idProof"
              name="idProof"
              label="Idproof"
              variant="standard"
              disabled
            />

            {/* <TextField
            className="fullName"
            placeholder="Enter your name"
            id="fullName"
            name="fullName"
            label="Name"
            type="text"
          />

          <TextField
            className="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            label="Email"
            type="text"
          />

          <TextField
            className="place"
            placeholder="Enter your place"
            id="place"
            name="place"
            label="Place"

            type="text"
          />

          <TextField
            className="mobile"
            placeholder="Enter your mobile number"
            id="mobile"
            name="mobile"
            label="Mobile"
            type="text"
          />

          <TextField
            className="idProof"
            placeholder="Upload your ID proof"
            id="idProof"
            name="idProof"
            label="ID Proof"
            type="text"
          /> */}
            <>
              {!savedImage && (
                <>
                  {!capturedImage && (
                    <IconButton
                      className="camera-Button"
                      onClick={handleClickOpen}
                    >
                      <HiOutlineCamera className="camera-icon" />
                    </IconButton>
                  )}
                  {capturedImage && (
                    <div onClick={handleClickOpen}>
                      <CardMedia
                        component="img"
                        alt="Captured Image"
                        image={capturedImage}
                      />
                    </div>
                  )}
                </>
              )}
              {savedImage && (
                <CardMedia
                  component="img"
                  alt="Saved Image"
                  image={savedImage}
                />
              )}
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Take a photo</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please click the capture button to take a photo.
                  </DialogContentText>
                  {capturedImage ? (
                    <CardMedia
                      component="img"
                      alt="Captured Image"
                      image={capturedImage}
                    />
                  ) : (
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                    />
                  )}
                </DialogContent>
                <DialogActions>
                  {!capturedImage && (
                    <Button className="cancel-buttons" onClick={handleClose}>
                      Cancel
                    </Button>
                  )}
                  {capturedImage && (
                    <Button
                      className="close-button"
                      onClick={handleClose}
                      color="primary"
                      variant="contained"
                    >
                      Close
                    </Button>
                  )}
                  {!capturedImage && (
                    <Button
                      className="capture-button"
                      onClick={handleCapture}
                      color="primary"
                      variant="contained"
                    >
                      Capture
                    </Button>
                  )}
                  {capturedImage && (
                    <Button
                      className="save-button"
                      onClick={handleSave}
                      color="primary"
                      variant="contained"
                    >
                      Save
                    </Button>
                  )}
                </DialogActions>
              </Dialog>
            </>
            <TextField
              onChange={handleCompanyChange}
              className="company"
              id="company"
              name="company"
              label="company"
              variant="standard"
              value={company}
              helperText={error.company}
              error={error.company}
            />

            {/* <TextField
            className="company"
            placeholder="Enter your organisation name"
            id="company"
            name="company"
            label="Company"
            type="text"
          /> */}
          </div>

          <div className="subDiv2">
            <TextField
              onChange={handleVisitorPassChange}
              className="visitorPass"
              id="visitorPass"
              name="visitorPass"
              label="Visitor ID"
              variant="standard"
              value={visitorPass}
              helperText={error.visitorPass}
              error={error.visitorPass}
            />
            <TextField
              onChange={handleBuildingPassChange}
              className="buildingPass"
              id="buildingPass"
              name="buildingPass"
              label="Building visitor ID"
              variant="standard"
              value={buildingPass}
              helperText={error.buildingPass}
              error={error.buildingPass}
            />
            <TextField
              id="fromDate"
              // label="Date of visit"
              variant="standard"
              className="fromDate"
              disabled
              defaultValue={date}
            />
            <TextField
              onChange={handleHostChange}
              className="host"
              id="host"
              name="host"
              label="Person to meet"
              variant="standard"
              value={host}
              helperText={error.host}
              error={error.host}
            />
            <TextField
              onChange={handlePurposeChange}
              className="purpose"
              id="purpose"
              name="purpose"
              label="Purpose of visit"
              variant="standard"
              value={purpose}
              helperText={error.purpose}
              error={error.purpose}
            />
            {/* <TextField
            className="visitorPass"
            placeholder="Enter your visitor ID"
            id="visitorPass"
            name="visitorPass"
            label="Visitor ID"
            type="text"
          />

          <TextField
            className="buildingPass"
            placeholder="Enter your building visitor ID"
            id="buildingPass"
            name="buildingPass"
            label="Building visitor ID"
            type="text"
          />
          <TextField
            className="fromDate"
            placeholder="Enter your building visitor ID"
            id="fromDate"
            name="fromDate"
            label="Date of visit"
            type="text"
          />
          <TextField
            className="host"
            placeholder="Search here"
            id="host"
            name="host"
            label="Person to meet"
            type="text"

          />
          <TextField
            className="purpose"
            placeholder="Specify here"
            id="purpose"
            name="purpose"
            label="Purpose of visit"
            type="text"
          /> */}
          </div>

          <div className="subDiv3">
            <div className="box1">
              <Box>
                <Typography>Personal belongings</Typography>
                <div className="check-box">
                  <div className="first-row">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedA}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="Laptop"
                    />
                    {state.checkedA === true && (
                      <TextField
                        label="Specify here"
                        value={text}
                        onChange={handleTextChange}
                      />
                    )}

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                        />
                      }
                      label="External storage devices"
                    />
                    {state.checkedB === true && (
                      <TextField
                        label="Specify here"
                        value={text}
                        onChange={handleTextChange}
                      />
                    )}
                  </div>
                  <div className="second-row">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedC}
                          onChange={handleChange}
                          name="checkedC"
                        />
                      }
                      label="Dongle"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedD}
                          onChange={handleChange}
                          name="checkedD"
                        />
                      }
                      label="Others"
                    />
                    {state.checkedD === true && (
                      <TextField
                        label="Specify here"
                        value={text}
                        onChange={handleTextChange}
                      />
                    )}
                  </div>
                </div>
              </Box>
            </div>
            <>
              {!signature && (
                <div
                  className="signature-handler"
                  style={{ border: "1px solid  " }}
                >
                  <SignatureCanvas ref={signatureRef} />
                  <Button
                    className="clear-button-handler"
                    onClick={handleClear}
                  >
                    <Clear />
                    Clear
                  </Button>
                  <Button
                    className="save-button-handler"
                    onClick={handleSavesignature}
                  >
                    <Save />
                    Save
                  </Button>
                </div>
              )}
              {signature && (
                <>
                  <CardMedia
                    component="img"
                    alt="Saved Signature"
                    image={signature}
                  />
                  <Button
                    className="clear-button"
                    onClick={() => setSignature(null)}
                  >
                    Clear Signature
                  </Button>
                </>
              )}
            </>
          </div>
        </div>
        <div className="declaration-field">
          <FormControlLabel
            control={
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            }
            label="I declare that the information provided is true and accurate."
          />
          <Button
            className="next-button"
            type="submit"
            disabled={!isChecked}
            onClick={handleApi}
          >
            Check In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisitorForm;