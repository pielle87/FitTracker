export interface Activity {
  id: number
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
