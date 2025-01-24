export interface Configuration {
  frontendUrl: string;

  security: {
    jwtSecret: string;
    accessTokenExpiresIn: string;
    refreshTokenExpiresIn: string;
    validationCodeExpiresIn: Date;
  };

  email: {
    name: string;
    from: string;
    transport?: {
      host: string;
      port: number;
      secure: boolean;
      auth: {
        user: string;
        pass: string;
      };
    };
  };

  supabase: {
    apiUrl: string;
    anonKey: string;
  };
}
