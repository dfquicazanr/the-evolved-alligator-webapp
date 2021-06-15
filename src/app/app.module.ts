import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '~environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {metaReducers, reducers} from '~store/reducers';
import {AppEffects} from '~store/app.effects';
import {AuthEffects} from '~store/effects/auth/auth.effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHeadersInterceptor} from '~interceptors/auth-headers/auth-headers.service';
import {PostEffects} from '~store/effects/post/post.effects';
import {FileEffects} from '~store/effects/file/file.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, AuthEffects, PostEffects, FileEffects]),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
