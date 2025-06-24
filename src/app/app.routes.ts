import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { LogIn } from './components/log-in/log-in';
import { SignUp } from './components/sign-up/sign-up';

export const routes: Routes = [
     { path: '', component: Main },
     { path: 'login', component: LogIn },
     { path: 'signup', component: SignUp },
];
