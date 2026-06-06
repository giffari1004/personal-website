export interface StackItem {
  category: string;
  iconName: "front-end" | "back-end" | "devops"; // Menentukan tipe icon yang valid
  tags: string[];
  color: string;
}
