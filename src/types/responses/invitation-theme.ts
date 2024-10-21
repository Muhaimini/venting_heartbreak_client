export interface InvitationTheme {
  id: string;
  label: string;
  description: string;
  img_cover: string;
  song_src: string;
  started_at: string;
  ended_at: string;
  created_at: string;
  updated_at: string;
  theme_type: ThemeType;
  theme_layout: ThemeLayout;
  creator: Creator;
}

export interface Creator {
  id: string;
  username: string;
  avatar: null;
  initial_name: string;
  label_color: string;
}

export interface ThemeType {
  id: string;
  title: string;
}

export interface ThemeLayout {
  id: string;
  name: string;
}
