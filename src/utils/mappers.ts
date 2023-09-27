import { QueryGames_games } from "graphql/generated/QueryGames";
import {
    QueryHome_banners,
    QueryHome_sections_freeGames_highlight,
} from "graphql/generated/QueryHome";
import formatPrice from "./formatPrice";
import { QueryWishlist_wishlists_games } from "graphql/generated/QueryWishlist";
import { QueryOrders_orders } from "graphql/generated/QueryOrders";
import { getImageUrl } from "./getImageUrl";

export const bannerMapper = (banners: QueryHome_banners[]) => {
    return banners.map((banner) => ({
        img: `${getImageUrl(banner.image?.url)}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label || null,
        buttonLink: banner.button?.link || null,
        ribbon: banner.ribbon?.text || null,
        ribbonColor: banner.ribbon?.color || null,
        ribbonSize: banner.ribbon?.size || null,
    }));
};

export const gamesMapper = (
    games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined,
) => {
    return games?.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `${getImageUrl(game.cover?.url)}`,
        price: game.price,
    }));
};

export const highlightMapper = (
    highlight: QueryHome_sections_freeGames_highlight | null | undefined,
) => {
    return {
        title: highlight?.title,
        subtitle: highlight?.subtitle,
        backgroundImage: `${getImageUrl(highlight?.background?.url)}`,
        buttonLabel: highlight?.buttonLabel,
        buttonLink: highlight?.buttonLink,
        alignment: highlight?.alignment,
    };
};

export const cartMapper = (games: QueryGames_games[] | null | undefined) => {
    return games
        ? games?.map((game) => ({
              id: game.id,
              img: `${getImageUrl(game.cover?.url)}`,
              price: formatPrice(game.price),
              title: game.name,
          }))
        : [];
};

export const ordersMapper = (orders: QueryOrders_orders[]) => {
    return orders
        ? orders.map((order) => {
              return {
                  id: order.id,
                  paymentInfo: {
                      flag: order.card_brand,
                      img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
                      number: order.card_last4
                          ? `**** **** **** ${order.card_last4}`
                          : "Free Game",
                      purchaseDate: `Purchase made on ${new Intl.DateTimeFormat("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                      }).format(new Date(order.created_at))}`,
                  },
                  games: order.games.map((game) => ({
                      id: game.id,
                      title: game.name,
                      downloadLink:
                          "https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf",
                      img: `${getImageUrl(game.cover?.url)}`,
                      price: formatPrice(game.price),
                  })),
              };
          })
        : [];
};
