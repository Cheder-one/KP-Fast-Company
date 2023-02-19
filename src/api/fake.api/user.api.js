const professions = {
   doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
   waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
   physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
   engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
   actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
   cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
};

const qualities = {
   talkative: { _id: "67rdca3eeb7f6fgeed471198", name: "Разговорчивый", color: "primary" },
   original: { _id: "67rdca3eeb7f6fgeed471100", name: "Оригинальный", color: "warning" },
   joker: { _id: "67rdca3eeb7f6fgeed4711012", name: "Юморист", color: "success" },
   problematic: { _id: "67rdca3eeb7f6fgeed471101", name: "Несговорчивый", color: "danger" },
   handsome: { _id: "67rdca3eeb7f6fgeed471102", name: "Привлекательный", color: "info" },
   timid: { _id: "67rdca3eeb7f6fgeed471103", name: "Робкий", color: "secondary" },
};

const users = [
   {
      _id: "67rdca3eeb7f6fgeed471818",
      name: "Diane Gerlach",
      profession: professions.waiter,
      qualities: [qualities.timid],
      completedMeetings: 23,
      rate: 3.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471819",
      name: "Terry Maz",
      profession: professions.physics,
      qualities: [qualities.original, qualities.talkative],
      completedMeetings: 37,
      rate: 4.6,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471820",
      name: "April Koch",
      profession: professions.physics,
      qualities: [qualities.original, qualities.timid],
      completedMeetings: 14,
      rate: 3.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471815",
      name: "Aubrey Gleichner",
      profession: professions.doctor,
      qualities: [qualities.talkative, qualities.timid, qualities.original],
      completedMeetings: 36,
      rate: 2.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471816",
      name: "Taylor Hodkiewicz",
      profession: professions.doctor,
      qualities: [qualities.joker, qualities.handsome, qualities.problematic],
      completedMeetings: 15,
      rate: 3,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471817",
      name: "Stephanie Langosh",
      profession: professions.doctor,
      qualities: [qualities.joker],
      completedMeetings: 12,
      rate: 3.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471821",
      name: "Agnes Bartoletti",
      profession: professions.engineer,
      qualities: [qualities.original, qualities.talkative],
      completedMeetings: 21,
      rate: 4.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471822",
      name: "James Schuster",
      profession: professions.engineer,
      qualities: [qualities.handsome],
      completedMeetings: 55,
      rate: 5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471823",
      name: "Ricky Shields Sr.",
      profession: professions.cook,
      qualities: [qualities.original, qualities.timid],
      completedMeetings: 17,
      rate: 4.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed471824",
      name: "Bernard Kertzmann",
      profession: professions.cook,
      qualities: [qualities.handsome, qualities.joker],
      completedMeetings: 4,
      rate: 4.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed47181f",
      name: "Ronald Marks",
      profession: professions.actor,
      qualities: [qualities.timid, qualities.original],
      completedMeetings: 34,
      rate: 3.5,
      bookmark: false
   },
   {
      _id: "67rdca3eeb7f6fgeed47181r",
      name: "Latoya Krajcik",
      profession: professions.actor,
      qualities: [qualities.handsome],
      completedMeetings: 44,
      rate: 5,
      bookmark: false
   },
]

// console.log(users[10].qualities[1].name);

export function fetchAll() {
   return users
}
