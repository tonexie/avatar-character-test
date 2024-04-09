import { derived, writable } from "svelte/store";

const INITIAL_ANSWERS_STATE = [
  { "Aang": 0, "slug": "aang" },
  { "Katara": 0, "slug": "katara"  },
  { "Sokka": 0, "slug": "sokka"  },
  { "Toph": 0, "slug": "toph"  },
  { "Suki": 0, "slug": "suki"  },
  { "Azula": 0, "slug": "azula"  },
  { "Zuko": 0, "slug": "zuko"  },
  { "Tenzin": 0, "slug": "tenzin"  },
  { "Korra": 0, "slug": "korra"  },
  { "Lin Beifong": 0, "slug": "lin_beifong"  },
  { "Asami": 0, "slug": "asami"  },
]

export const userAnswers = writable(INITIAL_ANSWERS_STATE)

