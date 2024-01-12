/// <reference types="react-scripts" />

declare module 'react-dom' {
    interface ReactDOM {
      createRoot(container: Element | DocumentFragment | null, options?: {
        hydrate?: boolean;
      }): ReactDOMRoot;
    }
  
    interface ReactDOMRoot {
      render(children: React.ReactNode): void;
    }
  
    const createRoot: ReactDOM['createRoot'];
  }
  