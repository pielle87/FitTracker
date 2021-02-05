import { Url } from "url";

export interface Activity {
  id?: number // TODO: remove the optional. I may need to call it with activity: Omit<Activity, 'id'> or a Partial<>
  date: Date;
  type: string;
  duration: number;
  notes?: string; // TODO: remove the optional
  feelingColor?: EnumColor; // TODO: remove the optional
  feeling?: string; // TODO: remove the optional
  link?: Url; // TODO: remove the optional
}

interface EnumColor {
  // TODO: fill in the colors I need
}