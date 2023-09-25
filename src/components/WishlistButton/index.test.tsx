import { WishlistContextDefaultValues } from "hooks/useWishlist";
import WishlistButton from ".";
import { act, fireEvent, render, screen } from "utils/test-utils";

const mockSession = {
    jwt: "123",
    user: {
        name: "John Doe",
    },
    expires: "",
};

// Mock the useSession hook
jest.mock("next-auth/react", () => ({
    useSession: jest.fn(() => ({ data: mockSession })),
}));

describe("<WishlistButton />", () => {
    it("should render a button to add to wishlist", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => false,
        };

        render(<WishlistButton id="1" />, { wishlistProviderProps });

        expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
    });

    it("should not render if is not logged", () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => false,
        };

        render(<WishlistButton id="1" />, { wishlistProviderProps });

        expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument();
    });

    it("should add to wishlist", async () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => false,
            addToWishlist: jest.fn(),
        };

        render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

        act(() => {
            fireEvent.click(screen.getByText(/add to wishlist/i));
        });

        expect(wishlistProviderProps.addToWishlist).toHaveBeenCalled();
    });

    it("should remove from wishlist", async () => {
        const wishlistProviderProps = {
            ...WishlistContextDefaultValues,
            isInWishlist: () => true,
            removeFromWishlist: jest.fn(),
        };

        ("");

        render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

        act(() => {
            fireEvent.click(screen.getByText(/remove from wishlist/i));
        });

        expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith("1");
    });
});
