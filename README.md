# Unhandled 'error' event in Node.js HTTP server

This repository demonstrates a common error in Node.js where an HTTP server crashes silently if an error occurs without explicit error handling.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The original code lacks an explicit error handler for the server's `'error'` event. This omission can lead to unexpected crashes if, for instance, the port is already in use, or other server-side issues occur.

## Solution

The solution involves adding an event listener for the `'error'` event. This allows the server to gracefully handle errors and prevent crashes, providing more robust error handling.