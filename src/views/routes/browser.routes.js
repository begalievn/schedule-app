export const BrowserRoute = {
  notFound: "*",
  startPage: "/",
  SCHEDULE_PAGE: "/schedule",
  ADMIN: "/admin",
  ADMIN_SCHEDULE: "schedule",
    ADMIN_SCHEDULE_PAGE_LIST: "list",
    ADMIN_SCHEDULE_PAGE_CREATE: "create",
    ADMIN_SCHEDULE_PAGE_SEND: "send",
    ADMIN_SCHEDULE_PAGE_TABLE: "table",
    ADMIN_SCHEDULE_PAGE_TABLE_SELECTED: "table/:id",
  ADMIN_TEACHER: "teacher",
    ADMIN_TEACHER_LIST: 'list',
    ADMIN_TEACHER_CREATE: 'create',
    ADMIN_TEACHER_UPDATE: 'list/:id',
  ADMIN_SUBJECT: "subject",
    ADMIN_SUBJECT_LIST:'list',
    ADMIN_SUBJECT_CREATE:'create',
    ADMIN_SUBJECT_UPDATE:'update/:_id',
  ADMIN_CLASSROOM: "classroom",
    ADMIN_CLASSROOM_LIST: 'list',
    ADMIN_CLASSROOM_CREATE: 'create',
    ADMIN_CLASSROOM_UPDATE: 'update/:id',
  ADMIN_GROUP: "group",
    ADMIN_GROUP_LIST: 'list',
    ADMIN_GROUP_CRATE: 'create',
    ADMIN_GROUP_UPDATE: 'update/:id',
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
};
