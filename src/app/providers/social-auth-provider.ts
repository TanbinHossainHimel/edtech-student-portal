import {GoogleLoginProvider} from "@abacritt/angularx-social-login";
import {Provider} from "@angular/core";

export const socialAuth:Provider = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          'clientId'
        )
      }
    ]
  },
}
