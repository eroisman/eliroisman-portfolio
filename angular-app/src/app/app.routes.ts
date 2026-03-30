import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
	{ path: '', component: Home, title: 'Eli ROISMAN - Accueil' },
	{ path: 'projects', component: Projects, title: 'Eli ROISMAN - Projets' },
	{ path: 'projects/:slug', component: ProjectDetail, title: 'Eli ROISMAN - Projet' },
	{ path: 'resume', component: Resume, title: 'Eli ROISMAN - Curriculum vitæ' },
	{ path: 'contact', component: Contact, title: 'Eli ROISMAN - Contact' },
	{ path: '**', redirectTo: '' }
];
