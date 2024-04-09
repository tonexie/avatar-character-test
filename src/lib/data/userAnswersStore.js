import { derived, writable } from "svelte/store";

const INITIAL_ANSWERS_STATE = [
  { "aang": 0 },
  { "katara": 0 },
  { "sokka": 0 },
  { "toph": 0 },
  { "suki": 0 },
  { "azula": 0 },
  { "zuko": 0 },
  { "tenzin": 0 },
  { "korra": 0 },
  { "lin_beifong": 0 },
  { "asami": 0 },
]

export const userAnswers = writable(INITIAL_ANSWERS_STATE)

