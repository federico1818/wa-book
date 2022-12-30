import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core'

@Directive({
    selector: '[appFileReader]'
})

export class FileReaderDirective {

    @Output() public read: EventEmitter<string> = new EventEmitter<string>

    @HostListener('change', ['$event.target'])
    public onClick(element: HTMLInputElement) {
        const file: File = element.files?.item(0) as File
        if(!file) return
        this.readFile(file)
    }

    private readFile(file: File): void {
        const reader = new FileReader()
        reader.addEventListener('load', (event) => {
            const target = event.target
            if(!target) return
            this.processFile(target.result as string)
        })
        reader.readAsText(file);
    }

    private processFile(content: string): void {
        this.read.emit(content)
    }

}
