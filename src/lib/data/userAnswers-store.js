import { derived, writable } from "svelte/store";

const USER_ANSWERS = []

export const userAnswers = writable(USER_ANSWERS)

