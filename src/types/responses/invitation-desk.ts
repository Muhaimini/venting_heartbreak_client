export interface InvitationDesk {
  id: string;
  status: string;
  invitation_layout_id: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  creator: Creator;
}

export interface Creator {
  id: string;
  username: string;
  avatar: null;
  initial_name: string;
  label_color: string;
}
