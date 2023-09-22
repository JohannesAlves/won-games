import { MockedProvider } from "@apollo/client/testing";
import { useWishlist, WishlistProvider } from ".";
import {
    createWishlistMock,
    removeWishlistMock,
    updateWishlistMock,
    wishlistItems,
    wishlistMock,
} from "./mock";
import { act, renderHook, waitFor } from "utils/test-utils";

jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual("next-auth/react");
    const mockSession = {
        jwt: "123",
        user: { email: "lorem@ipsum.com" },
    };
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => {
            return { data: mockSession, status: "authenticated" }; // return type is [] in v3 but changed to {} in v4
        }),
    };
});

describe("useWishlist", () => {
    it("should return wishlist items", async () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MockedProvider mocks={[wishlistMock]}>
                <WishlistProvider>{children}</WishlistProvider>
            </MockedProvider>
        );

        const { result } = renderHook(() => useWishlist(), {
            wrapper,
        });

        // it starts loading the data
        expect(result.current.loading).toBe(true);

        // wait until get the data

        await waitFor(() => {
            expect(result.current.items).toStrictEqual([
                wishlistItems[0],
                wishlistItems[1],
            ]);
        });
    });

    it("should check if the game is in wishlist", async () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MockedProvider mocks={[wishlistMock]}>
                <WishlistProvider>{children}</WishlistProvider>
            </MockedProvider>
        );

        const { result } = renderHook(() => useWishlist(), {
            wrapper,
        });

        await waitFor(() => {
            expect(result.current.isInWishlist("1")).toBe(true);
            expect(result.current.isInWishlist("2")).toBe(true);
            expect(result.current.isInWishlist("3")).toBe(false);
        });
    });

    it("should add item in wishlist creating a new list", async () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MockedProvider mocks={[createWishlistMock]}>
                <WishlistProvider>{children}</WishlistProvider>
            </MockedProvider>
        );

        const { result } = renderHook(() => useWishlist(), {
            wrapper,
        });

        act(() => {
            result.current.addToWishlist("3");
        });

        await waitFor(() => {
            expect(result.current.items).toStrictEqual([wishlistItems[2]]);
        });
    });

    it("should add item in wishlist updating the current list", async () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MockedProvider mocks={[wishlistMock, updateWishlistMock]}>
                <WishlistProvider>{children}</WishlistProvider>
            </MockedProvider>
        );

        const { result } = renderHook(() => useWishlist(), {
            wrapper,
        });

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        act(() => {
            result.current.addToWishlist("3");
        });

        await waitFor(() => {
            expect(result.current.items).toStrictEqual(wishlistItems);
        });
    });

    it("should remove item from wishlist", async () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MockedProvider mocks={[wishlistMock, removeWishlistMock]}>
                <WishlistProvider>{children}</WishlistProvider>
            </MockedProvider>
        );

        const { result } = renderHook(() => useWishlist(), {
            wrapper,
        });

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        act(() => {
            result.current.removeFromWishlist("1");
        });

        await waitFor(() => {
            expect(result.current.items).toStrictEqual([wishlistItems[1]]);
        });
    });
});
