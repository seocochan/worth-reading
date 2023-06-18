export type EvaluationResult =
  | {
      success: true;
      score: number;
      description: string;
    }
  | { success: false };
