import { writable } from "svelte/store";

const initialAnswers = [
  { "Aang": 0, "slug": "aang" },
  { "Katara": 0, "slug": "katara" },
  { "Sokka": 0, "slug": "sokka" },
  { "Toph": 0, "slug": "toph" },
  { "Suki": 0, "slug": "suki" },
  { "Azula": 0, "slug": "azula" },
  { "Zuko": 0, "slug": "zuko" },
  { "Tenzin": 0, "slug": "tenzin" },
  { "Korra": 0, "slug": "korra" },
  { "Lin Beifong": 0, "slug": "lin_beifong" },
  { "Asami": 0, "slug": "asami" },
]

// create a deep copy for writable, ensure different instances
export const getInitialState = () => JSON.parse(JSON.stringify(initialAnswers));

export function resetAnswers() {
  userAnswers.set(getInitialState())
}

export const userAnswers = writable(getInitialState())

