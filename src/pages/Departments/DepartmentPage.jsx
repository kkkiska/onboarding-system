import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AboutDepartment from "../../components/Departments/AboutDepartment";
import Structure from "../../components/Departments/Structure";
import UserModal from "../../components/Departments/UserModal";
import { currentUser, departments, userInfo } from "../../mocks/mock-data";

const DepartmentPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { departmentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      currentUser.isTrainee() &&
      userInfo.departmentId !== parseInt(departmentId)
    ) {
      navigate(`/departments/${userInfo.departmentId}`);
    }
  }, [currentUser, userInfo, departmentId, navigate]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleModalClose = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <AboutDepartment
        departmentName={departments[departmentId].name}
        description={departments[departmentId].description}
      />
      <Structure
        employees={departments[departmentId].employees}
        onUserClick={handleUserClick}
      />
      <UserModal user={selectedUser} onClose={handleModalClose} />
    </>
  );
};

export default DepartmentPage;
