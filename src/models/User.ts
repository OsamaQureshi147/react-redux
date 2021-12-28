export interface User {
  id: string;
  email: string;
  username: string;
  name: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
  };
  geo: {
    lat?: string;
    lng?: string;
  };
  phone?: string;
  website: string;
  company: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
