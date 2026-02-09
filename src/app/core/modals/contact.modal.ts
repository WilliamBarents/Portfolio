export interface ContactItem {
  type: 'Email' | 'LinkedIn' | 'GitHub' | string;
  label: string; // Text shown to the user
  value: string; // href (mailto:, https://, etc.)
  icon: string; // icon key or filename
}

export interface ContactData {
  contacts: ContactItem[];
}
