import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LessonChoiceComponent } from './components/lesson-choice/lesson-choice.component';
import { ButtonBuraxilishComponent } from './components/button-buraxilish/button-buraxilish.component';
import { FirstGroupComponent } from './components/first-group/first-group.component';
import { SecondGroupComponent } from './components/second-group/second-group.component';
import { ThirdGroupComponent } from './components/third-group/third-group.component';
import { FourthGroupComponent } from './components/fourth-group/fourth-group.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { Why701Component } from './components/why701/why701.component';
import { PricesComponent } from './components/prices/prices.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LessonChoiceComponent,
    ButtonBuraxilishComponent,
    FirstGroupComponent,
    SecondGroupComponent,
    ThirdGroupComponent,
    FourthGroupComponent,
    ButtonsComponent,
    Why701Component,
    PricesComponent,
    QrcodeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
