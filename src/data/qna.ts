export interface Qna {
  question: string;
  /** Leave empty while unanswered. */
  answer?: string;
}

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const QNA: Qna[] = [
  { question: LOREM },
  { question: LOREM },
  { question: LOREM, answer: LOREM },
];
