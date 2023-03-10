import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FileModule } from './file/file.module'
import { ChatModule } from './chat/chat.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FileRoutingModule } from 'src/app/file/file-routing.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FileModule,
        ChatModule,
        AppRoutingModule,
        FileRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
