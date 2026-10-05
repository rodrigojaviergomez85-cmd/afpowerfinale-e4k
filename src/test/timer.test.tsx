import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { useTimer } from "@/components/engine/Timer";
vi.mock("@/lib/sound", () => ({ sfx: { tick: vi.fn(), buzzer: vi.fn() } }));
beforeEach(() => vi.useFakeTimers());
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
it("resets a running timer without retaining the previous deadline", () => {
  const end = vi.fn();
  const { result } = renderHook(() => useTimer(5, end));
  act(() => result.current.reset(true));
  act(() => vi.advanceTimersByTime(3000));
  expect(result.current.remaining).toBeCloseTo(2, 0);
  act(() => result.current.reset(true));
  act(() => vi.advanceTimersByTime(3000));
  expect(result.current.remaining).toBeCloseTo(2, 0);
  expect(end).not.toHaveBeenCalled();
  act(() => vi.advanceTimersByTime(2100));
  expect(end).toHaveBeenCalledTimes(1);
});
it("does not consume time while paused", () => {
  const { result } = renderHook(() => useTimer(5));
  act(() => result.current.reset(true));
  act(() => vi.advanceTimersByTime(1000));
  act(() => result.current.setRunning(false));
  act(() => vi.advanceTimersByTime(10000));
  expect(result.current.remaining).toBeCloseTo(4, 0);
  act(() => result.current.setRunning(true));
  act(() => vi.advanceTimersByTime(1000));
  expect(result.current.remaining).toBeCloseTo(3, 0);
});
it("refunds an undone assisted grade without resetting the game clock", () => {
  const { result } = renderHook(() => useTimer(30));
  act(() => result.current.reset(true));
  act(() => vi.advanceTimersByTime(1000));
  act(() => {
    result.current.penalize(5);
    result.current.setRunning(false);
  });
  expect(result.current.remaining).toBeCloseTo(24, 0);
  act(() => result.current.refund(5));
  expect(result.current.remaining).toBeCloseTo(29, 0);
  act(() => result.current.setRunning(true));
  act(() => vi.advanceTimersByTime(1000));
  expect(result.current.remaining).toBeCloseTo(28, 0);
});
it("deducts real time and keeps counting from the penalized deadline", () => {
  const end = vi.fn();
  const { result } = renderHook(() => useTimer(30, end));
  act(() => result.current.reset(true));
  act(() => vi.advanceTimersByTime(2000));
  act(() => result.current.penalize(10));
  expect(result.current.remaining).toBeCloseTo(18, 0);
  act(() => vi.advanceTimersByTime(3000));
  expect(result.current.remaining).toBeCloseTo(15, 0);
  act(() => result.current.penalize(20));
  expect(result.current.remaining).toBe(0);
  expect(end).toHaveBeenCalledTimes(1);
  act(() => {
    result.current.penalize(10);
    vi.advanceTimersByTime(5000);
  });
  expect(end).toHaveBeenCalledTimes(1);
});
it("handles batched penalties, paused expiry, and a fresh game after expiry", () => {
  const end = vi.fn();
  const { result } = renderHook(() => useTimer(20, end));
  act(() => {
    result.current.penalize(10);
    result.current.penalize(10);
  });
  expect(end).toHaveBeenCalledTimes(1);
  act(() => result.current.reset(true));
  act(() => vi.advanceTimersByTime(20000));
  expect(end).toHaveBeenCalledTimes(2);
});
