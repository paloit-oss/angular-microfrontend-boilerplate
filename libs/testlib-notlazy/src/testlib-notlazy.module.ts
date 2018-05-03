import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestheaderComponent } from './testheader/testheader.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TestheaderComponent],
    exports: [TestheaderComponent]
})
export class TestlibNotlazyModule {}
