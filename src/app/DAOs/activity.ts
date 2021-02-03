import { Url } from "url";

export interface Activity {
  date: Date;
  type: string;
  duration: number;
  notes?: string; // TODO: remove the optional
  feeling?: string; // TODO: remove the optional
  link?: Url; // TODO: remove the optional
}