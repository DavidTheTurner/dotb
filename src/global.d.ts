declare global {
  interface Window {
    AppControls: {
      close: () => void;
      maximize: () => void;
      minimize: () => void;
    };
  }
}

export {};
