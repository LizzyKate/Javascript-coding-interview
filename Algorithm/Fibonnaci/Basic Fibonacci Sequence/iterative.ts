function fibIterative(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// Time Complexity: O(n)
// Space Complexity: O(n)
export function fibonacciIterative(n: number): number {
  return fibIterative(n);
}
