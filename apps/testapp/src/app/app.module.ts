import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { TestlibNotlazyModule } from '@angular-microfrontend-boilerplate/testlib-notlazy';

@NgModule({
    imports: [
        BrowserModule,
        NxModule.forRoot(),
        TestlibNotlazyModule,
        RouterModule.forRoot(
            [
                {
                    path: 'testlib',
                    loadChildren:
                        '@angular-microfrontend-boilerplate/testlib#TestlibModule'
                }
            ],
            { initialNavigation: 'enabled' }
        )
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
