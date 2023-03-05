import { v4 as uuidv4 } from "uuid";

const taskLimitNumber = 5;

export const columnsRawData = [
  {
    id: 1,
    name: "TODO",
    limit: taskLimitNumber,
    color: "#A162D8 ",
    taskIds: [
      {
        id: uuidv4(),
        text: "Nap",
        idColumn: 1,
        user: "CSC428 A1",
      },
      {
        id: uuidv4(),
        text: "More nap",
        idColumn: 1,
        user: "CSC428 A1",
      },
    ],
    first:
      "What's the situation? Feel free to explain it in as much detail as you'd like.",
    second: "What part of the situation is most troubling?",
    third:
      "Why did you decide to take this action (there're countless ways to reduce stress, why this specific one in this specific case)?",
  },
  {
    id: 2,
    name: "In progress",
    limit: taskLimitNumber,
    color: "#5A9DF9",
    taskIds: [
      { id: uuidv4(), text: "Gaming", idColumn: 2, user: "CSC369 A1" },
    ],
    first:
      "How are you feeling at this very moment, right before starting this activity? What's on your mind?",
    second:
      "What kind of state of mind are you hoping to land on after this activity?",
    third: "Why did you decide to start this activity at this moment?",
  },
  {
    id: 3,
    name: "Done",
    limit: taskLimitNumber,
    color: "#1387BE",
    taskIds: [
      { id: uuidv4(), text: "Jogging", idColumn: 3, user: "CSC108 A1" },
    ],
    first:
      "Re-type the summary of the situation in the following format: Trigger: Thought: Feeling: Behaviour",
    second: "How did your plan/expectations go? What worked and what didn't?",
    third:
      "If you were to explore an alternative activity, how would you do it? Why?",
  },
];
