const privateWorkouts = [
    {
        id: 1,
        name: 'private workout1',
        public: false,
        sets: 1,
        tags: [],
        workout: [
            ['prepare', 10],
            ['work', 15],
            ['rest', 5],
            ['work', 15],
            ['cool down', 15]
        ]
    }, {
        id: 2,
        name: 'private workout2',
        public: true,
        sets: 1,
        tags: [],
        workout: [
            ['prepare', 10],
            ['work', 15],
            ['rest', 5],
            ['work', 15],
            ['cool down', 15]
        ]
    }, {
        id: 3,
        name: 'private workout3',
        public: false,
        sets: 1,
        tags: [],
        workout: [
            ['prepare', 10],
            ['work', 15],
            ['rest', 5],
            ['work', 15],
            ['cool down', 15]
        ]
    }
];

const publicWorkouts = [
    {
        id: 4,
        name: 'public workout1',
        public: true,
        sets: 1,
        tags: [],
        workout: [
            ['prepare', 10],
            ['work', 15],
            ['rest', 5],
            ['work', 15],
            ['cool down', 15]
        ]
    }, {
        id: 5,
        name: 'public workout2',
        public: true,
        sets: 1,
        tags: [],
        workout: [
            ['prepare', 10],
            ['work', 15],
            ['rest', 5],
            ['work', 15],
            ['cool down', 15]
        ]
    }, {
        id: 6,
        name: 'public workout3',
        public: true,
        sets: 1,
        tags: [],
        workout: [
            ['prepare', 10],
            ['work', 15],
            ['rest', 5],
            ['work', 15],
            ['cool down', 15]
        ]
    }
];

export { privateWorkouts, publicWorkouts}