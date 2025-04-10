import { useState } from "react";
import { useParams } from 'react-router-dom';
import AboutDepartment from "../../components/Departments/AboutDepartment"
import Structure from "../../components/Departments/Structure"
import UserModal from "../../components/Departments/UserModal"
import { departments } from "../../mocks/mock-data";

const DepartmentPage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const { departmentId } = useParams();
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
    
    const handleModalClose = () => {
        setSelectedUser(null);
    };

    return (
        <>
            <AboutDepartment departmentName={departments[departmentId].name}/>
            <Structure onUserClick={handleUserClick} />
            <UserModal 
                user={selectedUser} 
                onClose={handleModalClose} 
            />
        </>
    )
}

export default DepartmentPage