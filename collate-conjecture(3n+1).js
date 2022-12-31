const hotpo = (n) => n == 1 ? 0 : 1 + hotpo(n % 2 ? 3 * n + 1: n / 2)
