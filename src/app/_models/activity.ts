export interface Activity {
  id: number // TODO: remove the optional. I may need to call it with activity: Omit<Activity, 'id'> or a Partial<>
  date?: Date; // TODO: remove the optional
  type: string;
  duration: number;
  notes?: string; // TODO: remove the optional
  feelingColor?: FeelingColors; // TODO: remove the optional
  feeling?: string; // TODO: remove the optional
  link?: URL; // TODO: remove the optional
}

export enum FeelingColors {
  green = 'green',
  yellow = 'yellow',
  orange = 'orange',
  red = 'red',
}
