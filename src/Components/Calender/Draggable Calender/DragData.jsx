export const initialstate = {
    calendarEvents: [
        {
            title: 'Atlanta Monster',
            start: new Date('2023-02-24 00:00'),
            id: '1001'
        },
        {
            title: 'My Favorite Murder',
            start: new Date('2023-03-05 00:00'),
            id: '1002'
        }
    ],
    events: [
        { title: 'Birthday Party', id: '1', bgClass: 'btn-primary', iconClass: 'fa-birthday-cake' },
        { title: 'Meeting With Team', id: '2' , bgClass: 'btn-info', iconClass: 'fa-user'},
        { title: 'Tour & Picnic', id: '3' , bgClass: 'btn-success', iconClass: 'fa-plane'},
        { title: 'Reporting Schedule', id: '4', bgClass: 'btn-danger' , iconClass: 'fa-file-text'},
        { title: 'Lunch & Break', id: '5' , bgClass: 'btn-warning', iconClass: 'fa-briefcase'}
    ]

};