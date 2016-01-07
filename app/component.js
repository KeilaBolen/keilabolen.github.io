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
var about_me_component_1 = require('./about-me/about-me.component');
var Resume_component_1 = require('./Resume/Resume.component');
var Portfolio_component_1 = require('./Portfolio/Portfolio.component');
var dialog_service_1 = require('./dialog.service');
var Resume_service_1 = require('./Resume/Resume.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '/pages/home.html',
            providers: [dialog_service_1.DialogService, Resume_service_1.ResumeService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            {
                path: '/about-me/...',
                name: 'AboutMe',
                component: about_me_component_1.AboutMeComponent,
                useAsDefault: true
            },
            { path: '/Resume', name: 'Resume', component: Resume_component_1.ResumeComponent },
            { path: '/Portfolio', name: 'Portfolio', component: Portfolio_component_1.PortfolioComponent },
            { path: '/Photography', name: 'Photography', component: PhotographyComponent },
            { path: '/Artwork', name: 'Artwork', component: ArtworkComponent },
            { path: '/Writing', name: 'Writing', component: WritingComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
