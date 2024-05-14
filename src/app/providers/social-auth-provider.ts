import {GoogleLoginProvider} from "@abacritt/angularx-social-login";
import {Provider} from "@angular/core";
import {environment} from "../../environments/environment";

export const socialAuth: Provider = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          environment.googleId,
          {oneTapEnabled: false, prompt: 'consent'}
        )
      }
    ]
  },
}
