export interface RequestCustom extends Request {
    isAuthenticated(): boolean;
    user?: any;
    logout(): void;
  }