export type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string | null;
};

const data = [
  {
    id: 1,
    first_name: 'Suzie',
    last_name: 'Kydd',
    email: 'skydd0@prnewswire.com',
    gender: 'Female',
    avatar: 'https://robohash.org/fugiatautemodit.png?size=50x50&set=set1',
  },
  {
    id: 2,
    first_name: 'Finley',
    last_name: 'Fenich',
    email: 'ffenich1@spotify.com',
    gender: 'Male',
    avatar:
      'https://robohash.org/doloribusaspernaturea.png?size=50x50&set=set1',
  },
  {
    id: 3,
    first_name: 'Jim',
    last_name: 'Sedgemond',
    email: 'jsedgemond2@chron.com',
    gender: 'Male',
    avatar: 'https://robohash.org/magniestporro.png?size=50x50&set=set1',
  },
  {
    id: 4,
    first_name: 'Tiffany',
    last_name: 'Glendinning',
    email: 'tglendinning3@goo.ne.jp',
    gender: 'Female',
    avatar: 'https://robohash.org/etenimut.png?size=50x50&set=set1',
  },
  {
    id: 5,
    first_name: 'Roshelle',
    last_name: 'Plail',
    email: 'rplail4@topsy.com',
    gender: 'Female',
    avatar: 'https://robohash.org/officiisdoloremodit.png?size=50x50&set=set1',
  },
  {
    id: 6,
    first_name: 'Lesley',
    last_name: 'Dominiak',
    email: 'ldominiak5@msn.com',
    gender: 'Female',
    avatar: 'https://robohash.org/autdeseruntexcepturi.png?size=50x50&set=set1',
  },
  {
    id: 7,
    first_name: 'Claudina',
    last_name: 'Northen',
    email: 'cnorthen6@pcworld.com',
    gender: 'Female',
    avatar: 'https://robohash.org/fugaperspiciatisea.png?size=50x50&set=set1',
  },
  {
    id: 8,
    first_name: 'Sasha',
    last_name: 'Manie',
    email: 'smanie7@china.com.cn',
    gender: 'Female',
    avatar: 'https://robohash.org/sitdistinctiorerum.png?size=50x50&set=set1',
  },
  {
    id: 9,
    first_name: 'Garfield',
    last_name: 'McIlmurray',
    email: 'gmcilmurray8@un.org',
    gender: 'Male',
    avatar: null,
  },
  {
    id: 10,
    first_name: 'Stefanie',
    last_name: 'Leahair',
    email: 'sleahair9@desdev.cn',
    gender: 'Female',
    avatar:
      'https://robohash.org/reprehenderitquaenisi.png?size=50x50&set=set1',
  },
  {
    id: 11,
    first_name: 'Isahella',
    last_name: 'Nottle',
    email: 'inottlea@slate.com',
    gender: 'Female',
    avatar:
      'https://robohash.org/repellendusinciduntamet.png?size=50x50&set=set1',
  },
  {
    id: 12,
    first_name: 'Drucie',
    last_name: 'Wither',
    email: 'dwitherb@jigsy.com',
    gender: 'Female',
    avatar: 'https://robohash.org/etdolordoloremque.png?size=50x50&set=set1',
  },
  {
    id: 13,
    first_name: 'Hamil',
    last_name: 'Brigstock',
    email: 'hbrigstockc@a8.net',
    gender: 'Male',
    avatar: 'https://robohash.org/fugitcumqueautem.png?size=50x50&set=set1',
  },
  {
    id: 14,
    first_name: 'Gavrielle',
    last_name: 'Bloxholm',
    email: 'gbloxholmd@comsenz.com',
    gender: 'Female',
    avatar: 'https://robohash.org/quiaquaeratvelit.png?size=50x50&set=set1',
  },
  {
    id: 15,
    first_name: 'Phineas',
    last_name: 'Gudge',
    email: 'pgudgee@economist.com',
    gender: 'Male',
    avatar: 'https://robohash.org/voluptateidsit.png?size=50x50&set=set1',
  },
  {
    id: 16,
    first_name: 'Darrick',
    last_name: 'Dearle-Palser',
    email: 'ddearlepalserf@so-net.ne.jp',
    gender: 'Male',
    avatar:
      'https://robohash.org/dolorumblanditiisvoluptatem.png?size=50x50&set=set1',
  },
];

export const dataProvider = {
  getContacts(): Promise<Contact[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
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
