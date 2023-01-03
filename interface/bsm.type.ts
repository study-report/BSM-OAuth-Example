export interface BsmOauthUser {
  email: string;
  nickname: string;
  role: string;
  student: {
    name: string;
    enrolledAt: number;
    grade: number;
    classNo: number;
    studentNo: number;
  };
  userCode: number;
}
