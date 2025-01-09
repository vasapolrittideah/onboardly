export interface Configuration {
  frontendUrl: string;

  supabase: {
    apiUrl: string;
    anonKey: string;
  };
}
