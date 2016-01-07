"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var photography_component_ts_1 = require('./photography/photography.component.ts');
var home_component_ts_1 = require('./home/home.component.ts');
var about_me_component_ts_1 = require('./about-me/about-me.component.ts');
var resume_component_ts_1 = require('./resume/resume.component.ts');
var portfolio_component_ts_1 = require('./portfolio/portfolio.component.ts');
var artwork_component_ts_1 = require('./artwork/artwork.component.ts');
var writing_component_ts_1 = require('./writing/writing.component.ts');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/pages/main.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            {
                path: '/Home',
                name: 'Home',
                component: home_component_ts_1.HomeComponent,
                useAsDefault: true
            },
            { path: '/AboutMe', name: 'AboutMe', component: about_me_component_ts_1.AboutMeComponent },
            { path: '/Resume', name: 'Resume', component: resume_component_ts_1.ResumeComponent },
            { path: '/Portfolio', name: 'Portfolio', component: portfolio_component_ts_1.PortfolioComponent },
            { path: '/Photography', name: 'Photography', component: photography_component_ts_1.PhotographyComponent },
            { path: '/Artwork', name: 'Artwork', component: artwork_component_ts_1.ArtworkComponent },
            { path: '/Writing', name: 'Writing', component: writing_component_ts_1.WritingComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
