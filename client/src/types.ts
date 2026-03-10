export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ProcessEnv {
  NODE_ENV: "development" | "production" | "test";
  PORT: string;
  API_KEY: string;
  API_BASE: string;
}
