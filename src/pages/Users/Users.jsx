import { useState } from "react";
import Plate from "../../components/UI/Plate/Plate"
import styles from './Users.module.scss';
import { departments } from "../../mocks/mock-data";

const Users = () => {
    const [activeTab, setActiveTab] = useState('all');


    const users = [
        {
          id: 1,
          avatar: 'https://i.pravatar.cc/150?img=1',
          name: 'Иван Петров',
          department: 'Отдел информационной безопасности',
          role: 'Адаптант',
          regDate: '15.04.2025',
          email: 'test@ntec.by'
        },
        {
          id: 2,
          avatar: 'https://i.pravatar.cc/150?img=3',
          name: 'Анна Иванова',
          department: 'Отдел кадрового делопроизводства',
          role: 'HR',
          regDate: '10.04.2025',
          email: 'test@ntec.by'
        },
      ];

      const filteredUsers = activeTab === 'all' 
        ? users 
        : users.filter(user => user.department === activeTab);

        return (
            <Plate className={styles['container']}>
              <aside className={styles['sidebar']}>
                <h3 className={styles['sidebar-title']}>Отделы</h3>
                <nav>
                  <ul className={styles['departments-list']}>
                    {departments.map(dept => (
                      <li key={dept.id}>
                        <button
                          className={`${styles['department-tab']} ${activeTab === dept.id ? styles['active'] : ''}`}
                          onClick={() => setActiveTab(dept.name)}
                        >
                          {dept.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
        
              <main className={styles['content']}>
                <h1 className={styles['title']}>Сотрудники</h1>
                
                <div className={styles['users-table']}>
                  <div className={styles['table-header']}>
                    <div className={styles['col-avatar']}></div>
                    <div className={styles['col-name']}>ФИО</div>
                    <div className={styles['col-dept']}>Отдел</div>
                    <div className={styles['col-role']}>Роль</div>
                    <div className={styles['col-regDate']}>Дата регистрации</div>
                  </div>
                  
                  {filteredUsers.map(user => (
                    <div key={user.id} className={styles['table-row']}>
                      <div className={styles['col-avatar']}>
                        <img src={user.avatar} alt={user.name} className={styles['avatar']} />
                      </div>
                      <div className={styles['col-name']}>
                        <div className={styles['user-name']}>{user.name}</div>
                        <div className={styles['user-email']}>{user.email}</div>
                      </div>
                      <div className={styles['col-dept']}>
                        <span className={styles['department-badge']}>{user.department}</span>
                      </div>
                      <div className={styles['col-role']}>
                        <span className={styles['role-badge']}>{user.role}</span>
                      </div>
                      <div className={styles['col-regDate']}>
                        {user.regDate}
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </Plate>
        );
}

export default Users