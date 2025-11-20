export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface SocialLink {
  platform: 'Instagram' | 'TikTok';
  username: string;
  url: string;
}
