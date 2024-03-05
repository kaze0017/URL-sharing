// get owner
import { people } from "../lib/placeholder-data";
export function getOwner() {
  return people[0];
}

// get three top people
export function getTopPeople() {
  return people.slice(1, 4);
}