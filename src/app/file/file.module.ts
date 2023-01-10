import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FileReaderDirective } from './file-reader.directive'
import { InputFileComponent } from './input-file/input-file.component'


@NgModule({
    declarations: [
        FileReaderDirective,
        InputFileComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InputFileComponent
    ]
})

export class FileModule { }
