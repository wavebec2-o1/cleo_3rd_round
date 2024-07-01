import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/donation/getReceivedDonationForNgo?id=${user._id}`
        );
        setDonations(response.data.claimedDonationsWithDetails);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, [user._id]);

  const handleTrackingClick = async (donationId) => {
    setOpen(true);
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tracking/${donationId}`
      );
      setTrackingInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tracking info:", error);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTrackingInfo(null);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {donations.length === 0 ? (
        <Typography variant="h5" align="center" sx={{ mt: 3 }}>
          No Donations available at this point
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {donations.map((donation) => {
            const donationDetails = donation?.donationDetails;
            const uploadPhoto = donationDetails?.uploadPhoto;
            const imageUrl =
              uploadPhoto && uploadPhoto.includes("\\")
                ? `http://localhost:5000/donations/${uploadPhoto
                    .split("\\")
                    .pop()}`
                : uploadPhoto
                ? `http://localhost:5000/donations/${uploadPhoto}`
                : "https://via.placeholder.com/200";

            return (
              <Grid item xs={12} sm={6} md={4} key={donationDetails?._id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: `3px 3px 10px green`,
                  }}
                >
                  {imageUrl ? (
                    <CardMedia
                      component="img"
                      height="200"
                      image={imageUrl}
                      alt={donationDetails?.name || "Donation Image"}
                      style={{ height: "200px", objectFit: "cover" }} // Add this line to fix image size
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://via.placeholder.com/200"
                      alt="No Image Available"
                      style={{ height: "200px", objectFit: "cover" }} // Add this line to fix image size
                    />
                  )}
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {donationDetails?.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                      >
                        Contact
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ ml: 2, mt: 2 }}
                        onClick={() =>
                          handleTrackingClick(donationDetails?._id)
                        }
                      >
                        Live Tracking
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tracking Information</DialogTitle>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : trackingInfo ? (
            <Box sx={{ padding: 2 }}>
              <Typography variant="body1">
                Current Location: {trackingInfo.currentLocation}
              </Typography>
              <Typography variant="body1">
                Status: {trackingInfo.status}
              </Typography>
              <Typography variant="body1">
                Expected Delivery: {trackingInfo.expectedDelivery}
              </Typography>
              {/* Add more tracking details as needed */}
            </Box>
          ) : (
            <Typography variant="h6">
              No tracking information available.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DonationList;
