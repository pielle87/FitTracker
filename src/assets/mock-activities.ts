import { Activity } from '../app/_models/activity';

// TODO: delete this once the Db is implemented
export const ACTIVITIES: Activity[] = [
  {
    date: new Date(2021, 2, 1),
    type: 'stretching',
    duration: 90
  },
  {
    date: new Date(2021, 2, 2),
    type: 'running',
    duration: 45
  },
]