// tests/setup.js
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/vitest'; // Note the /vitest suffix

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Run cleanup after each test
afterEach(() => {
  cleanup();
});

// Add userEvent to global context if needed
import userEvent from '@testing-library/user-event';
globalThis.userEvent = userEvent;