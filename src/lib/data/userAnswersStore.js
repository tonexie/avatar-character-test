import { derived, writable } from "svelte/store";

const INITIAL_ANSWERS_STATE = [
  { "Aang": 0 },
  { "Katara": 0 },
  { "Sokka": 0 },
  { "Toph": 0 },
  { "Suki": 0 },
  { "Azula": 0 },
  { "Zuko": 0 },
  { "Tenzin": 0 },
  { "Korra": 0 },
  { "Lin Beifong": 0 },
  { "Asami": 0 },
]

export const userAnswers = writable(INITIAL_ANSWERS_STATE)

