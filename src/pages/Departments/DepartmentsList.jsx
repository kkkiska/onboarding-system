import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { currentUser, departments, userInfo } from '../../mocks/mock-data';
import Plate from '../../components/UI/Plate/Plate';
import styles from './Department.module.scss'

const DepartmentsList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.isTrainee()) {
      navigate(`/departments/${userInfo.departmentId}`);
    }
  }, [currentUser, navigate]);

  if (currentUser.isHR()) {
    return (
      <Plate className={styles['plate']}>
        <ul>
          {departments.map(dept => (
            <li className={styles['link']} key={dept.id}>
              <Link to={`/departments/${dept.id}`}>
                {dept.name}
              </Link>
            </li>
          ))}
        </ul>
      </Plate>
    );
  }

  return null;
};

export default DepartmentsList