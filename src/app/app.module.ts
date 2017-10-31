import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { DragComponentComponent } from './main-component/drag-component/drag-component.component';
import { SampleSiteComponent1Component } from './main-component/sample-site-component1/sample-site-component1.component';
import { BlogComponentComponent } from './heading/blog-component/blog-component.component';
import { DocumentationComponentComponent } from './heading/documentation-component/documentation-component.component';
import { AccountComponentComponent } from './heading/account-component/account-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    MainComponentComponent,
    DragComponentComponent,
    SampleSiteComponent1Component,
    BlogComponentComponent,
    DocumentationComponentComponent,
    AccountComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
