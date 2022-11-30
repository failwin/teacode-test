export type Id = number;
export type Contact = {
  id: Id;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string | null;
};

export const dataProvider = {
  async getContacts(): Promise<Contact[]> {
    const res = await fetch(
      'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const list = await res.json();
    return list;
  },
  filterByQuery(item: Contact, query: string) {
    const queryLower = query.toLowerCase();
    const { first_name, last_name } = item;
    if (first_name && first_name.toLowerCase().includes(queryLower)) {
      return true;
    }
    if (last_name && last_name.toLowerCase().includes(queryLower)) {
      return true;
    }
    return false;
  },
};
