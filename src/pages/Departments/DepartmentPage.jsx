import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AboutDepartment from "../../components/Departments/AboutDepartment";
import Structure from "../../components/Departments/Structure";
import UserModal from "../../components/Departments/UserModal";
import { company } from "../../mocks/mockData";

const DepartmentPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const currentUser = company.currentUser;
  const currentDept = company.getDepartment(parseInt(departmentId));
  useEffect(() => {
    if (
      !company.hasRole("hr") &&
      currentUser.departmentId !== parseInt(departmentId)
    ) {
      navigate(`/departments/${currentUser.departmentId}`);
    }
  }, [currentUser, company, departmentId, navigate]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleModalClose = () => {
    setSelectedUser(null);
  };

  if (!currentDept) {
    return <>Такого отдела не существует</>;
  }

  return (
    <>
      <AboutDepartment
        departmentName={currentDept.name}
        description={currentDept.description}
      />
      <Structure dept={currentDept} onUserClick={handleUserClick} />
      <UserModal user={selectedUser} onClose={handleModalClose} />
    </>
  );
};

export default DepartmentPage;
