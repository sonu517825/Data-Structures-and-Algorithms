# 🔁 Sorting Algorithms

This repository documents deep understanding of sorting algorithms from a **system-level, engineering, and interview perspective**.  
It’s structured not just for implementation, but for **architectural understanding, performance reasoning, and production-ready decision-making**.


## 🎯 Why Sorting Matters

Understanding sorting algorithms is critical for building **high-performance systems**.

### Here’s why sorting is crucial:

- Data Pipelines & ETL Processes
- In-memory vs External Sorting Strategies
- Indexing & Joins
- Map-Reduce Systems
- Real-Time Decision Systems
- Log Processing & Big Data Infrastructure
- Frontend Rendering & Pagination

### As a Senior Engineer or Tech Leader, you are expected to:

- Know When to Use Specific Sorting Algorithms
- Justify Time and Space Trade-offs
- Design Efficient, Hybrid, or Distributed Sorting Systems


### 🔹 Comparison-Based Sorts

| Algorithm      | Best Time    | Average Time | Worst Time   | Space    | Stable | In-Place | Real-World Use                             |
| -------------- | ------------ | ------------ | ------------ | -------- | ------ | -------- | ------------------------------------------ |
| Quick Sort     | O(n log n)   | O(n log n)   | O(n²)        | O(log n) | ❌     | ✅       | Fast in-memory sort (arrays, logs)         |
| Merge Sort     | O(n log n)   | O(n log n)   | O(n log n)   | O(n)     | ✅     | ❌       | External sort (linked lists, file systems) |
| Heap Sort      | O(n log n)   | O(n log n)   | O(n log n)   | O(1)     | ❌     | ✅       | Priority scheduling, streaming top-k       |
| Insertion Sort | O(n)         | O(n²)        | O(n²)        | O(1)     | ✅     | ✅       | Small data, real-time insertions           |
| Selection Sort | O(n²)        | O(n²)        | O(n²)        | O(1)     | ❌     | ✅       | Educational only                           |
| Bubble Sort    | O(n)         | O(n²)        | O(n²)        | O(1)     | ✅     | ✅       | Educational only                           |
| Timsort        | O(n)         | O(n log n)   | O(n log n)   | O(n)     | ✅     | ❌       | Python, Java, JS built-in sort             |


### 🔹 Non-Comparison Sorts

| Algorithm         | Best Time    | Average Time  | Worst Time    | Space    | Stable | In-Place | Real-World Use               |
| ----------------- | ------------ | ------------- | ------------- | -------- | ------ | -------- | ---------------------------- |
| Counting Sort     | O(n + k)     | O(n + k)      | O(n + k)      | O(k)     | ✅     | ❌       | Sorting small-range integers |
| Radix Sort        | O(nk)        | O(nk)         | O(nk)         | O(n + k) | ✅     | ❌       | Sorting integers, strings    |
| Bucket Sort       | O(n + k)     | O(n + k)      | O(n²)         | O(n)     | ✅     | ❌       | Floating-point distributions |


## 🔍 When to Use What – Decision Matrix

| Goal                             | Use Algorithm        | Reason                                    |
| -------------------------------- | -------------------- | ----------------------------------------- |
| Fastest average case (in-memory) | Quick Sort           | Cache-friendly, divide-and-conquer        |
| Stability required               | Merge Sort / Timsort | Keeps order of equal items                |
| External / disk sorting          | Merge Sort           | Stream-based merge phase                  |
| Real-time, small input           | Insertion Sort       | Minimal overhead, adaptive                |
| Large but small-range integers   | Counting Sort        | Non-comparison, linear time               |
| Long integers / strings          | Radix Sort           | Linear by digits/characters               |
| Stream top-k / min-heap ops      | Heap Sort            | Efficient for selection and partial sorts |


## 🔩 Engineering Perspective

### 🔸 Space vs Time

- **Quick Sort**: Fastest, but stack-heavy (log n)
- **Merge Sort**: Predictable performance, O(n) space
- **Counting/Radix**: Near-linear, but domain-limited
- **Heap Sort**: Worst-case log n always, but cache-inefficient

### 🔸 Stability Requirements

- Stable sort needed when:
- Preserving original order of equal items
- Sorting complex records (e.g., secondary sort on timestamp)

### 🔸 Parallelism & Scalability

- Merge sort & bucket sort are **naturally parallel**
- MapReduce-style sort uses **external merge**
- **GPU sorting** favors bucket/radix-based strategies


## 🧪 Interview Focus

### Must Implement:

- Quick Sort (with random pivot)
- Merge Sort (top-down & bottom-up)
- Heap Sort (custom heapify)
- Counting, Radix (non-comparison logic)

### Must Explain:

- Why Quick Sort is preferred in practice
- How Timsort detects and merges natural runs
- External vs internal sort strategies
- Merge sort's advantage with linked lists

### Must Justify:

- Trade-offs in terms of memory and cache usage
- Real-world use cases where you’d switch algorithms
- Scenarios requiring hybrid sort (e.g., Timsort)


## 📈 Benchmark Tips

Always benchmark with real-world data:

- Partially sorted
- Reversed
- Duplicates
- Uniform vs skewed distributions

Use tools like:

- Node.js `performance.now()`
- TypeScript benchmark suites
- `console.time()` in basic setups