export interface HomeAction {
  label: string;
  route: string;
}

export interface ResumeExperienceItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  details: string[];
}

export interface ResumeEducationItem {
  period: string;
  institution: string;
  location: string;
  degree: string;
  level: string;
  description: string;
}

export interface ResumeContent {
  title: string;
  breadcrumb: string;
  aboutTitle: string;
  aboutEyebrow: string;
  paragraphs: string[];
  closingNote: string;
  cvButtonLabel: string;
  cvUrl: string;
  experienceTitle: string;
  experienceItems: ResumeExperienceItem[];
  educationTitle: string;
  educationItems: ResumeEducationItem[];
  certificationTitle: string;
  certificationIframeUrl: string;
}

export interface ContactContent {
  title: string;
  breadcrumb: string;
  cardTitle: string;
  lead: string;
  form: {
    firstnameLabel: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    subjectLabel: string;
    messageLabel: string;
    termsLabel: string;
    acceptButtonLabel: string;
    submitButtonLabel: string;
    privacyNote: string;
    nextUrl: string;
  };
  terms: {
    title: string;
    paragraphs: string[];
    closeLabel: string;
  };
  map: {
    title: string;
    src: string;
  };
}

export interface HomeContent {
  badge: string;
  eyebrow: string;
  headline: string;
  primaryAction: HomeAction;
  secondaryAction: HomeAction;
  profileImage: string;
  aboutTitle: string;
  aboutEyebrow: string;
  paragraphs: string[];
  closingNote: string;
  featuredTitle: string;
  featuredEyebrow: string;
}

export interface SiteContentBundle {
  home: HomeContent;
  resume: ResumeContent;
  contact: ContactContent;
}