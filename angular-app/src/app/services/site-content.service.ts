import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ContactContent, HomeContent, ResumeContent, SiteContentBundle } from '../types/site-content';

const DEFAULT_HOME_CONTENT: HomeContent = {
  badge: 'Développement Web · Bases de données · Sécurité informatique',
  eyebrow: 'Bienvenue dans mon portfolio',
  headline: 'Découvrez mon parcours et mes compétences',
  primaryAction: {
    label: 'Curriculum vitæ',
    route: '/resume'
  },
  secondaryAction: {
    label: 'Projets',
    route: '/projects'
  },
  profileImage: 'assets/profile1.1.png',
  aboutTitle: 'À propos de moi',
  aboutEyebrow: 'Qui suis-je ?',
  paragraphs: [],
  closingNote: 'Merci de votre visite !',
  featuredTitle: 'Projets mis en avant',
  featuredEyebrow: 'Quelques réalisations récentes'
};

const DEFAULT_RESUME_CONTENT: ResumeContent = {
  title: 'Curriculum vitæ',
  breadcrumb: 'Curriculum vitæ',
  aboutTitle: 'À propos de moi',
  aboutEyebrow: 'Qui suis-je ?',
  paragraphs: [],
  closingNote: 'Merci de votre visite !',
  cvButtonLabel: 'Télécharger mon CV',
  cvUrl: 'assets/CV_Eliyahu_ROISMAN.pdf',
  experienceTitle: 'Expérience',
  experienceItems: [],
  educationTitle: 'Éducation',
  educationItems: [],
  certificationTitle: 'Parcours de certification complémentaires',
  certificationIframeUrl: ''
};

const DEFAULT_CONTACT_CONTENT: ContactContent = {
  title: 'Contact',
  breadcrumb: 'Contact',
  cardTitle: 'Me contacter',
  lead: 'N\'hésitez pas à prendre contact avec moi. Vos avis, questions et commentaires sont toujours les bienvenus. Restons en contact !',
  form: {
    firstnameLabel: 'Prénom',
    nameLabel: 'Nom',
    emailLabel: 'Adresse e-mail',
    phoneLabel: 'Numéro de téléphone',
    subjectLabel: 'Sujet',
    messageLabel: 'Message',
    termsLabel: 'Accepter les conditions d\'utilisation',
    acceptButtonLabel: 'Accepter',
    submitButtonLabel: 'Envoyer',
    privacyNote: 'En utilisant ce formulaire, vous acceptez les conditions d\'utilisation.',
    nextUrl: 'https://eroisman.github.io/eliroisman-portfolio/#/contact'
  },
  terms: {
    title: 'Conditions d\'utilisation',
    paragraphs: [],
    closeLabel: 'Fermer'
  },
  map: {
    title: 'Carte de localisation',
    src: ''
  }
};

@Injectable({
  providedIn: 'root'
})
export class SiteContentService {
  constructor(private readonly http: HttpClient) {}

  getHomeContent(): Observable<HomeContent> {
    return this.http.get<SiteContentBundle>('data/site-content.json').pipe(
      catchError(() => this.http.get<SiteContentBundle>('assets/data/site-content.json')),
      map((bundle: SiteContentBundle) => bundle.home ?? DEFAULT_HOME_CONTENT),
      catchError((error: unknown) => {
        console.error('Error loading home content:', error);
        return of(DEFAULT_HOME_CONTENT);
      })
    );
  }

  getResumeContent(): Observable<ResumeContent> {
    return this.http.get<SiteContentBundle>('data/site-content.json').pipe(
      catchError(() => this.http.get<SiteContentBundle>('assets/data/site-content.json')),
      map((bundle: SiteContentBundle) => bundle.resume ?? DEFAULT_RESUME_CONTENT),
      catchError((error: unknown) => {
        console.error('Error loading resume content:', error);
        return of(DEFAULT_RESUME_CONTENT);
      })
    );
  }

  getContactContent(): Observable<ContactContent> {
    return this.http.get<SiteContentBundle>('data/site-content.json').pipe(
      catchError(() => this.http.get<SiteContentBundle>('assets/data/site-content.json')),
      map((bundle: SiteContentBundle) => bundle.contact ?? DEFAULT_CONTACT_CONTENT),
      catchError((error: unknown) => {
        console.error('Error loading contact content:', error);
        return of(DEFAULT_CONTACT_CONTENT);
      })
    );
  }
}