declare module '@iamsabbir/nanotoast' {
  interface ToastOptions {
    duration?: number;
    position?: "top-right"|"top-left"|"bottom-right"|"bottom-left"|"top-center"|"bottom-center",
    closeable?: boolean,
  }

  interface ToastPromiseOptions<T> extends ToastOptions {
    loading?: string;
    success?: string | ((data: T) => string);
    error?: string | ((error: Error) => string);
  }

  /**
   * Displays a default toast notification.
   */
  function toast(message: string, options?: ToastOptions): void;
  
  namespace toast {
    function success(message: string, options?: ToastOptions): void;
    function error(message: string, options?: ToastOptions): void;
    function warning(message: string, options?: ToastOptions): void;
    function info(message: string, options?: ToastOptions): void;
    function message(message: string, options?: ToastOptions): void;
    function promise<T>(promise: Promise<T>, options: ToastPromiseOptions<T>): Promise<T>;
  }

  export default toast;
} 