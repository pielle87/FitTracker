import { Activity, FeelingColors } from '../app/_models/activity.type';

// TODO: delete this once the Db is implemented
export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    date: new Date(2021, 2, 1),
    type: 'stretching',
    duration: 90,
    notes: 'HyPro',
    feelingColor: FeelingColors.green,
    feeling: 'good',
    link: new URL('https://google.com')
  },
  {
    id: 2,
    date: new Date(2021, 2, 2),
    type: 'running',
    duration: 45,
    notes: '8km',
    feelingColor: FeelingColors.yellow,
    feeling: 'tired',
    link: new URL('https://youtube.com')
  },
  {
    id: 3,
    date: new Date(2021, 2, 3),
    type: 'abs',
    duration: 30,
    notes: '8km',
    feelingColor: FeelingColors.orange,
    feeling: 'tired',
    link: new URL('https://youtube.com')
  },
  {
    id: 4,
    date: new Date(2021, 2, 4),
    type: 'arms',
    duration: 20,
    notes: '2*10kg',
    feelingColor: FeelingColors.red,
    feeling: 'tired',
    link: new URL('https://youtube.com')
  },
]
