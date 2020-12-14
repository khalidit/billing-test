export interface UserInfo {
  sub: string;
  zoneinfo: string;
  postal_country: string;
  mail: string;
  igg: string;
  last_name: string;
  login_ad: string;
  company_bdr_name: string;
  given_name: string;
  locale: string;
  contact_id: string;
  sgconnect_id: string;
  user_authorization: any[];
  rc_local_sigle: string;
  sesame_id: string;
  user_bdr_id: string;
  company_bdr_level: string;
  name: string;
  is_sg_group_user: string;
  family_name: string;
  first_name: string;
  company_bdr_id: string;
  preferred_language: string;
  origin_network: string;
  auth_level: string;
}
export type Status =
  | 'NOT_AUTHENTICATED'
  | 'PENDING_AUTHENTICATION'
  | 'AUTHENTICATION_FORBIDDEN'
  | 'AUTHENTICATION_SUCCESSFUL';
