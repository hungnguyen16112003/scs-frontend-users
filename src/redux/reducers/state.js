export const INIT_STATE = {
    modal: {
        show: false,
    },
    toast: {
        show: false,
        message: "",
        type: "success",
    },
    currentId: {
        id: 0,
    },
    categories: {
        loading: false,
        data: [],
    },
    warehouses: {
        loading: false,
        data: [],
    },
    suppliers: {
        loading: false,
        data: [],
    },
    events: {
        loading: false,
        data: [],
        singleEvent: null,
        latestEvents: [],
        topRatingEvents: [],
        topDiscountEvents: [],
        relatedEvents: [],
    },
    customers: {
        loading: false,
        data: [],
    },
    comments: {
        loading: false,
        data: [],
    },
    orders: {
        loading: false,
        data: [],
        userOrders: [],
    },
    admins: {
        loading: false,
        data: [],
    },
};
