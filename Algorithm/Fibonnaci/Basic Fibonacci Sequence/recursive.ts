// Simplest but inefficient recursive implementation of Fibonacci sequence
export function fibonacciRecursive(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// Time Complexity: O(2^n)
// Space Complexity: O(n) due to call stack
