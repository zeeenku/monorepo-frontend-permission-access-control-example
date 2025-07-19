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
  grades: {
    create: ['instructor'],
    read: ['instructor', 'moderator', 'student'],
    update: ['instructor'],
    delete: ['instructor'],
  },
  users: {
    create: ['super-admin'],
    read: ['super-admin', 'admin'],
    update: ['super-admin', 'admin'],
    delete: ['super-admin'],
  },
  discussions: {
    create: ['student', 'instructor'],
    read: ['student', 'instructor', 'moderator'],
    update: ['student', 'instructor'],
    delete: ['moderator'],
  },
}
export type AclConfig = typeof aclConfig;