import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestButtonComponent } from './test-button/test-button.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: TestButtonComponent }
        ])
    ],
    declarations: [TestButtonComponent],
    exports: [TestButtonComponent]
})
export class TestlibModule {}
