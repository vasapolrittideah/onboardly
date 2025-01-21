export interface Configuration {
  frontendUrl: string;

  security: {
    jwtSecret: string;
  };

  supabase: {
    apiUrl: string;
    anonKey: string;
  };
}
