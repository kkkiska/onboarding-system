import company from '../assets/images/company.svg'
import tasks from '../assets/images/tasks.svg'
import team from '../assets/images/team.svg'
import doc from '../assets/images/doc.svg'

export class User {
    constructor(role) {
        this.role = JSON.parse(JSON.stringify(roles[role]));
        this.role.name = role;
    }

    getCards() {
        return this.role.cardsId.map(cardId => cards[cardId]) 
    }

    getUserInfo() {
        return {
            surname: 'Петров',
            name: 'Иван',
            position: 'Программист-стажер',
            email: 'ipetrov@ntec.by'
        }
    }
}

const roles = {
    'trainee': {
        id: 0,
        cardsId: [0, 1, 2, 3] 
    },
    'mentor': { 
        id: 1,
        cardsId: [0, 6, 2, 3]
    
    },
    'head': {
        id: 2,
        cardsId: [0, 7, 2, 3]
    }, 
    'hr': {
        id: 3,
        cardsId: [0, 5, 4, 3]
    }
}

const cards = [
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
        img: 'users',
        path: '/users'
    },
    {
        title: 'Подопечные',
        subtitle: 'Просмотр своих подопечных, котроль выполнения задач',
        img: 'users',
        path: '/users'
    },
    {
        title: 'Менторы и новички',
        subtitle: 'Просмотр своих подопечных, котроль выполнения задач',
        img: 'users',
        path: '/users'
    }
]