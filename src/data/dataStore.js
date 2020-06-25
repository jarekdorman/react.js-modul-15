export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },

  defaultImage: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const faqContent = {
  defaultImage: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  title: 'FAQ',
  description: 'Before you ask see frequently asked questions',
  qa: {
    qa1: {
      question: 'Can I add custom Column?',
      answer: 'Yes, just insert column title and click OK',
    },
    qa2: {
      question: 'Can I add custom card?',
      answer: 'Yes, just insert card title and click OK',
    },
    qa3: {
      question: 'Can I add custom list?',
      answer: 'We  are workig on this, will be available soon',
    },
  },
};

export const infoContent = {
  defaultImage: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image:
    'https://png.pngtree.com/png-clipart/20190618/original/pngtree-nebula-starry-sky-star-space-png-image_3924826.jpg',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Upcoming charges',
    description: 'It must be paid...',
    image:
      'https://previews.123rf.com/images/milosz7/milosz71012/milosz7101200013/8509393-close-up-of-american-currency-money-bills.jpg',
  },
  {
    id: 'list-3',
    title: 'Vacation',
    description: 'Vacation checklist...',
    image:
      'https://dvapvh58pp4t7.cloudfront.net/1/dreamtrips/Media/worldventures/Albums/297fd98b-54a6-4699-8099-ba1d31a881e1/o_20190402101934521_OC_FrenchPolynesia_Tahiti_Beach_1.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Children',
    icon: 'person',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Car',
    icon: 'car',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Europe',
    icon: 'world',
  },	  
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },

  {
    id: 'card-7',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },

  {
    id: 'card-8',
    columnId: 'column-4',
    title: 'Electricity',
    index: 0,
  },
  {
    id: 'card-9',
    columnId: 'column-4',
    title: 'Internet',
    index: 1,
  },
  {
    id: 'card-10',
    columnId: 'column-4',
    title: 'Heating',
    index: 2,
  },
  {
    id: 'card-11',
    columnId: 'column-5',
    title: 'English lessons',
    index: 0,
  },
  {
    id: 'card-12',
    columnId: 'column-5',
    title: 'Ski',
    index: 1,
  },
  {
    id: 'card-13',
    columnId: 'column-6',
    title: 'Repair',
    index: 0,
  },
  {
    id: 'card-14',
    columnId: 'column-7',
    title: 'Porto',
    index: 0,
  },
  {
    id: 'card-15',
    columnId: 'column-7',
    title: 'Iceland',
    index: 1,
  },
  {
    id: 'card-16',
    columnId: 'column-7',
    title: 'Tatra Mountains',
    index: 2,
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
