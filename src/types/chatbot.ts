export const chatbotResponseStyles = ['concise', 'detailed'] as const;

export type ChatbotResponseStyle = (typeof chatbotResponseStyles)[number];

export function isChatbotResponseStyle(value: string): value is ChatbotResponseStyle {
  return chatbotResponseStyles.includes(value as ChatbotResponseStyle);
}
