import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ServicesService } from './services.service';
import { HelpersService } from './helpers.service';

@NgModule({
    providers: [
        ServicesService,
        HelpersService
    ]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
