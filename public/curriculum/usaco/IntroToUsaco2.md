## Solving Adhoc problems

Until now, we’ve avoided talking about actually solving problems. There are a wide variety of algorithms and data structures that a USACO problem could possibly require, and going through all of them would take hundreds of hours. However, one simple problem strategy proves surprisingly effective: simulate exactly what the problem is asking for.

If the problem asks you to, as an example, figure out the final state of an arrangement of cows given the sequence of their moves, it is quite reasonable to write a program to move the cows and output the final result. However, sometimes complete brute force isn’t always viable, and a smart observation might be necessary to obtain full credit.

As an example, let’s take a look at USACO 2018 December Bronze #2, The Bucket List. We invite you to read the problem statement before continuing.
Now, it seems like we can easily run through every single time point and see how many buckets are in use, but the problem is what to do about the ids of the bucket. The problem doesn't specify how large these can go, too! As you might have already realized, however, we really don’t care about their ids, as we just take the smallest buckets available. Using this, we can write a simple brute force algorithm that goes through every second from t=1 to t=1000 and simulates milking each cow. We invite the reader to try writing this as an exercise, and the solution is below.

```c++
#include <algorithm>
#include <fstream>
#include <iostream>

using namespace std;

int N;
int S[101], T[101], B[101];


int main()
{
	cin >> N;
	for (int i=1; i<=N; i++)
		cin >> S[i] >> T[i] >> B[i];
	
	int max_buckets = 0;
	for (int time=1; time<=1000; time++)
	{
		int buckets_at_this_time = 0;
		for (int i=1; i<=N; i++)
			if (S[i] <= time && time <= T[i])
				buckets_at_this_time += B[i];
		max_buckets = max(max_buckets, buckets_at_this_time);
	}
	cout << max_buckets << "\n";
}
```

Recently, USACO has been moving away from Adhoc problems. Even their lower levels sometimes need certain data structures and specific algorithms. However, a plain brute force is always a great way to get some partial credit for any problem, and sometimes, that’s all you need. USACO always tries to make the first third of their test cases brute force-able, so if you ever find yourself in a situation where you don’t know how to solve the rest of the problems, try writing brute force solutions for some of the test cases.