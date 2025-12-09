function fibMemoized(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n <= 0) return 0;
  if (n === 1) return 1;
  memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  return memo[n];
}

export function fibonacciMemoized(n: number): number {
  return fibMemoized(n);
}
// Time Complexity: O(n)
// Space Complexity: O(n) due to memoization storage
