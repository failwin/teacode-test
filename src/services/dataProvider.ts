export type Id = number;
export type Contact = {
  id: Id;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string | null;
};

class DataProvider {
  private data: Contact[] | undefined;

  async getContacts(query: string): Promise<Contact[]> {
    let list = await this.loadContacts();
    if (query) {
      list = list.filter((item) => this.filterByQuery(item, query));
    }
    list.sort((a, b) => {
      if (a.last_name === b.last_name) {
        return 0;
      }
      return a.last_name > b.last_name ? 1 : -1;
    });
    return list;
  }

  private async loadContacts() {
    if (!this.data) {
      const res = await fetch(
        'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      this.data = await res.json();
    }
    return this.data!;
  }

  private filterByQuery(item: Contact, query: string) {
    const queryLower = query.toLowerCase();
    const { first_name, last_name } = item;
    if (first_name && first_name.toLowerCase().includes(queryLower)) {
      return true;
    }
    if (last_name && last_name.toLowerCase().includes(queryLower)) {
      return true;
    }
    return false;
  }
}

export const dataProvider = new DataProvider();
