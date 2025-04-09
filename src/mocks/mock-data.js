import company from '../assets/images/company.svg'
import tasks from '../assets/images/tasks.svg'
import team from '../assets/images/team.svg'
import doc from '../assets/images/doc.svg'
import users from '../assets/images/users.svg'
import avatar from '../assets/images/avatar.jpg'

class User {
    constructor(role) {
        this.role = JSON.parse(JSON.stringify(roles[role]));
        this.role.name = role;
    }

    getCards() {
        return this.role.cardsId.map(cardId => allCards[cardId]) 
    }

    getUserInfo() {
        return {
            surname: 'Петров',
            name: 'Иван',
            position: 'Программист-стажер',
            email: 'ipetrov@ntec.by',
            avatar: avatar
        }
    }
}

const roles = {
    trainee: {
        id: 0,
        cardsId: [0, 1, 2, 3] 
    },
    mentor: { 
        id: 1,
        cardsId: [0, 6, 2, 3]
    
    },
    head: {
        id: 2,
        cardsId: [0, 7, 2, 3]
    }, 
    hr: {
        id: 3,
        cardsId: [0, 5, 4, 3]
    }
}

const allCards = [
    {
        title: 'О компании',
        subtitle: 'История, миссия и ценности компании',
        img: company,
        path: '/about'
    },
    {
        title: 'Мои задачи',
        subtitle: 'Текущие задания и дедлайны',
        img: tasks,
        path: '/tasks'
    },
    {
        title: 'Моя команда',
        subtitle: 'Об отделе, список коллег, контакты',
        img: team,
        path: '/departments'
    },
    {
        title: 'Документация',
        subtitle: 'Важные файлы и инструкции, обучение',
        img: doc,
        path: '/documents'
    },
    {
        title: 'Отделы',
        subtitle: 'Просмотр всех отделов, создание и редактирование',
        img: team,
        path: '/departments'
    },
    {
        title: 'Пользователи',
        subtitle: 'Просмотр всех пользователей и управление ими',
        img: users,
        path: '/users'
    },
    {
        title: 'Подопечные',
        subtitle: 'Просмотр своих подопечных, котроль выполнения задач',
        img: users,
        path: '/users'
    },
    {
        title: 'Менторы и новички',
        subtitle: 'Просмотр своих подопечных, котроль выполнения задач',
        img: users,
        path: '/users'
    }
]

export const initialTasks = [
    {   
        id: 0,
        name: 'Задача 1',
        description: 'Это описание первой задачи. Задача очень интересная. Задача крутая. Задачаааааа',
        dateCreation: '19.03.2025',
        dateDeadline: '25.03.2025',
        status: 'inWork'
    },
    {
        id: 1,
        name: 'Задача 2',
        description: 'Описание 1',
        dateCreation: '19.03.2025',
        dateDeadline: '25.03.2025',
        status: 'waiting'
    },
    {
        id: 2,
        name: 'Задача 3',
        description: 'Описание 1',
        dateCreation: '19.03.2025',
        dateDeadline: '25.03.2025',
        status: 'overdue'
    },
    {
        id: 3,
        name: 'Задача 4',
        description: 'Описание 1',
        dateCreation: '19.03.2025',
        dateDeadline: '25.03.2025',
        status: 'completed'
    },
    {
        id: 4,
        name: 'Задача 5',
        description: 'Описание 1',
        dateCreation: '19.03.2025',
        dateDeadline: '25.03.2025',
        status: 'inWork'
    },
    {
        id: 5,
        name: 'Задача 5',
        description: 'Описание 1',
        dateCreation: '19.03.2025',
        dateDeadline: '25.03.2025',
        status: 'inWork'
    },
]

export const statusTabs = [
    { 
        key: 'inWork', 
        label: 'В работе' 
    },
    { 
        key: 'waiting', 
        label: 'Ожидающие контроля' 
    },
    { 
        key: 'overdue', 
        label: 'Просроченные' 
    },
    { 
        key: 'completed', 
        label: 'Завершенные' 
    }
  ];

  export const roleTitles = {
    head: 'Руководитель',
    mentors: 'Менторы',
    others: 'Остальные сотрудники'
  };

  export const employeesData = {
    head: [
      {
        name: "Шевцов Алексей",
        position: "Начальник отдела программирования",
        email: "ashevcov@ntec.by",
        role: "head",
        avatar: ""
      }
    ],
    mentors: [
      {
        name: "Иванова Мария",
        position: "Старший разработчик",
        email: "ivanova@ntec.by",
        role: "mentor",
        avatar: ""
      },
      {
        name: "Петров Сергей",
        position: "Ведущий программист",
        email: "petrov@ntec.by",
        role: "mentor",
        avatar: ""
      }
    ],
    others: [
      {
        name: "Сидорова Анна",
        position: "Младший разработчик",
        email: "sidorova@ntec.by",
        role: "other",
        avatar: ""
      },
      {
        name: "Козлов Дмитрий",
        position: "Тестировщик",
        email: "kozlov@ntec.by",
        role: "other",
        avatar: ""
      },
      {
        name: "Николаева Елена",
        position: "Аналитик",
        email: "nikolaeva@ntec.by",
        role: "other",
        avatar: ""
      }
    ]
  };

  export const documentsData = [
    {
      id: 1,
      title: "Должностная инструкция.docx",
      type: "document",
    },
    {
      id: 2,
      title: "Правила внутреннего распорядка",
      type: "link",
      url: "",
    },
    {
      id: 3,
      title: "Регламент работы с клиентами.pdf",
      type: "document",
    },
    {
      id: 4,
      title: "Корпоративный портал",
      type: "link",
      url: "",
    },
    {
      id: 5,
      title: "Шаблон договора.docx",
      type: "document",
    },
    {
      id: 6,
      title: "База знаний",
      type: "link",
      url: "",
    },
    {
      id: 7,
      title: "Политика безопасности.pdf",
      type: "document",
    },
    {
      id: 8,
      title: "Облачное хранилище",
      type: "link",
      url: "",
    }
  ];

const currentUser = new User('trainee')

export const cards = currentUser.getCards()
export const userInfo = currentUser.getUserInfo()