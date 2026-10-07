import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";

import { routeTree } from "@/routeTree.gen";
import { Route as rootRoute } from "@/routes/__root";

function renderAt(path: string) {
  Object.assign(rootRoute.options, {
    shellComponent: ({ children }: { children: ReactNode }) => <>{children}</>,
  });
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  return render(<RouterProvider router={router} />);
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

// Use a fragment shell because Testing Library mounts inside a document body.
describe("App routing", () => {
  it("renders the index route", async () => {
    renderAt("/");
    expect(await screen.findByRole("heading", { name: /Todo el curso/i })).toBeInTheDocument();
  });

  it("renders the not-found route", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);

    renderAt("/this-route-does-not-exist");
    expect(await screen.findByRole("heading", { name: "404" })).toBeInTheDocument();
  });
});
