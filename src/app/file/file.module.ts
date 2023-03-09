import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FileReaderDirective } from './file-reader.directive'
import { InputFileComponent } from './input-file/input-file.component';
import { AttachFileComponent } from './attach-file/attach-file.component';
import { ImportFileComponent } from './pages/import-file/import-file.component'


@NgModule({
    declarations: [
        FileReaderDirective,
        InputFileComponent,
        AttachFileComponent,
        ImportFileComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InputFileComponent,
        AttachFileComponent
    ]
})

export class FileModule { }
