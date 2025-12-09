// Best solution: Space-optimized iterative implementation of Fibonacci sequence
export function fibonacciSpaceOptimized(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}
// Time Complexity: O(n)
// Space Complexity: O(1)
