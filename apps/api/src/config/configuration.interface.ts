export interface Configuration {
  frontendUrl: string;

  security: {
    jwtSecret: string;
    accessTokenExpiresIn: string;
    refreshTokenExpiresIn: string;
  };

  supabase: {
    apiUrl: string;
    anonKey: string;
  };
}
