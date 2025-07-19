export type Actions = "create" | "read" | "update" | "delete";
export type Subjects = "course" | "lesson" | "progress-report" | "setting" | "dadhboard";
export type Roles = "super-admin" | "admin" | "coordinator" | "instructor" | "student";
export type AclConfig = {
  [S in Subjects]?: Partial<Record<Actions | 'read', Roles[]>>;
};


export const aclConfig = {
  courses: {
    create: ['super-admin', 'admin', 'instructor'],
    read: ['super-admin', 'admin', 'instructor', 'moderator', 'student'],
    update: ['super-admin', 'admin', 'instructor'],
    delete: ['super-admin', 'admin'],
  },
  quizzes: {
    create: ['instructor'],
    read: ['instructor', 'student', 'moderator'],
    update: ['instructor'],
    delete: ['instructor'],
  },
  exams: {
    create: ['instructor'],
    read: ['instructor', 'student', 'moderator'],
    update: ['instructor'],
    delete: ['instructor'],
  },
  lessons: {
    create: ['instructor'],
    read: ['instructor', 'student', 'moderator'],
    update: ['instructor'],
    delete: ['instructor'],
  },
  grades: {
    create: ['instructor'],
    read: ['instructor', 'moderator', 'student'],
    update: ['instructor'],
    delete: ['instructor'],
  },
  discussions: {
    create: ['student', 'instructor'],
    read: ['student', 'instructor', 'moderator'],
    update: ['student', 'instructor'],
    delete: ['moderator'],
  },
  dashboard: {
    read: ['super-admin', 'admin'],
  },
} as const;

