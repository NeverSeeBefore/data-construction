function d1020(W, N, wt, val) {
  var dp = [];
  for (var i = 0; i <= N; i++) {
    dp[i] = [];
    for (var j = 0; j <= N; j++) {
      dp[i][j] = 0;
    }
  }
  for (var i = 1; i <= N; i++) {
    for (var j = 1; j <= W; j++) {
      if (j - wt[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - wt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  console.log(dp);
  return dp[N][W];
}

console.log(d1020(5, 5, [2, 3, 3, 1, 2], [1, 2, 4, 2, 3]));
// console.log(d1020(4, 4, [4, 3, 1, 1], [3000, 2000, 1500, 2000]));
