export interface InvitationTheme {
  id: string;
  label: string;
  description: string;
  img_cover: string;
  song_src: string;
  started_at: Date;
  ended_at: Date;
  created_at: Date;
  updated_at: Date;
  theme_type: ThemeType;
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
}
