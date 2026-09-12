export const EMAIL = "hello@tiaboulton.com";
export const ROOMS = "The Anthony Group Practice, 15 Harley Street, London W1G 9QQ";
export const ROOMS_SHORT = "AGP, 15 Harley Street";
export const ROOMS_FLOOR = "3rd & 4th floor maisonette";
export const ROOMS_ARRIVAL = "Press 6 on arrival";
export const ROOMS_MAP = "https://www.google.com/maps/search/?api=1&query=15+Harley+Street+London+W1G+9QQ";
export const AGP = "https://agpharleystreet.co.uk/";

export const ONLINE_PRICE_GBP = 75;
export const HARLEY_PRICE_GBP = 145;
/** Live Stripe — Tia Boulton, online hour £75 */
export const ONLINE_CHECKOUT_URL = "https://book.stripe.com/00w5kC1YvdBV9SFfhP53O09";
/** Live Stripe — Tia Boulton, Harley Street in person £145 */
export const HARLEY_CHECKOUT_URL = "https://book.stripe.com/9B64gy6eL0P96Gt2v353O0a";

export const roomPhotos = [
  {
    src: "/media/agp-room1.jpg",
    alt: "Room 1 — armchairs and a walnut coffee table beneath the pendant light",
    label: "Room 1",
    note: "Fourth floor. Armchairs, walnut table, private suite.",
  },
  {
    src: "/media/agp-room1-mirror.jpg",
    alt: "Room 1 — two armchairs below a gilt-framed mirror",
    label: "Room 1",
    note: "Gilt mirror, two chairs. One-to-one and couples.",
  },
  {
    src: "/media/agp-room2.jpg",
    alt: "Room 2 — the full room, fireplace to one side and sofa to the other",
    label: "Room 2",
    note: "Third floor. Fireplace, sofa, the full room.",
  },
  {
    src: "/media/agp-room2-fire.jpg",
    alt: "Room 2 — armchairs beside the fireplace and gilt arched mirror",
    label: "Room 2",
    note: "Armchairs by the fire.",
  },
  {
    src: "/media/agp-room2-sofa.jpg",
    alt: "Room 2 — the three-seater sofa beneath the window",
    label: "Room 2",
    note: "Three-seater under the sash window.",
  },
  {
    src: "/media/agp-room3.jpg",
    alt: "Room 3 — two armchairs beside the alcove shelving",
    label: "Room 3",
    note: "Third floor. Two armchairs, a therapist’s chair.",
  },
  {
    src: "/media/agp-room3-window.jpg",
    alt: "Room 3 — armchair beneath the porthole and sash windows",
    label: "Room 3",
    note: "Porthole light. Built for the hour.",
  },
] as const;

export const chapters = [
  {
    num: "01",
    title: "The room",
    body: "A private hour. Unhurried. Discreet. For people whose lives look composed from the outside and are asking for more than performance on the inside.",
  },
  {
    num: "02",
    title: "The work",
    body: "Integrative, person-centred counselling. Life and recovery coaching. Supervision for practitioners. Tia has been in practice since 2010, with individuals and families.",
  },
  {
    num: "03",
    title: "Harley Street and home",
    body: "Face to face at The Anthony Group Practice, 15 Harley Street, £145. Online, worldwide, £75. For complex cases: residential support, twenty-four hours, as part of a multidisciplinary team. Price on application.",
  },
  {
    num: "04",
    title: "What she does not do",
    body: "This is not a crisis service, not a clinic, and not a public programme. The PBO and academy sit elsewhere. This practice is Tia’s private work.",
  },
];
