export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  isActive: boolean;
  socialId: string;
  socialAuthProvider: string;
  photoUrl: string;
}
