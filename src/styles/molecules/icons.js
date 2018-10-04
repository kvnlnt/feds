const atoms = require("../atoms/atoms");
const params = require("../params");

module.exports = {
  ".icon": {
    ...atoms[".display-block"],
    ...atoms[".bg-contain"],
    ...atoms[".bg-center"],
    ...atoms[".margin-auto"],
    ...atoms[".icon-large"],
    ...atoms[".bg-no-repeat"]
  },
  ".icon--black": {
    ...atoms[".filter-black"]
  },
  ".icon--white": {
    ...atoms[".filter-white"]
  },
  ".icon--xs": {
    ...atoms[".icon-size-xs"]
  },
  ".icon--s": {
    ...atoms[".icon-size-s"]
  },
  ".icon--m": {
    ...atoms[".icon-size-m"]
  },
  ".icon--l": {
    ...atoms[".icon-size-l"]
  },
  ".icon--xl": {
    ...atoms[".icon-size-xl"]
  },
  ".icon--xxl": {
    ...atoms[".icon-size-xxl"]
  },
  ".icon--administration": {
    backgroundImage: `url(${params.img.administration})`
  },
  ".icon--analytics": {
    backgroundImage: `url(${params.img.analytics})`
  },
  ".icon--calendar": {
    backgroundImage: `url(${params.img.calendar})`
  },
  ".icon--close": {
    backgroundImage: `url(${params.img.close})`
  },
  ".icon--collapse-expand": {
    backgroundImage: `url(${params.img.collapseExpand})`
  },
  ".icon--daily-roster": {
    backgroundImage: `url(${params.img.dailyRoster})`
  },
  ".icon--data-intelligence": {
    backgroundImage: `url(${params.img.dataIntelligence})`
  },
  ".icon--demographics": {
    backgroundImage: `url(${params.img.demographics})`
  },
  ".icon--events": {
    backgroundImage: `url(${params.img.events})`
  },
  ".icon--home": {
    backgroundImage: `url(${params.img.home})`
  },
  ".icon--hydrants": {
    backgroundImage: `url(${params.img.hydrants})`
  },
  ".icon--incidents": {
    backgroundImage: `url(${params.img.incidents})`
  },
  ".icon--inventory": {
    backgroundImage: `url(${params.img.inventory})`
  },
  ".icon--invoicing": {
    backgroundImage: `url(${params.img.invoicing})`
  },
  ".icon--library": {
    backgroundImage: `url(${params.img.library})`
  },
  ".icon--maintenance": {
    backgroundImage: `url(${params.img.maintenance})`
  },
  ".icon--message-center": {
    backgroundImage: `url(${params.img.messageCenter})`
  },
  ".icon--my-profile": {
    backgroundImage: `url(${params.img.myProfile})`
  },
  ".icon--occupancies": {
    backgroundImage: `url(${params.img.occupancies})`
  },
  ".icon--payroll": {
    backgroundImage: `url(${params.img.payroll})`
  },
  ".icon--reports": {
    backgroundImage: `url(${params.img.reports})`
  },
  ".icon--roster": {
    backgroundImage: `url(${params.img.roster})`
  },
  ".icon--shifts": {
    backgroundImage: `url(${params.img.shifts})`
  },
  ".icon--training": {
    backgroundImage: `url(${params.img.training})`
  }
};