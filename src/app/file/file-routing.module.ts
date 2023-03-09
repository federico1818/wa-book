import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ImportFileComponent } from 'src/app/file/pages/import-file/import-file.component'

const routes: Routes = [
    {
        path: '',
        component: ImportFileComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class FileRoutingModule { }
