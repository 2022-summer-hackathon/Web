export interface Profile {
  idx: number;
  level: number;
  exp: number;
  auth: {
    name: string;
    accessLevel: number;
    profileImage: string;
  };
}
