export type SelectedInvitations = Array<SelectedInvitation>;

export interface SelectedInvitation {
  id: string;
  closed_at: null;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  selected_by: string;
  invitation_theme: InvitationTheme;
  story_timelines: any[];
  invitation_special_guests: any[];
}

export interface InvitationTheme {
  id: string;
  theme_layout_id: string;
  label: string;
  description: string;
  img_cover: string;
  song_src: string;
  started_at: Date;
  ended_at: Date;
  created_at: Date;
  updated_at: Date;
  theme_type: ThemeType;
}

export interface ThemeType {
  id: string;
}
