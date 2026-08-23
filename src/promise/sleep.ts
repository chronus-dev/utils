/**
 * Suspends execution for the specified duration.
 *
 * @param ms - The duration to wait in milliseconds
 * @returns A promise that resolves after the specified duration
 *
 * @example
 * ```ts
 * await sleep(1000) // Waits for 1 second
 * ```
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
