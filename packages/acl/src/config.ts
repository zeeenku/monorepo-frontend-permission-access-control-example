export type Actions = "create" | "read" | "update" | "delete";
export type Subjects = "course" | "lesson" | "progress-report" | "setting" | "dashboard";
export type Roles = "super-admin" | "admin" | "moderator" | "instructor" | "student";
export type AclConfig = {
  [S in Subjects]?: Partial<Record<Actions | 'read', Roles[]>>;
};

export const aclConfig: AclConfig = {
  course: {
    create: ['super-admin', 'admin', 'instructor'],
    read: ['super-admin', 'admin', 'instructor', 'moderator', 'student'],
    update: ['super-admin', 'admin', 'instructor'],
    delete: ['super-admin'],
  },
  lesson: {
    create: ['instructor'],
    read: ['instructor', 'student', 'moderator'],
    update: ['instructor'],
    delete: ['instructor'],
  },
  'progress-report': {
    read: ['super-admin', 'admin', 'moderator', 'instructor', 'student'],
  },
  setting: {
    create: ['super-admin'],
    read: ['super-admin', 'admin'],
    update: ['super-admin', 'admin'],
    delete: ['super-admin'],
  },
  dashboard: {
    read: ['super-admin', 'admin'],
  },
};

