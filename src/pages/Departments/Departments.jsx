import { useState } from "react";
import AboutDepartment from "../../components/Departments/AboutDepartment"
import Structure from "../../components/Departments/Structure"
import UserModal from "../../components/Departments/UserModal"

const Departments = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
    
    const handleModalClose = () => {
        setSelectedUser(null);
    };

    return (
        <>
            <AboutDepartment />
            <Structure onUserClick={handleUserClick} />
            <UserModal 
                user={selectedUser} 
                onClose={handleModalClose} 
            />
        </>
    )
}

export default Departments