// // import React, { useState } from "react";
// // import backGroundImage from "../../Images/BackgroundImage.svg";
// // import {
// //   Button,
// //   Box,
// //   Grid,
// //   TextField,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// // } from "@mui/material";
// // import EmailIcon from "@mui/icons-material/Email";
// // import LockIcon from "@mui/icons-material/Lock";
// // import BusinessIcon from "@mui/icons-material/Business";
// // import LocationCityIcon from "@mui/icons-material/LocationCity";
// // import PinDropIcon from "@mui/icons-material/PinDrop";
// // import PersonIcon from "@mui/icons-material/Person";
// // import PhoneIcon from "@mui/icons-material/Phone";
// // import { toast } from "sonner";
// // import logo from "../../Images/Logo.svg";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import MapWithGeocoder from "./MapWithGeolocatorAuthentication"; // Import the Map component

// // function HotelRegister() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     address: "",
// //     city: "",
// //     state: "",
// //     pincode: "",
// //     contactPerson: "",
// //     contactNumber: "",
// //     locationType: "Point", // Default location type
// //     locationCoordinates: [null, null], // Default location coordinates
// //   });
// //   const [openMapDialog, setOpenMapDialog] = useState(false);
// //   const navigate = useNavigate();
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleLocationSelect = ({ lat, lng }) => {
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       locationCoordinates: [lat, lng],
// //     }));
// //   };

// //   const handleOpenMapDialog = () => {
// //     setOpenMapDialog(true);
// //   };

// //   const handleCloseMapDialog = () => {
// //     setOpenMapDialog(false);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/hotel/register",
// //         formData
// //       );
// //       if (response.status === 201) {
// //         toast.success("Registration Successful");
// //         navigate("/login");
// //         // Optionally redirect the user or clear the form here
// //       }
// //     } catch (error) {
// //       toast.error(
// //         `Registration failed: ${error.response?.data?.error || error.message}`
// //       );
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         backgroundImage: `url(${backGroundImage})`,
// //         // height: "120vh",
// //         width: "100%",
// //         backgroundSize: "cover",
// //         backgroundRepeat: "no-repeat",
// //       }}
// //     >
// //       <Box display="flex" justifyContent="flex-end">
// //         <Box
// //           width="100%"
// //           height="50px"
// //           borderRadius="50px"
// //           display="flex"
// //           alignItems="center"
// //           justifyContent="end"
// //           padding="10px"
// //         >
// //           <Link to="/register">
// //             <Button
// //               variant="contained"
// //               color="success"
// //               sx={{
// //                 borderRadius: "50px",
// //                 backgroundColor: "#20B486",
// //                 "&:hover": {
// //                   backgroundColor: "#1A946D ",
// //                 },
// //               }}
// //             >
// //               Register
// //             </Button>
// //           </Link>
// //         </Box>
// //       </Box>
// //       <div
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           flexDirection: "column",
// //         }}
// //       >
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //           }}
// //         >
// //           <img src={logo} width={70} alt="logo" />
// //           <h1
// //             style={{
// //               color: "white",
// //               fontSize: "60px",
// //               paddingLeft: "40px",
// //               fontFamily: "Dancing Script",
// //               fontOpticalSizing: "auto",
// //             }}
// //           >
// //             Anna Seva
// //           </h1>
// //         </div>
// //         <form
// //           style={{
// //             maxWidth: "600px",
// //             padding: "20px",
// //             border: "1px solid white",
// //             borderRadius: "10px",
// //           }}
// //           onSubmit={handleSubmit}
// //         >
// //           <Grid container spacing={2}>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="name"
// //                 placeholder="Enter your Hotel Name"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.name}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <BusinessIcon
// //                       sx={{ color: "black", marginRight: "10px" }}
// //                     />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="email"
// //                 placeholder="Enter your Email"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <EmailIcon sx={{ color: "black", marginRight: "10px" }} />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="password"
// //                 placeholder="Enter your Password"
// //                 type="password"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.password}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <LockIcon sx={{ color: "black", marginRight: "10px" }} />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="address"
// //                 placeholder="Enter your Address"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.address}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <LocationCityIcon
// //                       sx={{ color: "black", marginRight: "10px" }}
// //                     />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="city"
// //                 placeholder="Enter your City"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.city}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <LocationCityIcon
// //                       sx={{ color: "black", marginRight: "10px" }}
// //                     />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="state"
// //                 placeholder="Enter your State"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.state}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <LocationCityIcon
// //                       sx={{ color: "black", marginRight: "10px" }}
// //                     />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="pincode"
// //                 placeholder="Enter your Pincode"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.pincode}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <PinDropIcon sx={{ color: "black", marginRight: "10px" }} />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 name="contactPerson"
// //                 placeholder="Enter Contact Person"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.contactPerson}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <TextField
// //                 name="contactNumber"
// //                 placeholder="Enter Contact Number"
// //                 variant="outlined"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.contactNumber}
// //                 onChange={handleInputChange}
// //                 required
// //                 InputProps={{
// //                   startAdornment: (
// //                     <PhoneIcon sx={{ color: "black", marginRight: "10px" }} />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               {/* Map component to select latitude and longitude */}

// //               <TextField
// //                 name="latitude"
// //                 // label="Latitude"
// //                 variant="outlined"
// //                 fullWidth
// //                 placeholder="Enter Latitude"
// //                 margin="normal"
// //                 value={formData.locationCoordinates[0]}
// //                 InputProps={{
// //                   startAdornment: (
// //                     <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //               <TextField
// //                 name="longitude"
// //                 // label="Longitude"
// //                 variant="outlined"
// //                 placeholder="Enter Logitude"
// //                 fullWidth
// //                 margin="normal"
// //                 value={formData.locationCoordinates[1]}
// //                 InputProps={{
// //                   startAdornment: (
// //                     <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
// //                   ),
// //                   sx: { borderRadius: "20px", backgroundColor: "white" },
// //                 }}
// //               />
// //               <Grid item xs={12}>
// //                 <Button
// //                   variant="contained"
// //                   color="primary"
// //                   fullWidth
// //                   onClick={handleOpenMapDialog} // Open Map button
// //                   sx={{
// //                     backgroundColor: "#20B486",
// //                     "&:hover": {
// //                       backgroundColor: "#1A946D ",
// //                     },
// //                   }}
// //                 >
// //                   Open Map
// //                 </Button>
// //               </Grid>
// //               <Dialog
// //                 open={openMapDialog}
// //                 onClose={handleCloseMapDialog}
// //                 maxWidth="md"
// //                 fullWidth
// //               >
// //                 <DialogTitle>Select Location on Map</DialogTitle>
// //                 <DialogContent>
// //                   <MapWithGeocoder onLocationSelect={handleLocationSelect} />
// //                 </DialogContent>
// //                 <DialogActions>
// //                   <Button onClick={handleCloseMapDialog} color="primary">
// //                     Cancel
// //                   </Button>
// //                   <Button onClick={handleCloseMapDialog} color="primary">
// //                     Select
// //                   </Button>
// //                 </DialogActions>
// //               </Dialog>
// //             </Grid>
// //           </Grid>
// //           <p
// //             style={{
// //               color: "white",
// //               alignItems: "center",
// //               textAlign: "center",
// //               fontSize: "12px",
// //               padding: "10px",
// //             }}
// //           >
// //             By signing up to Anna Seva, you agree to our Terms and Privacy
// //             Policy.
// //           </p>
// //           <Button
// //             type="submit"
// //             variant="contained"
// //             color="success"
// //             fullWidth
// //             sx={{
// //               mt: 2,
// //               height: "50px",
// //               borderRadius: "20px",
// //               backgroundColor: "#20B486",
// //               "&:hover": {
// //                 backgroundColor: "#1A946D ",
// //               },
// //             }}
// //           >
// //             Register
// //           </Button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HotelRegister;

// import React, { useState } from "react";
// import backGroundImage from "../../Images/BackgroundImage.svg";
// import {
//   Button,
//   Box,
//   Grid,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";
// import BusinessIcon from "@mui/icons-material/Business";
// import LocationCityIcon from "@mui/icons-material/LocationCity";
// import PinDropIcon from "@mui/icons-material/PinDrop";
// import PersonIcon from "@mui/icons-material/Person";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { toast } from "sonner";
// import logo from "../../Images/Logo.svg";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import MapWithGeocoder from "./MapWithGeolocatorAuthentication"; // Import the Map component

// function HotelRegister() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     contactPerson: "",
//     contactNumber: "",
//     locationType: "Point", // Default location type
//     locationCoordinates: [null, null], // Default location coordinates
//     kycDocuments: null,
//     kycDocuments: null,
//   });
//   const [openMapDialog, setOpenMapDialog] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: files[0], // Only taking the first file if multiple are selected
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleLocationSelect = ({ lat, lng }) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       locationCoordinates: [lat, lng],
//     }));
//   };
//   const handleOpenMapDialog = () => {
//     setOpenMapDialog(true);
//   };

//   const handleCloseMapDialog = () => {
//     setOpenMapDialog(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       for (const key in formData) {
//         formDataToSend.append(key, formData[key]);
//       }

//       const response = await axios.post(
//         "http://localhost:5000/api/hotel/register",
//         formDataToSend
//       );

//       if (response.status === 201) {
//         toast.success("Registration Successful");
//         navigate("/login");
//         // Optionally redirect the user or clear the form here
//       }
//     } catch (error) {
//       toast.error(
//         `Registration failed: ${error.response?.data?.error || error.message}`
//       );
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${backGroundImage})`,
//         // height: "120vh",
//         width: "100%",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Box display="flex" justifyContent="flex-end">
//         <Box
//           width="100%"
//           height="50px"
//           borderRadius="50px"
//           display="flex"
//           alignItems="center"
//           justifyContent="end"
//           padding="10px"
//         >
//           <Link to="/register">
//             <Button
//               variant="contained"
//               color="success"
//               sx={{
//                 borderRadius: "50px",
//                 backgroundColor: "#20B486",
//                 "&:hover": {
//                   backgroundColor: "#1A946D ",
//                 },
//               }}
//             >
//               Register
//             </Button>
//           </Link>
//         </Box>
//       </Box>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img src={logo} width={70} alt="logo" />
//           <h1
//             style={{
//               color: "white",
//               fontSize: "60px",
//               paddingLeft: "40px",
//               fontFamily: "Dancing Script",
//               fontOpticalSizing: "auto",
//             }}
//           >
//             Anna Seva
//           </h1>
//         </div>
//         <form
//           style={{
//             maxWidth: "600px",
//             padding: "20px",
//             border: "1px solid white",
//             borderRadius: "10px",
//           }}
//           onSubmit={handleSubmit}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="name"
//                 placeholder="Enter your Hotel Name"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <BusinessIcon
//                       sx={{ color: "black", marginRight: "10px" }}
//                     />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="email"
//                 placeholder="Enter your Email"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <EmailIcon sx={{ color: "black", marginRight: "10px" }} />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="password"
//                 placeholder="Enter your Password"
//                 type="password"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <LockIcon sx={{ color: "black", marginRight: "10px" }} />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="address"
//                 placeholder="Enter your Address"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <LocationCityIcon
//                       sx={{ color: "black", marginRight: "10px" }}
//                     />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="city"
//                 placeholder="Enter your City"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <LocationCityIcon
//                       sx={{ color: "black", marginRight: "10px" }}
//                     />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="state"
//                 placeholder="Enter your State"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.state}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <LocationCityIcon
//                       sx={{ color: "black", marginRight: "10px" }}
//                     />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="pincode"
//                 placeholder="Enter your Pincode"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.pincode}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <PinDropIcon sx={{ color: "black", marginRight: "10px" }} />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="contactPerson"
//                 placeholder="Enter Contact Person"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.contactPerson}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="contactNumber"
//                 placeholder="Enter Contact Number"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={formData.contactNumber}
//                 onChange={handleInputChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <PhoneIcon sx={{ color: "black", marginRight: "10px" }} />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               {/* File Upload for Aadhar Image */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="kycDocuments"
//                 onChange={handleInputChange}
//                 style={{ display: "none" }}
//                 id="upload-aadhar"
//               />
//               <label htmlFor="upload-aadhar">
//                 <Button
//                   variant="outlined"
//                   component="span"
//                   fullWidth
//                   sx={{
//                     borderRadius: "20px",
//                     marginTop: "10px",
//                     backgroundColor: "#20B486",
//                     "&:hover": {
//                       backgroundColor: "#1A946D ",
//                     },
//                   }}
//                 >
//                   Upload Aadhar Image
//                 </Button>
//               </label>
//             </Grid>
//             <Grid item xs={12}>
//               {/* File Upload for License Image */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="kycDocuments"
//                 onChange={handleInputChange}
//                 style={{ display: "none" }}
//                 id="upload-license"
//               />
//               <label htmlFor="upload-license">
//                 <Button
//                   variant="outlined"
//                   component="span"
//                   fullWidth
//                   sx={{
//                     borderRadius: "20px",
//                     marginTop: "10px",
//                     backgroundColor: "#20B486",
//                     "&:hover": {
//                       backgroundColor: "#1A946D ",
//                     },
//                   }}
//                 >
//                   Upload License Image
//                 </Button>
//               </label>
//             </Grid>
//             <Grid item xs={12}>
//               {/* Map component to select latitude and longitude */}
//               <TextField
//                 name="latitude"
//                 // label="Latitude"
//                 variant="outlined"
//                 fullWidth
//                 placeholder="Enter Latitude"
//                 margin="normal"
//                 value={formData.locationCoordinates[0]}
//                 InputProps={{
//                   startAdornment: (
//                     <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//               <TextField
//                 name="longitude"
//                 // label="Longitude"
//                 variant="outlined"
//                 placeholder="Enter Longitude"
//                 fullWidth
//                 margin="normal"
//                 value={formData.locationCoordinates[1]}
//                 InputProps={{
//                   startAdornment: (
//                     <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
//                   ),
//                   sx: { borderRadius: "20px", backgroundColor: "white" },
//                 }}
//               />
//               <Grid item xs={12}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   onClick={handleOpenMapDialog} // Open Map button
//                   sx={{
//                     backgroundColor: "#20B486",
//                     "&:hover": {
//                       backgroundColor: "#1A946D ",
//                     },
//                   }}
//                 >
//                   Open Map
//                 </Button>
//               </Grid>
//               <Dialog
//                 open={openMapDialog}
//                 onClose={handleCloseMapDialog}
//                 maxWidth="md"
//                 fullWidth
//               >
//                 <DialogTitle>Select Location on Map</DialogTitle>
//                 <DialogContent>
//                   <MapWithGeocoder onLocationSelect={handleLocationSelect} />
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleCloseMapDialog} color="primary">
//                     Cancel
//                   </Button>
//                   <Button onClick={handleCloseMapDialog} color="primary">
//                     Select
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             </Grid>
//           </Grid>
//           <p
//             style={{
//               color: "white",
//               alignItems: "center",
//               textAlign: "center",
//               fontSize: "12px",
//               padding: "10px",
//             }}
//           >
//             By signing up to Anna Seva, you agree to our Terms and Privacy
//             Policy.
//           </p>
//           <Button
//             type="submit"
//             variant="contained"
//             color="success"
//             fullWidth
//             sx={{
//               mt: 2,
//               height: "50px",
//               borderRadius: "20px",
//               backgroundColor: "#20B486",
//               "&:hover": {
//                 backgroundColor: "#1A946D ",
//               },
//             }}
//           >
//             Register
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default HotelRegister;
import React, { useState, useEffect } from "react";
import backGroundImage from "../../Images/BackgroundImage.svg";
import {
  Button,
  Box,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import BusinessIcon from "@mui/icons-material/Business";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { toast } from "sonner";
import logo from "../../Images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MapWithGeocoder from "./MapWithGeolocatorAuthentication"; // Import the Map component

function HotelRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    contactPerson: "",
    contactNumber: "",
    locationType: "Point", // Default location type
    locationCoordinates: [null, null], // Default location coordinates
    kycDocuments: [],
  });
  const [openMapDialog, setOpenMapDialog] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Validation rules
  useEffect(() => {
    const errors = {};
    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Hotel Name is required";
    }
    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    // Password validation
    if (formData.password.length < 5) {
      errors.password = "Password must be at least 5 characters long";
    }
    // Address validation
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    // City validation
    if (!formData.city.trim()) {
      errors.city = "City is required";
    }
    // State validation
    if (!formData.state.trim()) {
      errors.state = "State is required";
    }
    // Pincode validation
    if (!formData.pincode.trim()) {
      errors.pincode = "Pincode is required";
    }
    // Contact Person validation
    if (!formData.contactPerson.trim()) {
      errors.contactPerson = "Contact Person is required";
    }
    // Contact Number validation
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Contact Number must be 10 digits";
    }
    setFormErrors(errors);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "kycDocuments") {
      setFormData((prevData) => ({
        ...prevData,
        kycDocuments: [...prevData.kycDocuments, files[0]],
      }));
    } else if (name === "latitude" || name === "longitude") {
      setFormData((prevData) => ({
        ...prevData,
        locationCoordinates: [
          name === "latitude" ? value : formData.locationCoordinates[0],
          name === "longitude" ? value : formData.locationCoordinates[1],
        ],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleLocationSelect = ({ lat, lng }) => {
    setFormData((prevData) => ({
      ...prevData,
      locationCoordinates: [lat, lng],
    }));
  };

  const handleOpenMapDialog = () => {
    setOpenMapDialog(true);
  };

  const handleCloseMapDialog = () => {
    setOpenMapDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === "locationCoordinates") {
          formDataToSend.append("latitude", formData[key][0]);
          formDataToSend.append("longitude", formData[key][1]);
        } else if (key === "kycDocuments") {
          formData[key].forEach((file, index) => {
            formDataToSend.append(`kycDocuments${index}`, file);
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await axios.post(
        "http://localhost:5000/api/hotel/register",
        formDataToSend
      );

      if (response.status === 201) {
        toast.success("Registration Successful");
        navigate("/login");
        // Optionally redirect the user or clear the form here
      }
    } catch (error) {
      toast.error(
        `Registration failed: ${error.response?.data?.error || error.message}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box display="flex" justifyContent="flex-end">
        <Box
          width="100%"
          height="50px"
          borderRadius="50px"
          display="flex"
          alignItems="center"
          justifyContent="end"
          padding="10px"
        >
          <Link to="/register">
            <Button
              variant="contained"
              color="success"
              sx={{
                borderRadius: "50px",
                backgroundColor: "#20B486",
                "&:hover": {
                  backgroundColor: "#1A946D ",
                },
              }}
            >
              Register
            </Button>
          </Link>
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} width={70} alt="logo" />
          <h1
            style={{
              color: "white",
              fontSize: "60px",
              paddingLeft: "40px",
              fontFamily: "Dancing Script",
              fontOpticalSizing: "auto",
            }}
          >
            Anna Seva
          </h1>
        </div>
        <form
          style={{
            maxWidth: "600px",
            padding: "20px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                placeholder="Enter your Hotel Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleInputChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
                required
                InputProps={{
                  startAdornment: (
                    <BusinessIcon
                      sx={{ color: "black", marginRight: "10px" }}
                    />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                placeholder="Enter your Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleInputChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
                InputProps={{
                  startAdornment: (
                    <EmailIcon sx={{ color: "black", marginRight: "10px" }} />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="password"
                placeholder="Enter your Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleInputChange}
                error={!!formErrors.password}
                helperText={formErrors.password}
                required
                InputProps={{
                  startAdornment: (
                    <LockIcon sx={{ color: "black", marginRight: "10px" }} />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="address"
                placeholder="Enter your Address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.address}
                onChange={handleInputChange}
                error={!!formErrors.address}
                helperText={formErrors.address}
                required
                InputProps={{
                  startAdornment: (
                    <LocationCityIcon
                      sx={{ color: "black", marginRight: "10px" }}
                    />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                placeholder="Enter your City"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.city}
                onChange={handleInputChange}
                error={!!formErrors.city}
                helperText={formErrors.city}
                required
                InputProps={{
                  startAdornment: (
                    <LocationCityIcon
                      sx={{ color: "black", marginRight: "10px" }}
                    />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="state"
                placeholder="Enter your State"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.state}
                onChange={handleInputChange}
                error={!!formErrors.state}
                helperText={formErrors.state}
                required
                InputProps={{
                  startAdornment: (
                    <LocationCityIcon
                      sx={{ color: "black", marginRight: "10px" }}
                    />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="pincode"
                placeholder="Enter your Pincode"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.pincode}
                onChange={handleInputChange}
                error={!!formErrors.pincode}
                helperText={formErrors.pincode}
                required
                InputProps={{
                  startAdornment: (
                    <PinDropIcon sx={{ color: "black", marginRight: "10px" }} />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="contactPerson"
                placeholder="Enter Contact Person"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.contactPerson}
                onChange={handleInputChange}
                error={!!formErrors.contactPerson}
                helperText={formErrors.contactPerson}
                required
                InputProps={{
                  startAdornment: (
                    <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="contactNumber"
                placeholder="Enter Contact Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.contactNumber}
                onChange={handleInputChange}
                error={!!formErrors.contactNumber}
                helperText={formErrors.contactNumber}
                required
                InputProps={{
                  startAdornment: (
                    <PhoneIcon sx={{ color: "black", marginRight: "10px" }} />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {/* File Upload for Aadhar Image */}
              <input
                type="file"
                accept="image/*"
                name="kycDocuments"
                onChange={handleInputChange}
                style={{ display: "none" }}
                id="upload-aadhar"
              />
              <label htmlFor="upload-aadhar">
                <Button
                  variant="outlined"
                  component="span"
                  fullWidth
                  sx={{
                    borderRadius: "20px",
                    marginTop: "10px",
                    backgroundColor: "#20B486",
                    "&:hover": {
                      backgroundColor: "#1A946D ",
                    },
                  }}
                >
                  Upload Aadhar Image
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              {/* File Upload for License Image */}
              <input
                type="file"
                accept="image/*"
                name="kycDocuments"
                onChange={handleInputChange}
                style={{ display: "none" }}
                id="upload-license"
              />
              <label htmlFor="upload-license">
                <Button
                  variant="outlined"
                  component="span"
                  fullWidth
                  sx={{
                    borderRadius: "20px",
                    marginTop: "10px",
                    backgroundColor: "#20B486",
                    "&:hover": {
                      backgroundColor: "#1A946D ",
                    },
                  }}
                >
                  Upload License Image
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              {/* Map component to select latitude and longitude */}
              <TextField
                name="latitude"
                // label="Latitude"
                variant="outlined"
                fullWidth
                placeholder="Enter Latitude"
                margin="normal"
                value={formData.locationCoordinates[0]}
                onChange={handleInputChange}
                error={!!formErrors.locationCoordinates}
                helperText={formErrors.locationCoordinates}
                InputProps={{
                  startAdornment: (
                    <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
              <TextField
                name="longitude"
                // label="Longitude"
                variant="outlined"
                placeholder="Enter Longitude"
                fullWidth
                margin="normal"
                value={formData.locationCoordinates[1]}
                onChange={handleInputChange}
                error={!!formErrors.locationCoordinates}
                helperText={formErrors.locationCoordinates}
                InputProps={{
                  startAdornment: (
                    <PersonIcon sx={{ color: "black", marginRight: "10px" }} />
                  ),
                  sx: { borderRadius: "20px", backgroundColor: "white" },
                }}
              />
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleOpenMapDialog} // Open Map button
                  sx={{
                    backgroundColor: "#20B486",
                    "&:hover": {
                      backgroundColor: "#1A946D ",
                    },
                  }}
                >
                  Open Map
                </Button>
              </Grid>
              <Dialog
                open={openMapDialog}
                onClose={handleCloseMapDialog}
                maxWidth="md"
                fullWidth
              >
                <DialogTitle>Select Location on Map</DialogTitle>
                <DialogContent>
                  <MapWithGeocoder onLocationSelect={handleLocationSelect} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseMapDialog} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleCloseMapDialog} color="primary">
                    Select
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
          <p
            style={{
              color: "white",
              alignItems: "center",
              textAlign: "center",
              fontSize: "12px",
              padding: "10px",
            }}
          >
            By signing up to Anna Seva, you agree to our Terms and Privacy
            Policy.
          </p>
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            disabled={Object.keys(formErrors).length > 0 || isSubmitting}
            sx={{
              mt: 2,
              height: "50px",
              borderRadius: "20px",
              backgroundColor: "#20B486",
              "&:hover": {
                backgroundColor: "#1A946D ",
              },
            }}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default HotelRegister;
