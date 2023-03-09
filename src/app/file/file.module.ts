import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/material/material.module'
import { FileReaderDirective } from './file-reader.directive'
import { InputFileComponent } from './input-file/input-file.component'
import { AttachFileComponent } from './attach-file/attach-file.component'
import { ImportFileComponent } from './pages/import-file/import-file.component'


@NgModule({
    declarations: [
        FileReaderDirective,
        InputFileComponent,
        AttachFileComponent,
        ImportFileComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    // exports: [
    //     InputFileComponent,
    //     AttachFileComponent
    // ]
})

export class FileModule { }
