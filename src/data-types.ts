export interface Ticket {
  _id: string;
  url: string;
  external_id: string;
  created_at: string;
  type: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  submitter_id: number;
  assignee_id: number;
  organization_id: number;
  tags: Array<string>;
  has_incidents: boolean;
  due_at: string;
  via: string;
}

export interface User {
  _id: number;
  url: string;
  external_id: string;
  name: string;
  alias: string;
  created_at: string;
  active: boolean;
  verified: boolean;
  shared: boolean;
  locale: string;
  timezone: string;
  last_login_at: string;
  email: string;
  phone: string;
  signature: string;
  organization_id: number;
  tags: Array<string>;
  suspended: boolean;
  role: string;
}

export interface Organization {
  _id: number;
  url: string;
  external_id: string;
  name: string;
  domain_names: Array<string>;
  created_at: string;
  details: string;
  shared_tickets: boolean;
  tags: Array<string>;
}
