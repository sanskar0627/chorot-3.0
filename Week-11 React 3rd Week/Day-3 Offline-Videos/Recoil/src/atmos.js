import { atom } from "recoil";

export const networkAtom=atom({
    key:"networksAtom",
    default:2706
});
export const jobAtom=atom({
    key:"jobsAtom",
    default:0
});
export const notificationAtom=atom({
    key:"notificationsAtom",
    default:12
});

export const messagingAtom=atom({
    key:"messagingAtom",
    default:5
});
