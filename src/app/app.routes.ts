import { Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
    { path: "", loadComponent: () => import("./component/live-score/live-score.component").then((m) => m.LiveScoreComponent) },
    { path: "matches", loadComponent: () => import("./component/matches/matches.component").then((m) => m.MatchesComponent) },
    { path: "points-table", loadComponent: () => import("./component/points-table/points-table.component").then((m) => m.PointsTableComponent) },
    { path: "ranking", loadComponent: () => import("./component/ranking/ranking.component").then((m) => m.RankingComponent) },
    { path: "players", loadComponent: () => import("./component/players/players.component").then((m) => m.PlayersComponent) },
    { path: "login", loadComponent: () => import("./component/login/login.component").then((m) => m.LoginComponent) },
    { path: "signup", loadComponent: () => import("./component/signup/signup.component").then((m) => m.SignupComponent) },
    { path: "**", component: NotFoundComponent},
    // { path: "", component: LiveScoreComponent },
];
