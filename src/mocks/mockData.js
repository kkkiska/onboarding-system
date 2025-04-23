import { Company } from "../models/Company";

// Генератор случайных дат
const randomDate = (start, end) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0]; // Формат YYYY-MM-DD
};

const generateTasks = (userId, count = 3) => {
  const taskTemplates = [
    { name: "Изучение", desc: "Изучить новые технологии по теме" },
    { name: "Разработка", desc: "Реализовать функционал" },
    { name: "Рефакторинг", desc: "Улучшить существующий код" },
    { name: "Тестирование", desc: "Протестировать фичу" },
    { name: "Документация", desc: "Написать документацию" },
  ];

  return Array.from({ length: count }, (_, i) => {
    const template = taskTemplates[i % taskTemplates.length];
    return {
      id: userId * 100 + i + 1,
      name: `${template.name} задачи ${i + 1}`,
      description: `${template.desc} для пользователя ${userId}`,
      dateCreation: new Date(
        Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
      ).toISOString(),
      dateDeadline: new Date(
        Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000
      ).toISOString(),
      status: ["inWork", "waiting", "completed"][Math.floor(Math.random() * 3)],
    };
  });
};

export const departmentData = [
  {
    id: 1,
    name: "Frontend разработка",
    description: "Разработка пользовательских интерфейсов",
  },
  {
    id: 2,
    name: "Backend разработка",
    description: "Разработка серверной логики и API",
  },
  {
    id: 3,
    name: "Data Science",
    description: "Анализ данных и машинное обучение",
  },
  {
    id: 4,
    name: "DevOps",
    description: "Инфраструктура и deployment",
  },
  {
    id: 5,
    name: "HR отдел",
    description: "Управление персоналом и рекрутинг",
  },
];

export const employeeData = [
  // ========== HR отдел ==========
  {
    id: 1,
    name: "Анна Семёнова",
    email: "hr@company.com",
    departmentId: 5,
    position: "HR Director",
    role: "hr",
    avatar: "https://i.pravatar.cc/150?img=50",
    regDate: "2018-05-10",
  },
  {
    id: 2,
    name: "Дмитрий Ковалёв",
    email: "d.kowalew@company.com",
    departmentId: 5,
    position: "HR Manager",
    role: "hr",
    avatar: "https://i.pravatar.cc/150?img=51",
    regDate: "2020-02-15",
  },

  // ===== Frontend отдел =====
  {
    id: 3,
    name: "Сергей Петров",
    email: "frontend-lead@company.com",
    departmentId: 1,
    position: "Frontend Team Lead",
    role: "head",
    avatar: "https://i.pravatar.cc/150?img=1",
    regDate: "2019-03-12",
  },
  {
    id: 4,
    name: "Елена Смирнова",
    email: "e.smirnova@company.com",
    departmentId: 1,
    position: "Senior Frontend",
    role: "mentor",
    avatar: "https://i.pravatar.cc/150?img=2",
    regDate: "2020-07-18",
    subordinatesIds: [5, 6],
  },
  {
    id: 5,
    name: "Иван Мельников",
    email: "i.melnikov@company.com",
    departmentId: 1,
    position: "Junior Frontend",
    role: "trainee",
    avatar: "https://i.pravatar.cc/150?img=3",
    regDate: "2023-01-10",
    tasks: generateTasks(5),
  },

  // ===== Backend отдел =====
  {
    id: 6,
    name: "Александр Волков",
    email: "backend-lead@company.com",
    departmentId: 2,
    position: "Backend Architect",
    role: "head",
    avatar: "https://i.pravatar.cc/150?img=4",
    regDate: "2018-11-05",
  },
  {
    id: 7,
    name: "Ольга Фёдорова",
    email: "o.fedorova@company.com",
    departmentId: 2,
    position: "Backend Developer",
    role: "mentor",
    avatar: "https://i.pravatar.cc/150?img=5",
    regDate: "2021-09-12",
    subordinatesIds: [8, 9],
  },
  {
    id: 8,
    name: "Артём Новиков",
    email: "a.novikov@company.com",
    departmentId: 2,
    position: "Backend Trainee",
    role: "trainee",
    avatar: "https://i.pravatar.cc/150?img=6",
    regDate: "2023-03-15",
    tasks: generateTasks(8, 4),
  },

  // ===== Data Science =====
  {
    id: 9,
    name: "Михаил Соколов",
    email: "data-lead@company.com",
    departmentId: 3,
    position: "Chief Data Scientist",
    role: "head",
    avatar: "https://i.pravatar.cc/150?img=7",
    regDate: "2019-06-20",
  },
  {
    id: 10,
    name: "Наталья Воронцова",
    email: "n.vorontsova@company.com",
    departmentId: 3,
    position: "Data Engineer",
    role: "mentor",
    avatar: "https://i.pravatar.cc/150?img=8",
    regDate: "2021-12-01",
    subordinatesIds: [11, 12],
  },
  {
    id: 11,
    name: "Денис Козлов",
    email: "d.kozlov@company.com",
    departmentId: 3,
    position: "Data Analyst",
    role: "trainee",
    avatar: "https://i.pravatar.cc/150?img=9",
    regDate: "2023-02-20",
    tasks: generateTasks(11),
  },

  // ===== DevOps =====
  {
    id: 12,
    name: "Андрей Морозов",
    email: "devops-lead@company.com",
    departmentId: 4,
    position: "DevOps Lead",
    role: "head",
    avatar: "https://i.pravatar.cc/150?img=10",
    regDate: "2020-04-15",
  },
  {
    id: 13,
    name: "Игорь Павлов",
    email: "i.pavlov@company.com",
    departmentId: 4,
    position: "Senior DevOps",
    role: "mentor",
    avatar: "https://i.pravatar.cc/150?img=11",
    regDate: "2021-08-10",
    subordinatesIds: [14, 15],
  },
  {
    id: 14,
    name: "Анна Белова",
    email: "a.belova@company.com",
    departmentId: 4,
    position: "DevOps Intern",
    role: "trainee",
    avatar: "https://i.pravatar.cc/150?img=12",
    regDate: "2023-04-05",
    tasks: generateTasks(14, 5),
  },
];

export const initializeCompany = () => {
  const company = new Company();

  company.createDepartments(departmentData);

  company.hireEmployees(employeeData);

  company.login(5);

  return company;
};

export const company = initializeCompany();
