import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'angular2-carousel';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './secondary/nav/nav.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionWorksComponent } from './section-works/section-works.component';
import { SectionFactsComponent } from './section-facts/section-facts.component';
import { SectionMembersComponent } from './section-members/section-members.component';
import { SectionQuoteComponent } from './section-quote/section-quote.component';
import { SectionSponsorsComponent } from './section-sponsors/section-sponsors.component';
import { SectionPricesComponent } from './section-prices/section-prices.component';
import { SectionCommunityComponent } from './section-community/section-community.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './secondary/list/list.component';
import { ListItemComponent } from './secondary/list/list-item/list-item.component';
import { ListService } from "./list/list.service";
import { HoveredDirective } from './directives/hovered.directive';
import { SectionMarkersComponent } from './section-markers/section-markers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SectionMainComponent,
    SectionFeaturesComponent,
    SectionSkillsComponent,
    SectionWorksComponent,
    SectionFactsComponent,
    SectionMembersComponent,
    SectionQuoteComponent,
    SectionSponsorsComponent,
    SectionPricesComponent,
    SectionCommunityComponent,
    FooterComponent,
    ListComponent,
    ListItemComponent,
    HoveredDirective,
    SectionMarkersComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
