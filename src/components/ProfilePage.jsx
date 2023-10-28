import  { useEffect, useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import BadgeIcon from '@mui/icons-material/Badge';

const ProfilePage = () => {
  // Define a state to store user details
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    about: '',
    contactNumber: '',
    gender: '',
  });

  useEffect(() => {
    // Replace this with an API call to fetch user details based on the provided data
    // For now, we'll use a dummy data
    const dummyUserData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      dateOfBirth: '1990-01-01',
      about: 'I love programming!',
      contactNumber: '123-456-7890',
      gender: 'Male',
    };

    // Set user details
    setUserDetails(dummyUserData);
  }, []);

  return (
    <div className="ecomm-popup bg-white top-0 z-20 w-full h-screen flex justify-center items-center text-black">
      <div className="w-[400px] bg-white duration-300 ease-in relative flex flex-col p-5 rounded-lg shadow-lg">
        {/* <CloseIcon className="absolute top-5 right-5 cursor-pointer" /> */}
        <div className="w-full h-[50px] text-center">
          <h1 className="text-3xl font-bold text-red-500">User Profile</h1>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <BadgeIcon className="badge-icon text-2xl text-red-500 mx-2 my-2" />
            <span className="font-semibold text-lg">Name :</span> {userDetails.firstName} {userDetails.lastName}
          </div>
          <div className="mb-4">
            <BadgeIcon className="badge-icon text-2xl text-red-500 mx-2 my-2" />
            <span className="font-semibold text-lg">Email :</span> {userDetails.email}
          </div>
          <div className="mb-4">
            <BadgeIcon className="badge-icon text-2xl text-red-500 mx-2 my-2" />
            <span className="font-semibold text-lg">Date of Birth :</span> {userDetails.dateOfBirth}
          </div>
          <div className="mb-4">
            <BadgeIcon className="badge-icon text-2xl text-red-500 mx-2 my-2" />
            <span className="font-semibold text-lg">About :</span> {userDetails.about}
          </div>
          <div className="mb-4">
            <BadgeIcon className="badge-icon text-2xl text-red-500 mx-2 my-2" />
            <span className="font-semibold text-lg">Contact Number :</span> {userDetails.contactNumber}
          </div>
          <div className="mb-4">
            <BadgeIcon className="badge-icon text-2xl text-red-500 mx-2 my-2" />
            <span className="font-semibold text-lg">Gender : </span> {userDetails.gender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
