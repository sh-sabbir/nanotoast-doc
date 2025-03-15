# NanoToast

A lightweight, beautiful toast notification library for React, built with Next.js, TypeScript, and Framer Motion.

## Features

- 🚀 Lightweight and performant
- 🎨 Beautiful animations with Framer Motion
- 🌈 Multiple toast types (success, error, warning, info)
- ⚡ Easy to use with React hooks
- 🎯 TypeScript support
- 🎨 Customizable duration and styling

## Installation

```bash
npm install nanotoast
```

## Usage

1. Wrap your app with the ToastProvider:

```tsx
import { ToastProvider } from 'nanotoast';

function App() {
  return (
    <ToastProvider>
      {/* Your app content */}
    </ToastProvider>
  );
}
```

2. Use the useToast hook in your components:

```tsx
import { useToast } from 'nanotoast';

function MyComponent() {
  const { showToast } = useToast();

  return (
    <button
      onClick={() => showToast({
        message: 'Hello World!',
        type: 'success',
        duration: 4000
      })}
    >
      Show Toast
    </button>
  );
}
```

## API Reference

### Toast Options

| Property  | Type                                      | Default  | Description                        |
|-----------|-------------------------------------------|---------|------------------------------------|
| message   | string                                    | -       | The message to display (required)  |
| type      | 'success' \| 'error' \| 'warning' \| 'info' | 'info'  | The type of toast                  |
| duration  | number                                    | 4000    | Duration in milliseconds           |

## Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## License

MIT
