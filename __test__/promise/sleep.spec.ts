import { sleep } from '@chronus-dev/utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('sleep', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('resolves after the specified duration', async () => {
        let resolved = false

        sleep(1000).then(() => {
            resolved = true
        })

        expect(resolved).toBe(false)

        await vi.advanceTimersByTimeAsync(1000)

        expect(resolved).toBe(true)
    })
})
