// utils/username.ts

export const cleanUsername = (text: string): string => {
  return text.replace(/[^a-zA-Z0-9_-]/g, "");
};

export const isValidUsername = (text: string): boolean => {
  return /^[a-zA-Z0-9_-]{3,20}$/.test(text);
};
