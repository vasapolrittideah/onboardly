export type InternalErrorResponse = {
  error: string;
  message: string;
};

export type ApiErrorResponse = {
  status: number;
  path: string;
  timestamp: string;
} & InternalErrorResponse;
