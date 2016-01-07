import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {PhotographyComponent} from './photography/photography.component.ts';
import {HomeComponent} from './home/home.component.ts';
import {AboutMeComponent} from './about-me/about-me.component.ts';
import {ResumeComponent}     from './resume/resume.component.ts';
import {PortfolioComponent}   from './portfolio/portfolio.component.ts';
import {ArtworkComponent}   from './artwork/artwork.component.ts';
import {WritingComponent}   from './writing/writing.component.ts';

@Component({
  selector: 'my-app',
  templateUrl: '/pages/main.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  { // Home child route
    path: '/Home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {path: '/AboutMe',   name: 'AboutMe',     component: AboutMeComponent},
  {path: '/Resume',   name: 'Resume',     component: ResumeComponent},
  {path: '/Portfolio', name: 'Portfolio', component: PortfolioComponent},
  {path: '/Photography', name: 'Photography', component: PhotographyComponent},
  {path: '/Artwork', name: 'Artwork', component: ArtworkComponent},
  {path: '/Writing', name: 'Writing', component: WritingComponent}
])
export class AppComponent { }
