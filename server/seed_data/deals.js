// dummy deals to populate database for testing
module.exports = [
    {
        id: 1,
        day: 'tuesday',
        until: new Date(2022, 0, 6),
        establishment_id: 1,
        details: 'Dinner for 2 for $30, includes 2 mains and a bottle of wine plus dessert',
        likes: 0,
        dislikes: 0
    },
    {
        id: 2,
        day: 'monday/wednesday',
        until: new Date(2021, 11, 25),
        establishment_id: 2,
        details: 'Any burger and any pint for $15',
        likes: 0,
        dislikes: 0
    },
    {
        id: 3,
        day: 'sunday/monday/tuesday/wednesday/thursday',
        until: new Date(2022, 2, 6),
        establishment_id: 3,
        details: '5 courses for $50, wine pairings for an additional $18',
        likes: 0,
        dislikes: 0
    },
    {
        id: 4,
        day: 'thursday',
        until: new Date(2021,11,31),
        establishment_id: 3,
        details: 'All gin and tonics $7 singles $9 doubles and margharita pitchers $20',
        likes: 0,
        dislikes: 0
    }
]