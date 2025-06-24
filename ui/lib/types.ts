// Simple types for our basic chatbot
export interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}
