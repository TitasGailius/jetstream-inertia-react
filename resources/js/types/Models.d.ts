export interface User {
  id: number
  name: string
  email: string
  email_verified_at?: string
  profile_photo_url?: string
  profile_photo_path?: string
  current_team_id: number
  current_team: Team
  all_teams: Team[]
  two_factor_enabled: boolean
  created_at: string
  updated_at: string
}

export interface Team {
  id: number
  user_id: number
  name: string
  personal_team: boolean
  created_at: string
  updated_at: string
}
