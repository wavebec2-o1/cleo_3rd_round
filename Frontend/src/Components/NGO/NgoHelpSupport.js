import React, { useState, useEffect } from 'react';

// Dummy data while fetching real data
const dummyDonations = [
    {
        donationDetails: {
            _id: '1',
            name: 'Dummy Donation 1',
            shipmentStatus: 'Pending'
        }
    },
    {
        donationDetails: {
            _id: '2',
            name: 'Dummy Donation 2',
            shipmentStatus: 'Delivered'
        }
    }
];

const HelpSupport = () => {
    const [donations, setDonations] = useState([]);
    const [reportReason, setReportReason] = useState('');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user data from local storage
        const storedUserData = localStorage.getItem('user');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setUser(userData);
        }
    }, []);

    useEffect(() => {
        if (user) {
            // Once the user data is available, fetch donations
            // For now, setting dummy data
            setTimeout(() => {
                setDonations(dummyDonations);
                setLoading(false);
            }, 2000);
        }
    }, [user]); // Trigger the effect when user changes

    const handleReport = async (donationId) => {
        // Dummy function for reporting
        console.log(`Reporting donation ${donationId} for reason: ${reportReason}`);
        // You can add actual reporting logic here
    };

    return (
        <div>
            <h2>Claimed Donations</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {donations.map(donation => (
                        <li key={donation.donationDetails._id}>
                            <p>{donation.donationDetails.name}</p>
                            <p>Shipment Status: {donation.donationDetails.shipmentStatus}</p>
                            <button onClick={() => handleReport(donation.donationDetails._id)}>Report</button>
                            <input
                                type="text"
                                placeholder="Reason for reporting"
                                value={reportReason}
                                onChange={(e) => setReportReason(e.target.value)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HelpSupport;
