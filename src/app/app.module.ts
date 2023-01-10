import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FileModule } from './file/file.module'
import { ParserModule } from './parser/parser.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FileModule,
        ParserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
