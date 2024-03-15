import { HTMLElement as HTMLElement$1, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const K2btBaseColorPicker$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.selectionChangedEvent = createEvent(this, "selectionChanged", 7);
    this.selectionErrorEvent = createEvent(this, "selectionError", 7);
    this.columns = 0;
    this.containerclass = '';
    this.maxSelectionSize = 1;
    this.enabled = true;
  }
  getColorRows() {
    var result = [];
    if (this.columns > 0) {
      for (let i = 0; i < this.colorOptions.length; i += this.columns) {
        const row = this.colorOptions.slice(i, i + this.columns);
        result.push(row);
      }
    }
    else {
      result.push(this.colorOptions);
    }
    return result;
  }
  colorIsSelected(c) {
    return this.selectedIds.indexOf(c.id) != -1;
  }
  selectColor(c) {
    debugger;
    if (this.enabled) {
      var id = c.id;
      if (this.selectedIds.includes(id)) {
        // if only one item, it cannot be unselected
        if (this.maxSelectionSize != 1) {
          this.selectedIds = this.selectedIds.filter(i => i != id);
          this.selectionChangedEvent.emit({});
        }
      }
      else {
        // Before selecting this item, check that the amount of items is OK
        if (this.maxSelectionSize == 1) {
          this.selectedIds = [id];
          this.selectionChangedEvent.emit({});
        }
        else if (this.maxSelectionSize == 0 || this.maxSelectionSize > this.selectedIds.length) {
          this.selectedIds = this.selectedIds.concat(id);
          this.selectionChangedEvent.emit({});
        }
        else {
          this.errorCode = K2btBaseColorPicker$1.ERROR_SELECTION_FULL;
          this.selectionErrorEvent.emit({});
        }
      }
    }
  }
  componentWillRender() {
    if (this.maxSelectionSize > 0 && this.selectedIds.length > this.maxSelectionSize)
      this.selectedIds = this.selectedIds.slice(0, this.maxSelectionSize);
  }
  render() {
    var sectionClass = 'K2BT_BaseColorPicker ' + this.containerclass;
    if (!this.enabled)
      sectionClass += ' K2BT_BaseColorPickerDisabled';
    return (h("div", { class: sectionClass }, this.getColorRows().map(r => {
      return (h("div", { class: "K2BT_BaseColorPickerRow" }, r.map(c => {
        var style = { backgroundColor: c.colorCode };
        var itemClass = 'K2BT_BaseColorPickerItem' + (this.colorIsSelected(c) ? ' K2BT_BaseColorPickerItemSelected' : '');
        return h("div", { class: itemClass, style: style, title: c.description, onClick: () => this.selectColor(c) });
      })));
    })));
  }
};
K2btBaseColorPicker$1.ERROR_SELECTION_FULL = 'SELECTION_FULL';

class ControlInfoValue {
  static getAtomicValues_impl(values) {
    var _a;
    return (_a = values === null || values === void 0 ? void 0 : values.map(value => { var _a; return (((_a = value.items) === null || _a === void 0 ? void 0 : _a.length) > 0 ? ControlInfoValue.getAtomicValues_impl(value.items) : [value]); }).reduce((a, b) => a.concat(b), [])) !== null && _a !== void 0 ? _a : [];
  }
  static containsDetails(values) {
    var _a;
    return (_a = (values === null || values === void 0 ? void 0 : values.filter(value => value.detail != '' && value.detail != undefined).length) != 0) !== null && _a !== void 0 ? _a : false;
  }
  static containsIcons(values) {
    var _a;
    return (_a = (values === null || values === void 0 ? void 0 : values.filter(value => value.imageUrl != '' && value.imageUrl != undefined).length) != 0) !== null && _a !== void 0 ? _a : false;
  }
  static containsTrailingText(values) {
    var _a;
    return (_a = (values === null || values === void 0 ? void 0 : values.filter(value => value.trailingText != '' && value.trailingText != undefined).length) != 0) !== null && _a !== void 0 ? _a : false;
  }
  static containsBadges(values) {
    var _a;
    return (_a = (values === null || values === void 0 ? void 0 : values.filter(value => value.badgeClass != '' && value.badgeClass != undefined).length) != 0) !== null && _a !== void 0 ? _a : false;
  }
}
class ImageRegion {
}
ImageRegion.AVAILABLE = 'AVAILABLE';
ImageRegion.UNAVAILABLE = 'UNAVAILABLE';
class CalendarItem {
  constructor() {
    this.isDraft = false;
  }
  static calendarItemsCollide(item1, item2) {
    var first = item1.dateFrom < item2.dateFrom ? item1 : item2;
    var second = first == item1 ? item2 : item1;
    return second.dateFrom < first.dateTo;
  }
  static isInDay(i, dateFrom, dateTo) {
    // Check if event should be shown on this day
    return ((dateFrom <= i.dateFrom && dateTo > i.dateFrom) ||
      (dateFrom <= i.dateTo && dateTo > i.dateTo) || // Option 1: event starts or ends in this day
      (i.dateFrom < dateFrom && i.dateTo > dateTo) // Option 2: events starts before and ends after this day
    );
  }
  static allDayItemIsInDay(i, day) {
    var from = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, 0, 0);
    var to = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1, 0, 0, 0);
    return this.isInDay(i, from, to);
  }
  static itemIsInPast(item, currentDate) {
    return !item.allDay ? item.dateFrom < currentDate && item.dateTo < currentDate : currentDate > item.dateTo && !this.allDayItemIsInDay(item, currentDate);
  }
  static addItemClasses(classList, item, currentDate) {
    if (item.isDraft)
      classList.push('K2BT_CalendarDayItemDraft');
    if (item.class)
      classList.push(item.class);
    if (CalendarItem.itemIsInPast(item, currentDate))
      classList.push(' K2BT_CalendarDayItemPast');
  }
}
class EnumUtils {
  static getEnumKeyByEnumValue(myEnum, enumValue) {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : null;
  }
}
class LanguageUtils {
  static getTranslatedMessage(msg) {
    //@ts-ignore
    return k2btools.getTranslatedMessage(msg);
  }
}

const K2btCalendarActionMenu$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.actionClicked = createEvent(this, "actionClicked", 7);
    this.actions = [];
    this.isOpen = false;
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  executeAction(action) {
    this.isOpen = false;
    this.actionClicked.emit(action.id);
  }
  closeMenu(ev) {
    if (this.isOpen && this.quickDaySelectorContainer && !this.quickDaySelectorContainer.contains(ev.target))
      this.isOpen = false;
  }
  render() {
    var _a, _b;
    const menuClass = `K2BT_CalendarActionMenu ${this.isOpen ? 'open' : ''}`;
    return ((_b = (_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0 ? (h("div", { class: menuClass, ref: c => (this.quickDaySelectorContainer = c) }, h("span", { class: "K2BT_CalendarActionMenu_ToggleButton", onClick: e => {
        e.stopPropagation();
        this.toggleMenu();
      } }), h("div", { class: "K2BT_CalendarActionMenuContents" }, this.isOpen && (h("ul", { class: "K2BT_CalendarActionMenu_Dropdown" }, this.actions.map(action => (h("li", { onClick: e => {
        e.stopPropagation();
        this.executeAction(action);
      } }, h("img", { class: 'K2BT_CalendarActionMenu_Image GX_Image_' + action.imageName + '_Class', src: action.imageUrl, alt: LanguageUtils.getTranslatedMessage(action.name) }), h("span", null, LanguageUtils.getTranslatedMessage(action.name)))))))))) : ('');
  }
};

class DateUtils {
  static equalsDate(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  static getDayOfWeekShortStringFromDayNumber(number) {
    //@ts-ignore
    return k2btools.getDayOfWeekShortStringFromDayNumber(number);
  }
  static getDayOfWeekShortString(day) {
    //@ts-ignore
    return k2btools.getDayOfWeekShortString(day);
  }
  static getMonthName(monthNumber) {
    //@ts-ignore
    return k2btools.getMonthName(monthNumber);
  }
  static getDateAtMidnight(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  }
  static datePeriodInBound(lowerBound, upperBound, periodFrom, periodTo) {
    return ((lowerBound <= periodFrom && upperBound >= periodFrom) ||
      (lowerBound <= periodTo && upperBound >= periodTo) ||
      (periodFrom <= lowerBound && periodTo >= lowerBound) ||
      (periodFrom <= upperBound && periodTo >= upperBound));
  }
  static formatItemDate(dateFrom) {
    if (dateFrom.getMinutes() !== 0)
      return dateFrom.getHours() + ':' + this.ensureTwoDigits(dateFrom.getMinutes());
    else
      return dateFrom.getHours();
  }
  static ensureTwoDigits(arg0) {
    if (arg0 < 10)
      return '0' + arg0;
    else
      return arg0.toString();
  }
  static getWeeksOfMonth(year, month, weekstartday) {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    var startOfFirstWeek = new Date(firstDayOfMonth.getTime());
    if (weekstartday == WeekStartDay.Sunday) {
      startOfFirstWeek.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());
    }
    else {
      startOfFirstWeek.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay() + 1);
    }
    var endOfLastWeek = new Date(lastDayOfMonth.getTime());
    if (weekstartday == WeekStartDay.Sunday) {
      endOfLastWeek.setDate(lastDayOfMonth.getDate() - lastDayOfMonth.getDay() + 7);
    }
    else {
      endOfLastWeek.setDate(lastDayOfMonth.getDate() - lastDayOfMonth.getDay() + 8);
    }
    const weeks = [];
    var day = new Date(startOfFirstWeek.getTime());
    while (day < endOfLastWeek) {
      if ((weekstartday == WeekStartDay.Sunday && day.getDay() === 0) || (weekstartday == WeekStartDay.Monday && day.getDay() === 1)) {
        weeks.push([]);
      }
      weeks[weeks.length - 1].push(day);
      day = new Date(day.getTime());
      day.setDate(day.getDate() + 1);
    }
    return weeks;
  }
}
var CalendarPeriodView;
(function (CalendarPeriodView) {
  CalendarPeriodView["Day"] = "day";
  CalendarPeriodView["Week"] = "week";
  CalendarPeriodView["WorkWeek"] = "workweek";
  CalendarPeriodView["Month"] = "month";
})(CalendarPeriodView || (CalendarPeriodView = {}));
var WeekStartDay;
(function (WeekStartDay) {
  WeekStartDay["Sunday"] = "Sunday";
  WeekStartDay["Monday"] = "Monday";
})(WeekStartDay || (WeekStartDay = {}));

const K2btCalendarDayInMonthPicker$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.dayClicked = createEvent(this, "dayClicked", 7);
    this.weekstartday = WeekStartDay.Sunday;
  }
  componentWillRender() {
    this.currentMonth = this.selectedDate.getMonth();
    this.currentYear = this.selectedDate.getFullYear();
  }
  render() {
    const currentDate = new Date();
    const monthName = DateUtils.getMonthName(this.currentMonth);
    const weeks = DateUtils.getWeeksOfMonth(this.currentYear, this.currentMonth + 1, this.weekstartday);
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    return (h("div", { class: "K2BT_CalendarPickerContainer" }, h("div", { class: "K2BT_CalendarPickerHeader" }, h("div", { class: "K2BT_CalendarPickerPreviousMonth", onClick: () => this.previousMonth() }), h("div", { class: "K2BT_CalendarPickerCurrentMonth" }, monthName, " ", this.currentYear), h("div", { class: "K2BT_CalendarPickerNextMonth", onClick: () => this.nextMonth() })), h("div", { class: "K2BT_CalendarPickerWeekdays" }, weeks[0]
      .map(d => d.getDay())
      .map(weekdayNum => (h("div", { class: "K2BT_CalendarPickerWeekday" }, DateUtils.getDayOfWeekShortStringFromDayNumber(weekdayNum))))), h("div", { class: "K2BT_CalendarPickerCalendar" }, weeks.map(week => (h("div", { class: "K2BT_CalendarPickerWeek" }, week.map(date => {
      const dayClass = DateUtils.equalsDate(date, currentDate) ? 'K2BT_CalendarPickerDay K2BT_CalendarPickerToday' : 'K2BT_CalendarPickerDay';
      return date >= firstDayOfMonth && date <= lastDayOfMonth ? (h("div", { class: dayClass, onClick: () => this.dayClickHandler(date) }, date.getDate())) : (h("div", { class: "K2BT_CalendarPickerDayPlaceholder" }));
    })))))));
  }
  previousMonth() {
    if (this.currentMonth == 0) {
      this.currentMonth = 11;
      this.currentYear = this.currentYear - 1;
    }
    else {
      this.currentMonth = this.currentMonth - 1;
    }
    this.updateSelectedDate();
  }
  nextMonth() {
    if (this.currentMonth == 11) {
      this.currentMonth = 0;
      this.currentYear = this.currentYear + 1;
    }
    else {
      this.currentMonth = this.currentMonth + 1;
    }
    this.updateSelectedDate();
  }
  updateSelectedDate() {
    this.selectedDate = new Date(this.currentYear, this.currentMonth, 1, 0, 0, 0);
  }
  dayClickHandler(date) {
    if (!date)
      return; // Ignore clicks on empty days
    this.dayClicked.emit(date);
  }
};

const K2btCalendarDayView$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.creatingNewDraft = createEvent(this, "creatingNewDraft", 7);
    this.newDraftCreated = createEvent(this, "newDraftCreated", 7);
    this.draftCancelled = createEvent(this, "draftCancelled", 7);
    this.itemClicked = createEvent(this, "itemClicked", 7);
    this.actionClicked = createEvent(this, "actionClicked", 7);
    this.calendars = [];
    this.year = 2023;
    this.month = 1;
    this.day = 1;
    this.readonly = true;
    this.draftItemDescription = '(no title)';
    this.showhours = true;
    this.alldayrows = 10;
    this.draftItem = null;
    this.currentDate = new Date();
    this.creatingDraft = false;
    this.mouseMovedWhileCreating = false;
    this.draftBaseDate = null;
    this.intervalId = null;
    this.scopedfunction = this.onMouseUp.bind(this);
  }
  cancelDraft() {
    if (this.draftItem != null) {
      this.draftCancelled.emit(this.draftItem);
      this.draftItem = null;
    }
  }
  onMouseDown(event) {
    if (this.readonly) {
      if (this.draftItem) {
        this.draftCancelled.emit(this.draftItem);
        this.draftItem = null;
      }
      var mousePos = this.getMousePosition(event, this.baseGridControl);
      var hour = Math.floor((mousePos.y / this.baseGridControl.offsetHeight) * this.getAmountOfHours() + this.startHour);
      var min = (Math.round(((mousePos.y / this.baseGridControl.offsetHeight) * this.getAmountOfHours() + this.startHour - hour) * 4) / 4) * 60;
      this.draftItem = new CalendarItem();
      this.draftItem.class = '';
      this.draftItem.isDraft = true;
      this.draftItem.description = this.draftItemDescription;
      this.draftItem.dateFrom = new Date(this.year, this.month, this.day, hour, min, 0, 0);
      this.draftItem.dateTo = new Date(this.year, this.month, this.day, hour + 1, min, 0, 0);
      this.creatingDraft = true;
      this.mouseMovedWhileCreating = false;
      this.draftBaseDate = this.draftItem.dateFrom;
      this.creatingNewDraft.emit(null);
    }
  }
  onMouseMove(event) {
    if (this.readonly && this.creatingDraft) {
      this.mouseMovedWhileCreating = true;
      var mousePos = this.getMousePosition(event, this.baseGridControl);
      var hour = Math.floor((mousePos.y / this.baseGridControl.offsetHeight) * this.getAmountOfHours() + this.startHour);
      var min = (Math.round(((mousePos.y / this.baseGridControl.offsetHeight) * this.getAmountOfHours() + this.startHour - hour) * 4) / 4) * 60;
      if (min === 60) {
        min = 0;
        hour++;
      }
      if (hour > this.draftBaseDate.getHours() || (hour === this.draftBaseDate.getHours() && min > this.draftBaseDate.getMinutes())) {
        // Set draft to previous dates
        if (this.draftItem.dateFrom !== this.draftBaseDate || hour !== this.draftItem.dateTo.getHours() || min !== this.draftItem.dateTo.getMinutes()) {
          this.draftItem = Object.assign({}, this.draftItem);
          this.draftItem.dateFrom = this.draftBaseDate;
          this.draftItem.dateTo = new Date(this.year, this.month, this.day, hour, min, 0, 0);
        }
      }
      else if (hour < this.draftBaseDate.getHours() || (hour === this.draftBaseDate.getHours() && min < this.draftBaseDate.getMinutes())) {
        // Set draft to preceding dates
        if (this.draftItem.dateTo !== this.draftBaseDate || hour !== this.draftItem.dateFrom.getHours() || min !== this.draftItem.dateFrom.getMinutes()) {
          this.draftItem = Object.assign({}, this.draftItem);
          this.draftItem.dateFrom = new Date(this.year, this.month, this.day, hour, min, 0, 0);
          this.draftItem.dateTo = this.draftBaseDate;
        }
      }
    }
  }
  onMouseUp() {
    if (this.readonly && this.creatingDraft) {
      this.creatingDraft = false;
      this.mouseMovedWhileCreating = false;
      this.draftItem = Object.assign({}, this.draftItem);
      this.newDraftCreated.emit({ item: this.draftItem });
    }
  }
  onItemClicked(item) {
    this.itemClicked.emit({ item: item });
  }
  onActionClicked(item, actionId) {
    this.actionClicked.emit({ item: item, action: actionId });
  }
  getMousePosition(event, div) {
    const rect = div.getBoundingClientRect();
    const scrollTop = div.scrollTop;
    const scrollLeft = div.scrollLeft;
    const clientX = event.clientX;
    const clientY = event.clientY;
    const x = clientX - rect.left + scrollLeft;
    const y = clientY - rect.top + scrollTop;
    return { x, y };
  }
  getDateTo() {
    return new Date(this.year, this.month, this.day, this.endHour, 0, 0, 0);
  }
  getDateFrom() {
    return new Date(this.year, this.month, this.day, this.startHour, 0, 0, 0);
  }
  getAmountOfHours() {
    return this.endHour - this.startHour;
  }
  getBoundedDate(d) {
    if (d > this.getDateTo())
      return this.getDateTo();
    if (d < this.getDateFrom())
      return this.getDateFrom();
    return d;
  }
  render() {
    var day = this.getDay();
    var dayOfWeek = DateUtils.getDayOfWeekShortString(day);
    var dayOfMonth = this.day.toString();
    var hours = [];
    for (var hour = this.startHour; hour < this.endHour; hour++) {
      hours.push(hour);
    }
    var allDayItems = this.getAllDayItems();
    var items = this.getNonAllDayItems();
    if (this.draftItem != null && !this.creatingDraft)
      items.push(this.draftItem);
    var itemRows = this.sortIntoRows(items);
    if (this.draftItem != null && this.mouseMovedWhileCreating) {
      // add the draft item without looking at rows while user is moving the mouse
      itemRows.push([this.draftItem]);
      items.push(this.draftItem);
    }
    var hourPositionStyle = {
      top: ((this.currentDate.getTime() - this.getDateFrom().getTime()) / 1000 / 60 / 60 / this.getAmountOfHours()) * 100 + '%',
      display: this.currentDate >= this.getDateFrom() && this.currentDate <= this.getDateTo() ? 'block' : 'none',
    };
    var itemsViewClasses = 'K2BT_CalendarDayItemsView';
    if (!this.showhours)
      itemsViewClasses += ' K2BT_CalendarDayItemsNoMargin';
    var dayContainerClasses = 'K2BT_CalendarDayViewContainer';
    if (this.currentDate.getFullYear() === this.year && this.currentDate.getMonth() === this.month && this.currentDate.getDate() === this.day)
      dayContainerClasses += ' K2BT_CalendarDayViewToday';
    if (this.draftItem)
      dayContainerClasses += ' K2BT_CalendarDayCreatingDraft';
    return (h("div", { class: dayContainerClasses }, h("div", { class: "K2BT_CalendarDayViewHeader" }, h("div", { class: "K2BT_CalendarDayViewDoW" }, dayOfWeek), h("div", { class: "K2BT_CalendarDayViewDoM" }, dayOfMonth)), h("div", { class: "K2BT_AlldayItems" }, allDayItems.map(item => {
      return this.getAllDayItemContents(item);
    }), this.alldayrows
      ? /* Add padding to all day items view */
        Array.from(Array(this.alldayrows - allDayItems.length).keys()).map(i => (h("div", { class: "K2BT_AlldayItem", style: { visibility: 'hidden' } }, 'Hidden: ' + i)))
      : ''), h("div", { class: "K2BT_CalendarDayContent" }, h("div", { class: "K2BT_CalendarDayViewContainerBaseGrid", ref: c => (this.baseGridControl = c), onMouseDown: this.onMouseDown.bind(this), onMouseMove: this.onMouseMove.bind(this), onMouseUp: this.onMouseUp.bind(this) }, hours.map(hour => (h("div", { class: "K2BT_CalendarDayHour" }, this.showhours ? h("div", { class: "K2BT_CalendarDayHourNumber" }, hour) : '')))), h("div", { class: itemsViewClasses }, items.map(item => {
      return this.getInDayItemContents(item, itemRows);
    })), h("div", { class: "K2BT_CalendarDayHourMarker", style: hourPositionStyle }))));
  }
  getAllDayItemContents(item) {
    var _a, _b;
    var classList = new Array('K2BT_AlldayItem');
    CalendarItem.addItemClasses(classList, item, this.currentDate);
    var calendar = (_a = this.calendars.filter(c => c.id === item.calendarId)[0]) !== null && _a !== void 0 ? _a : this.calendars[0];
    return (h("div", { class: classList.join(' '), onClick: () => this.onItemClicked(item) }, h("div", { class: "K2BT_AllDayItemDescription" }, item.description), h("k2bt-calendar-action-menu", { actions: item.actions, onActionClicked: e => {
        e.stopPropagation();
        this.onActionClicked(item, e.detail);
      } }), h("div", { class: (_b = 'K2BT_CalendarBackground ' + (calendar === null || calendar === void 0 ? void 0 : calendar.class)) !== null && _b !== void 0 ? _b : 'K2BT_Calendar0' })));
  }
  getInDayItemContents(item, itemRows) {
    var _a, _b;
    var offsetHours = (this.getBoundedDate(item.dateFrom).getTime() - this.getDateFrom().getTime()) / 1000 / 60 / 60;
    var lengthHours = (this.getBoundedDate(item.dateTo).getTime() - this.getBoundedDate(item.dateFrom).getTime()) / 1000 / 60 / 60;
    var row = itemRows.filter(r => r.indexOf(item) != -1)[0];
    var style = {
      top: (offsetHours / this.getAmountOfHours()) * 100 + '%',
      height: (lengthHours / this.getAmountOfHours()) * 100 + '%',
      width: null,
      left: null,
    };
    if (row.length > 1) {
      style.width = 'calc(' + 100 / row.length + '% - 2px)';
      style.left = row.indexOf(item) * (100 / row.length) + '%';
    }
    var classList = new Array('K2BT_CalendarDayItem');
    CalendarItem.addItemClasses(classList, item, this.currentDate);
    var calendar = (_a = this.calendars.filter(c => c.id === item.calendarId)[0]) !== null && _a !== void 0 ? _a : this.calendars[0];
    const periodString = DateUtils.formatItemDate(item.dateFrom) + '-' + DateUtils.formatItemDate(item.dateTo);
    return (h("div", { class: classList.join(' '), style: style, onClick: () => this.onItemClicked(item), title: item.description + '\n' + periodString }, h("div", { class: "K2BT_CalendarDayItemContent" }, h("div", { class: "K2BT_CalendarDayItemText" }, h("div", { class: "K2BT_CalendarDayItemHeader" }, h("div", { class: "K2BT_CalendarDayItemDescription" }, item.description)), h("div", { class: "K2BT_CalendarDayItemHourPeriod" }, periodString)), h("k2bt-calendar-action-menu", { actions: item.actions, onActionClicked: e => {
        e.stopPropagation();
        this.onActionClicked(item, e.detail);
      } })), h("div", { class: (_b = 'K2BT_CalendarBackground ' + (calendar === null || calendar === void 0 ? void 0 : calendar.class)) !== null && _b !== void 0 ? _b : 'K2BT_Calendar0' })));
  }
  getNonAllDayItems() {
    return this.calendars
      .map(c => c.items
      .filter(i => !i.allDay && CalendarItem.isInDay(i, this.getDateFrom(), this.getDateTo()))
      .map(i => {
      i.calendarId = c.id;
      return i;
    }))
      .reduce((i1, i2) => i1.concat(i2), []);
  }
  getAllDayItems() {
    return this.calendars
      .map(c => c.items
      .filter(i => i.allDay && CalendarItem.allDayItemIsInDay(i, this.getDay()))
      .map(i => {
      i.calendarId = c.id;
      return i;
    }))
      .reduce((i1, i2) => i1.concat(i2), []);
  }
  componentDidLoad() {
    if (this.readonly)
      document.addEventListener('mouseup', this.scopedfunction);
    this.intervalId = setInterval(function () {
      this.currentDate = new Date();
    }.bind(this), 1000 * 60 * 10); // Every 10 minutes
  }
  disconnectedCallback() {
    if (this.readonly)
      document.removeEventListener('mouseup', this.scopedfunction);
    clearInterval(this.intervalId);
  }
  sortIntoRows(items) {
    items = items.sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());
    const rows = [];
    for (const item of items) {
      // Check if it collides with one of the rows
      var overlaps = false;
      for (const row of rows) {
        for (const columnItem of row) {
          if (CalendarItem.calendarItemsCollide(item, columnItem)) {
            overlaps = true;
            break;
          }
        }
        if (overlaps) {
          row.push(item);
          break;
        }
      }
      if (!overlaps) {
        rows.push([item]);
      }
    }
    const result = [];
    for (let row of rows) {
      result.push(row.sort((i1, _i2) => (i1.isDraft ? 1 : -1)));
    }
    return result;
  }
  getDay() {
    return new Date(this.year, this.month, this.day, 0, 0, 0, 0);
  }
};

const K2btCalendarFullView$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.newDraftCreated = createEvent(this, "newDraftCreated", 7);
    this.draftCancelled = createEvent(this, "draftCancelled", 7);
    this.itemClicked = createEvent(this, "itemClicked", 7);
    this.fetchAppointmentsForPeriod = createEvent(this, "fetchAppointmentsForPeriod", 7);
    this.showheader = true;
    this.showcalendarnavigation = true;
    this.showperiodnavigation = true;
    this.showviewselection = true;
    this.showcalendarselection = true;
    this.starthour = 8;
    this.endhour = 20;
    this.readonly = true;
    this.todaycaption = 'Today';
    this.daycaption = 'Day';
    this.weekcaption = 'Week';
    this.workweekcaption = 'Work Week';
    this.monthcaption = 'Month';
    this.yearcaption = 'Year';
    this.seemorecaption = 'See more';
    this.itemsperdayinmonthview = 5;
    this.dayviewenabled = true;
    this.weekviewenabled = true;
    this.workweekviewenabled = true;
    this.monthviewenabled = true;
    this.weekstartday = WeekStartDay.Sunday;
    this.calendars = [];
    this.selectedCalendars = null;
    this.advancedSelectorOpen = false;
  }
  setPeriodAppointments(parm) {
    if (this.selectedCalendars == null) {
      this.selectedCalendars = parm.calendars.map(c => c.id);
    }
    this.clearAppointmentsInRange(parm.dateFrom, parm.dateTo);
    this.pruneFarawayItems(parm.dateFrom, parm.dateTo);
    this.mergeCalendars(parm.calendars);
    this.assignCalendarMissingClasses(this.calendars);
    this.calendars = [].concat(this.calendars);
  }
  pruneFarawayItems(dateFrom, dateTo) {
    for (let calendar of this.calendars) {
      if (calendar.items.length > K2btCalendarFullView$1.MAX_STORED_ITEMS) {
        calendar.items.sort((i1, i2) => this.getDistance(i1, dateFrom, dateTo) - this.getDistance(i2, dateFrom, dateTo));
        calendar.items = calendar.items.slice(0, K2btCalendarFullView$1.MAX_STORED_ITEMS);
      }
    }
  }
  // Item is assumed to be outside range, only check relevant bounds
  getDistance(i, dateFrom, dateTo) {
    return Math.min(Math.abs(i.dateTo.getTime() - dateFrom.getTime()), Math.abs(i.dateFrom.getTime() - dateTo.getTime()));
  }
  assignCalendarMissingClasses(calendars) {
    for (var i = 0; i < calendars.length; i++) {
      if (!calendars[i].class)
        calendars[i].class = 'K2BT_Calendar' + i;
    }
  }
  mergeCalendars(appointments) {
    for (let calendar of appointments) {
      var filteredCalendars = this.calendars.filter(c => c.id == calendar.id);
      if (filteredCalendars.length > 0) {
        filteredCalendars[0].items = filteredCalendars[0].items.concat(calendar.items);
      }
      else {
        this.calendars.push(calendar);
      }
    }
  }
  // dateFrom and dateTo should be treated as local date only values (no time)
  clearAppointmentsInRange(dateFrom, dateTo) {
    var lowerBound = dateFrom;
    var upperBound = dateTo;
    this.calendars = this.calendars.map(c => {
      return {
        id: c.id,
        description: c.description,
        class: c.class,
        items: c.items.filter(i => !DateUtils.datePeriodInBound(lowerBound, upperBound, DateUtils.getDateAtMidnight(i.dateFrom), DateUtils.getDateAtMidnight(i.dateTo))),
      };
    });
  }
  componentWillLoad() {
    this.currentview = CalendarPeriodView.Week;
    this.goToToday();
  }
  render() {
    return (h("div", { class: "K2BT_CalendarContainer" }, this.getHeader(), h("div", { class: "K2BT_CalendarFullViewContent" }, this.getCalendarFullViewContent())));
  }
  getHeader() {
    return this.showheader ? (h("div", { class: "K2BT_CalendarFullViewHeader" }, this.getTodayButton(), this.getPreviousNextButtons(), this.getContextTitle(), this.getCalendarSelectionCombobox(), this.getPeriodSelectionCombobox())) : ('');
  }
  componentDidRender() { }
  getCalendarFullViewContent() {
    switch (this.currentview) {
      case CalendarPeriodView.Day:
        return (h("k2bt-calendar-day-view", { year: this.dateFrom.getFullYear(), month: this.dateFrom.getMonth(), day: this.dateFrom.getDate(), startHour: this.starthour, endHour: this.endhour, readonly: this.readonly, calendars: this.filterSelectedCalendars(this.calendars), showhours: true, alldayrows: 0, ref: c => (this.dayView = c) }));
      case CalendarPeriodView.Week:
      case CalendarPeriodView.WorkWeek:
        return (h("k2bt-calendar-period-view", { dateFrom: this.dateFrom, dateTo: this.dateTo, startHour: this.starthour, endHour: this.endhour, readonly: this.readonly, calendars: this.filterSelectedCalendars(this.calendars), ref: c => (this.weekView = c) }));
      case CalendarPeriodView.Month:
        return (h("k2bt-calendar-month-view", { year: this.dateFrom.getFullYear(), month: this.dateFrom.getMonth() + 1, readonly: this.readonly, calendars: this.filterSelectedCalendars(this.calendars), seemorecaption: this.seemorecaption, itemsperday: this.itemsperdayinmonthview, weekstartday: this.weekstartday,
          //@ts-ignore
          onDayClicked: ev => this.dayClicked(ev.detail.date), ref: c => (this.monthView = c) }));
    }
  }
  filterSelectedCalendars(calendars) {
    return calendars.filter(c => this.selectedCalendars.indexOf(c.id) !== -1);
  }
  calendarSelectionChanged() {
    this.selectedCalendars = this.calendarCombo.value;
  }
  getCalendarSelectionCombobox() {
    if (this.showcalendarselection) {
      var values = this.getAvailableCalendars();
      if (values.length > 1) {
        return (h("div", { class: "K2BT_CalendarCalendarSelectionCombobox" }, h("k2bt-enhancedcombo", { onChange: () => this.calendarSelectionChanged(), includesearch: false, showselectionastags: false, enableadditem: false, includeemptyitem: false, headermaxvisibleitems: 1, values: values, value: this.selectedCalendars, maxSelectionSize: 0, ref: c => (this.calendarCombo = c) })));
      }
    }
    return '';
  }
  getAvailableCalendars() {
    return this.calendars.map(c => {
      return { value: c.id, description: c.description, badgeClass: c.class };
    });
  }
  getPeriodSelectionCombobox() {
    if (this.showviewselection) {
      var values = this.getAvailableContentViews();
      if (values.length > 1) {
        var value = [this.currentview];
        return (h("div", { class: "K2BT_CalendarPeriodSelectionCombobox" }, h("k2bt-enhancedcombo", { onChange: this.periodSelectionChanged.bind(this), includesearch: false, enableadditem: false, includeemptyitem: false, values: values, value: value, ref: c => (this.periodCombo = c) })));
      }
    }
    return '';
  }
  getAvailableContentViews() {
    var values = [];
    if (this.dayviewenabled)
      values.push({
        value: CalendarPeriodView.Day,
        description: this.daycaption,
      });
    if (this.weekviewenabled)
      values.push({
        value: CalendarPeriodView.Week,
        description: this.weekcaption,
      });
    if (this.workweekviewenabled)
      values.push({
        value: CalendarPeriodView.WorkWeek,
        description: this.workweekcaption,
      });
    if (this.monthviewenabled)
      values.push({
        value: CalendarPeriodView.Month,
        description: this.monthcaption,
      });
    return values;
  }
  getContextTitle() {
    return h("div", { class: "K2BT_CalendarHeaderTitle" }, DateUtils.getMonthName(this.dateFrom.getMonth()) + ' ' + this.dateFrom.getFullYear());
  }
  periodSelectionChanged() {
    this.switchView(CalendarPeriodView[EnumUtils.getEnumKeyByEnumValue(CalendarPeriodView, this.periodCombo.value[0])]);
  }
  switchView(view) {
    this.currentview = view;
    this.goToDate(this.dateFrom);
  }
  cancelDraft() {
    var _a;
    (_a = this.dayView) === null || _a === void 0 ? void 0 : _a.cancelDraft();
    if (this.weekView)
      this.weekView.cancelDraft();
  }
  getPreviousNextButtons() {
    return this.showperiodnavigation ? (h("div", { class: "K2BT_CalendarPeriodButtons" }, h("div", { class: "K2BT_CalendarPreviousPeriodButton", onClick: this.goToPreviousPeriod.bind(this) }), h("div", { class: "K2BT_CalendarNextPeriodButton", onClick: this.goToNextPeriod.bind(this) }))) : ('');
  }
  goToNextPeriod() {
    var d = new Date(this.dateFrom.getTime());
    switch (this.currentview) {
      case CalendarPeriodView.Day:
        d.setDate(d.getDate() + 1);
        break;
      case CalendarPeriodView.Week:
      case CalendarPeriodView.WorkWeek:
        d.setDate(d.getDate() + 7);
        break;
      case CalendarPeriodView.Month:
        d = new Date(d.getFullYear(), d.getMonth() + 1, 1);
        break;
    }
    this.goToDate(d);
  }
  goToPreviousPeriod() {
    var d = new Date(this.dateFrom.getTime());
    switch (this.currentview) {
      case CalendarPeriodView.Day:
        d.setDate(d.getDate() - 1);
        break;
      case CalendarPeriodView.Week:
      case CalendarPeriodView.WorkWeek:
        d.setDate(d.getDate() - 7);
        break;
      case CalendarPeriodView.Month:
        d = new Date(d.getFullYear(), d.getMonth() - 1, 1);
        break;
    }
    this.goToDate(d);
  }
  closeMenu(ev) {
    if (this.advancedSelectorOpen && this.quickDaySelectorContainer && !this.quickDaySelectorContainer.contains(ev.target))
      this.advancedSelectorOpen = false;
  }
  getTodayButton() {
    return this.showcalendarnavigation ? (h("div", { class: "K2B_CalendarQuickDaySelectorContainer", ref: c => (this.quickDaySelectorContainer = c) }, h("div", { class: "K2B_CalendarQuickDaySelector" }, h("div", { class: "K2BT_CalendarTodayButton", onClick: this.goToToday.bind(this) }, this.todaycaption), h("div", { class: "K2BT_CalendarAdvancedSelectorToggle", onClick: () => (this.advancedSelectorOpen = !this.advancedSelectorOpen) })), this.getAdvancedSelectorContents())) : ('');
  }
  getAdvancedSelectorContents() {
    return this.advancedSelectorOpen ? (h("div", { class: "K2BT_CalendarAdvancedSelectorContents" }, h("k2bt-calendar-day-in-month-picker", { selectedDate: this.dateFrom, weekstartday: this.weekstartday, onDayClicked: e => {
        this.advancedSelectorOpen = false;
        this.goToDate(e.detail);
      } }))) : ('');
  }
  dayClicked(d) {
    if (this.dayviewenabled) {
      this.switchView(CalendarPeriodView.Day);
      this.goToDate(d);
    }
  }
  goToToday() {
    this.goToDate(new Date());
  }
  goToDate(date) {
    var originalDateFrom = this.dateFrom ? new Date(this.dateFrom.getTime()) : null;
    var originalDateTo = this.dateTo ? new Date(this.dateTo.getTime()) : null;
    switch (this.currentview) {
      case CalendarPeriodView.Day:
        this.dateFrom = date;
        this.dateTo = date;
        break;
      case CalendarPeriodView.Week:
        var d = new Date(date.getTime());
        if (this.weekstartday === WeekStartDay.Sunday) {
          d.setDate(d.getDate() - d.getDay());
        }
        else {
          d.setDate(d.getDate() - d.getDay() + 1);
        }
        this.dateFrom = d;
        d = new Date(date.getTime());
        if (this.weekstartday === WeekStartDay.Sunday) {
          d.setDate(d.getDate() - d.getDay() + 7);
        }
        else {
          d.setDate(d.getDate() - d.getDay() + 8);
        }
        this.dateTo = d;
        break;
      case CalendarPeriodView.WorkWeek:
        d = new Date(date.getTime());
        d.setDate(d.getDate() - d.getDay() + 1);
        this.dateFrom = d;
        d = new Date(date.getTime());
        d.setDate(d.getDate() - d.getDay() + 6);
        this.dateTo = d;
        break;
      case CalendarPeriodView.Month:
        this.dateFrom = new Date(date.getFullYear(), date.getMonth(), 1);
        this.dateTo = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        break;
    }
    if (originalDateFrom != this.dateFrom || originalDateTo != this.dateTo) {
      this.fetchAppointmentsForPeriod.emit({
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
      });
    }
  }
};
K2btCalendarFullView$1.MAX_STORED_ITEMS = 300;

const K2btCalendarMonthView$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.dayClicked = createEvent(this, "dayClicked", 7);
    this.itemClicked = createEvent(this, "itemClicked", 7);
    this.actionClicked = createEvent(this, "actionClicked", 7);
    this.readonly = true;
    this.calendars = [];
    this.seemorecaption = 'See all';
    this.itemsperday = 5;
    this.weekstartday = WeekStartDay.Sunday;
    this.currentDate = new Date();
    this.intervalId = null;
  }
  onItemClicked(item) {
    this.itemClicked.emit({ item: item });
  }
  onActionClicked(item, actionId) {
    this.actionClicked.emit({ item: item, action: actionId });
  }
  render() {
    var weeks = DateUtils.getWeeksOfMonth(this.year, this.month, this.weekstartday);
    const firstDayOfMonth = new Date(this.year, this.month - 1, 1);
    const lastDayOfMonth = new Date(this.year, this.month, 0);
    return (h("div", { class: "K2BT_CalendarMonthView" }, h("div", { class: "K2BT_CalendarMonthDayNames" }, weeks[0]
      .map(d => d.getDay())
      .map(d => (h("div", { class: "K2BT_CalendarMonthViewDayName" }, DateUtils.getDayOfWeekShortStringFromDayNumber(d))))), weeks.map(w => {
      return (h("div", { class: "K2BT_CalendarMonthViewWeek" }, w.map(d => {
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var filteredAppointments = this.getFilteredAppointments(year, month, day);
        var visibleAppointments = this.itemsperday > 0 ? filteredAppointments.slice(0, this.itemsperday) : filteredAppointments;
        var dayClasses = this.getClassesForDayContainer(d, firstDayOfMonth, lastDayOfMonth);
        var dayNumberContainerClasses = this.getClassesForNumberContainer(year, month, day);
        visibleAppointments.sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());
        return (h("div", { class: dayClasses, onClick: () => this.onDayClicked(d) }, h("div", { class: "K2BT_CalendarMonthDayComponent" }, h("div", { class: dayNumberContainerClasses }, d.getDate()), h("div", { class: "K2BT_CalendarMonthViewDayAppointmentList" }, visibleAppointments.map(item => {
          var _a;
          var calendar = (_a = this.calendars.filter(c => c.id === item.calendarId)[0]) !== null && _a !== void 0 ? _a : this.calendars[0];
          var classList = new Array('K2BT_CalendarMonthViewDayAppointmentBadge');
          classList.push(calendar.class);
          CalendarItem.addItemClasses(classList, item, this.currentDate);
          const periodString = item.allDay ? '' : DateUtils.formatItemDate(item.dateFrom) + '-' + DateUtils.formatItemDate(item.dateTo);
          return (h("div", { class: "K2BT_CalendarMonthViewDayAppointment", onClick: e => {
              e.stopPropagation();
              this.onItemClicked(item);
            }, title: item.description + '\n' + periodString }, h("div", { class: classList.join(' ') }), h("div", { class: "K2BT_CalendarMonthViewDayAppointmentPeriod" }, periodString), h("div", { class: "K2BT_CalendarMonthViewDayAppointmentDescription" }, item.description), h("k2bt-calendar-action-menu", { actions: item.actions, onActionClicked: e => this.onActionClicked(item, e.detail) })));
        }), visibleAppointments.length < filteredAppointments.length ? h("div", { class: "K2BT_CalendarMonthViewDaySeeMore" }, this.seemorecaption) : ''))));
      })));
    })));
  }
  getClassesForNumberContainer(year, month, day) {
    var dayNumberContainerClasses = 'K2BT_CalendarMonthViewDayNumber';
    if (this.currentDate.getFullYear() === year && this.currentDate.getMonth() === month && this.currentDate.getDate() === day)
      dayNumberContainerClasses += ' K2BT_CalendarDayViewToday';
    return dayNumberContainerClasses;
  }
  getClassesForDayContainer(d, firstDayOfMonth, lastDayOfMonth) {
    var dayClasses = 'K2BT_CalendarMonthViewDay';
    if (!(d >= firstDayOfMonth && d <= lastDayOfMonth)) {
      dayClasses += ' K2BT_CalendarMonthViewDayOtherMonth';
    }
    if (d < new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate())) {
      dayClasses += ' K2BT_CalendarMonthViewDayPast';
    }
    return dayClasses;
  }
  getFilteredAppointments(year, month, day) {
    return this.calendars
      .map(c => c.items
      .filter(i => (i.dateFrom.getFullYear() == year && i.dateFrom.getMonth() == month && i.dateFrom.getDate() == day) ||
      (i.dateTo.getFullYear() == year && i.dateTo.getMonth() == month && i.dateTo.getDate() == day))
      .map(i => {
      i.calendarId = c.id;
      return i;
    }))
      .reduce((i1, i2) => i1.concat(i2), []);
  }
  componentDidLoad() {
    this.intervalId = setInterval(function () {
      this.currentDate = new Date();
    }.bind(this), 1000 * 60 * 10); // Every 10 minutes
  }
  disconnectedCallback() {
    clearInterval(this.intervalId);
  }
  onDayClicked(day) {
    this.dayClicked.emit({ date: day });
  }
};

const K2btCalendarPeriodView$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.newDraftCreated = createEvent(this, "newDraftCreated", 7);
    this.draftCanceled = createEvent(this, "draftCanceled", 7);
    this.itemClicked = createEvent(this, "itemClicked", 7);
    this.calendars = [];
    this.readonly = true;
    this.draftItemDescription = '(no title)';
    this.draftItem = null;
    this.dayComponents = [];
  }
  onDayViewDraftCancelled() { }
  async onCreatingNewDraft(event) {
    for (let d of this.dayComponents) {
      if (event.target != d)
        await d.cancelDraft();
    }
  }
  async cancelDraft() {
    for (let d of this.dayComponents) {
      await d.cancelDraft();
    }
  }
  render() {
    var days = [];
    var d = new Date(this.dateFrom.getTime());
    while (d < this.dateTo) {
      days.push({ year: d.getFullYear(), month: d.getMonth(), day: d.getDate() });
      d.setDate(d.getDate() + 1);
    }
    this.dayComponents = [];
    var maxDayItemsInDate = Math.max(...days
      .map(day => new Date(day.year, day.month, day.day, 0, 0, 0, 0))
      .map(date => this.calendars.map(c => c.items.filter(i => i.allDay && CalendarItem.allDayItemIsInDay(i, date))).reduce((i1, i2) => i1.concat(i2), []).length));
    var first = true;
    return (h("div", { class: "K2BT_CalendarPeriod" }, days.map(d => {
      var showhours = first;
      first = false;
      return (h("div", { class: "K2BT_CalendarPeriodDayContainer" }, h("k2bt-calendar-day-view", { year: d.year, month: d.month, day: d.day, startHour: this.startHour, endHour: this.endHour, readonly: this.readonly, calendars: this.calendars, showhours: showhours, ref: c => this.dayComponents.push(c), alldayrows: maxDayItemsInDate, onDraftCancelled: this.onDayViewDraftCancelled.bind(this), onCreatingNewDraft: this.onCreatingNewDraft.bind(this) })));
    })));
  }
};

const k2btEditCollectionCss = ":host{display:block}.K2BT_EditCollectionItemDelete::after{cursor:pointer}";

const K2btEditCollection$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.inputEvent = createEvent(this, "input", 7);
    this.changeEvent = createEvent(this, "change", 7);
    this.value = [];
    this.maxSelectionSize = 0;
    this.datatype = K2btEditCollection$1.DATATYPE_CHARACTER;
    // used only for character
    this.length = 10;
    // used only for numerics
    this.integers = 5;
    // used only for numerics
    this.decimals = 2;
    this.enabled = true;
    this.inputclass = '';
    this.readonlyclass = '';
    this.invitemessage = '';
    this.itemInputs = [];
    this._triggerChangeDebouncer = null;
  }
  removeItem(index) {
    this.value = this.value.filter((_item, i) => i != index);
    this.triggerChangeEvent();
  }
  onInput(index, _ev) {
    if (index == this.value.length && this.itemInputs[index].value !== '') {
      this.value = this.value.concat(['']);
    }
    this.value[index] = this.itemInputs[index].value;
    _ev.stopPropagation();
    this.inputEvent.emit(null);
  }
  triggerChangeEvent() {
    if (this._triggerChangeDebouncer != null)
      clearTimeout(this._triggerChangeDebouncer);
    this._triggerChangeDebouncer = setTimeout(() => {
      this.changeEvent.emit(null);
    }, 200);
  }
  render() {
    this.itemInputs = [];
    var styleObj = {};
    var maxLength = 0;
    if (this.datatype == K2btEditCollection$1.DATATYPE_NUMERIC) {
      //@ts-ignore
      styleObj.textAlign = 'right';
      maxLength = this.integers + this.decimals + (this.decimals > 0 ? 1 : 0);
    }
    else {
      maxLength = this.length;
    }
    //@ts-ignore
    styleObj.width = maxLength + 'ch';
    const displayedvalues = this.maxSelectionSize == 0 || this.value.length < this.maxSelectionSize ? this.value.concat(['']) : this.value;
    return (h(Host, null, h("div", { class: "K2BT_EditCollection", style: !this.enabled ? {} : { display: 'none' } }, !this.enabled
      ? this.value.map(v => (h("div", { class: "K2BT_EditCollectionItem" }, h("p", { class: "form-control-static" }, h("span", { class: this.readonlyclass, "data-gx-readonly": "" }, v)))))
      : ''), h("div", { class: "K2BT_EditCollection", style: this.enabled ? {} : { display: 'none' } }, displayedvalues.map((v, index) => (h("div", { class: "K2BT_EditCollectionItem" }, h("input", { class: 'form-control K2BT_EditCollectionItemInput ' + this.inputclass, type: "text", value: v, style: styleObj, maxLength: maxLength, onInput: ev => this.onInput(index, ev), ref: c => (this.itemInputs[index] = c), onChange: () => this.triggerChangeEvent(), placeholder: this.invitemessage }), h("span", { class: "K2BT_EditCollectionItemDelete", onClick: () => this.removeItem(index) })))))));
  }
  static get style() { return k2btEditCollectionCss; }
};
K2btEditCollection$1.DATATYPE_CHARACTER = 'CHAR';
K2btEditCollection$1.DATATYPE_NUMERIC = 'NUMERIC';

const k2btEnhancedcomboCss = ":host{display:block}k2bt-enhancedcombo:focus-visible{outline:none}.K2BTEnhancedComboContentsOpen{display:flex;flex-direction:column;position:absolute}.K2BTEnhancedComboItems{max-height:300px;overflow:auto;scrollbar-width:thin;scrollbar-color:#d7d7d7 transparent}.K2BTEnhancedComboItems::-webkit-scrollbar{width:6px}.K2BTEnhancedComboItems::-webkit-scrollbar-thumb{background-color:#d7d7d7;border:1px solid transparent;cursor:pointer}.K2BTEnhancedComboContentsClosed{display:none}.K2BTEnhancedComboItem{display:flex;flex-direction:row;align-items:center}.K2BTEnhancedComboItem:hover{cursor:pointer}.K2BTEnhancedComboItem_TextContainer{display:flex;flex-grow:1}.K2BTEnhancedComboSubtitle{font-size:12px}.K2BTEnhancedComboIcon{width:30px;height:30px;object-fit:cover;margin-right:4px}.K2BTEnhancedComboIconInvisible{visibility:hidden}.K2BTEnhancedComboNoItemsFound{width:100%;text-align:center;margin-top:40px;margin-bottom:40px}.K2BTEnhancedComboTrailingText{flex-grow:0}.K2BT_EnhancedComboCheckbox{margin-right:8px;margin-top:6px;pointer-events:none}.K2BTEnhancedComboDisabled{cursor:normal;opacity:0.8}";

const K2btEnhancedcombo$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.selectionErrorEvent = createEvent(this, "selectionError", 7);
    this.focusEvent = createEvent(this, "focus", 7);
    this.inputEvent = createEvent(this, "input", 7);
    this.changeEvent = createEvent(this, "change", 7);
    this.searchChangedEvent = createEvent(this, "searchChanged", 7);
    this.newRecordClickedEvent = createEvent(this, "newRecordClicked", 7);
    this.value = null;
    this.includesearch = true;
    this.includeemptyitem = true;
    this.emptyitemtext = '(none)';
    this.noresultsfoundtext = 'No results found';
    this.enableadditem = true;
    this.additemcaption = 'New record';
    this.clearselectioncaption = 'Clear selection';
    this.selectallcaption = 'Clear selection';
    this.searchfieldplaceholder = 'Search';
    this.searchvalue = '';
    this.enabled = true;
    this.maxSelectionSize = 1;
    this.headermaxvisibleitems = 3;
    this.readonlyclass = '';
    this.showselectionastags = false;
    this.showiconsintags = true;
    this.displayaslist = false;
    this.enableclearselectionaction = false;
    this.enableselectallaction = false;
    this.activeElementValue = null;
    this.container = null;
    this.selectedElement = null;
    this.searchfield = null;
    this.listContainer = null;
    this._keyboardSearchPrefix = '';
    this._keyboardSearchLastKeystroke = null;
  }
  isCollection() {
    return this.maxSelectionSize != 1;
  }
  processKeydown(event) {
    if (event.key == 'Escape') {
      this.resetPrefixSearch();
      this.open = false;
      event.stopPropagation();
    }
    else if (event.key == 'Enter') {
      this.resetPrefixSearch();
      this.open = !this.open;
      event.stopPropagation();
    }
    else if (this.isCollection()) {
      this.processKeydownForCollection(event);
    }
    else {
      this.processKeydownSingleSelection(event);
    }
  }
  processKeydownForCollection(event) {
    var pos;
    if (this.open) {
      if (event.key == 'ArrowDown') {
        this.processArrowDownForCollection(event, pos);
      }
      else if (event.key == 'ArrowUp') {
        this.processArrowUpForCollection(event, pos);
      }
      else if (event.key === ' ' || event.key === 'Spacebar') {
        this.processSpacebarForCollection(event);
      }
      else {
        this.processCharacterForCollection(event);
      }
    }
  }
  processCharacterForCollection(event) {
    var key = event.key;
    // Check if the key pressed maps to a single character
    if (key.length == 1) {
      if (document.activeElement != this.searchfield) {
        var currentDate = Date.now();
        if (this._keyboardSearchLastKeystroke == null || currentDate - this._keyboardSearchLastKeystroke > 3000) {
          this._keyboardSearchPrefix = '';
        }
        this._keyboardSearchPrefix = this._keyboardSearchPrefix + key;
        var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
        var selectedValue = currentValues.find(v => v.description.toLowerCase().indexOf(this._keyboardSearchPrefix.toLowerCase()) == 0);
        if (selectedValue != null) {
          this.activeElementValue = selectedValue.value.trim();
        }
        this._keyboardSearchLastKeystroke = currentDate;
      }
    }
  }
  processSpacebarForCollection(event) {
    var _a;
    if (((_a = this.activeElementValue) !== null && _a !== void 0 ? _a : '') !== '') {
      this.setValueWithoutClosing(this.activeElementValue, false);
      event.stopPropagation();
      event.preventDefault();
    }
  }
  processArrowUpForCollection(event, pos) {
    this.resetPrefixSearch();
    event.stopPropagation();
    event.preventDefault();
    //up key
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      pos = currentValues.findIndex(v => v.value.trim() == this.activeElementValue);
      if (pos == -1) {
        pos = currentValues.length - 1;
      }
      else {
        pos = (((pos - 1) % currentValues.length) + currentValues.length) % currentValues.length;
      }
      this.activeElementValue = currentValues[pos].value.trim();
    }
  }
  processArrowDownForCollection(event, pos) {
    this.resetPrefixSearch();
    event.stopPropagation();
    event.preventDefault();
    //down key
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      pos = currentValues.findIndex(v => v.value.trim() == this.activeElementValue);
      if (pos == -1) {
        pos = 0;
      }
      else {
        pos = (((pos + 1) % currentValues.length) + currentValues.length) % currentValues.length;
      }
      this.activeElementValue = currentValues[pos].value.trim();
    }
  }
  processKeydownSingleSelection(event) {
    if (event.key == 'ArrowDown') {
      this.processArrowDownForSingleSelection(event);
    }
    else if (event.key == 'ArrowUp') {
      this.processArrowUpForSingleSelection(event);
    }
    else {
      this.processCharacterForSingleSelection(event);
    }
  }
  processCharacterForSingleSelection(event) {
    var key = event.key;
    // Check if the key pressed maps to a single character
    if (key.length == 1) {
      if (document.activeElement != this.searchfield) {
        var currentDate = Date.now();
        if (this._keyboardSearchLastKeystroke == null || currentDate - this._keyboardSearchLastKeystroke > 3000) {
          this._keyboardSearchPrefix = '';
        }
        this._keyboardSearchPrefix = this._keyboardSearchPrefix + key;
        var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
        var selectedValue = currentValues.find(v => v.description.toLowerCase().indexOf(this._keyboardSearchPrefix.toLowerCase()) == 0);
        if (selectedValue != null) {
          this.setValueWithoutClosing(selectedValue.value.trim(), false);
        }
        this._keyboardSearchLastKeystroke = currentDate;
      }
    }
  }
  processArrowUpForSingleSelection(event) {
    this.resetPrefixSearch();
    event.stopPropagation();
    event.preventDefault();
    //up key
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      var pos = currentValues.findIndex(v => v.value.trim() == this.value[0].trim());
      if (pos == -1) {
        this.setValueWithoutClosing(currentValues[currentValues.length - 1].value.trim(), false);
      }
      else {
        pos = (((pos - 1) % currentValues.length) + currentValues.length) % currentValues.length;
        this.setValueWithoutClosing(currentValues[pos].value.trim(), false);
      }
    }
  }
  processArrowDownForSingleSelection(event) {
    this.resetPrefixSearch();
    event.stopPropagation();
    event.preventDefault();
    //down key
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      var pos = currentValues.findIndex(v => v.value.trim() == this.value[0].trim());
      if (pos == -1) {
        this.setValueWithoutClosing(currentValues[0].value.trim(), false);
      }
      else {
        pos = (((pos + 1) % currentValues.length) + currentValues.length) % currentValues.length;
        this.setValueWithoutClosing(currentValues[pos].value.trim(), false);
      }
    }
  }
  onFocusIn() {
    this.resetPrefixSearch();
    this.focusEvent.emit();
  }
  resetPrefixSearch() {
    this._keyboardSearchLastKeystroke = null;
  }
  closeMenu(ev) {
    this.resetPrefixSearch();
    if (this.open && this.container && !this.container.contains(ev.target))
      this.open = false;
  }
  getHeaderContent() {
    if (this.value == null)
      return this.emptyitemtext;
    else {
      var vals = this.getAtomicValues().filter(value => this.valueIsSelected(value));
      if (vals.length > 0) {
        if (this.isCollection() && this.showselectionastags) {
          return this.getHeaderTagsContent(vals);
        }
        else {
          if (vals.length > this.headermaxvisibleitems)
            return [
              vals
                .slice(0, this.headermaxvisibleitems)
                .map(v => this.getSelectedItemSpan(v))
                .reduce((prev, curr) => [prev, h("span", null, ",\u00A0"), curr]),
              h("span", null, "\u00A0(+", vals.length - this.headermaxvisibleitems, ")"),
            ];
          else
            return vals.map(v => this.getSelectedItemSpan(v)).reduce((prev, curr) => [prev, h("span", null, ",\u00A0"), curr]);
        }
      }
      else
        return this.emptyitemtext;
    }
  }
  getSelectedItemSpan(v) {
    return h("span", { class: "K2BT_EnhancedControlInfoSelectedValue" }, v.description);
  }
  getReadonlyContent() {
    if (this.value == null)
      return this.emptyitemtext;
    else {
      var vals = this.getAtomicValues().filter(value => this.valueIsSelected(value));
      if (vals.length > 0)
        return vals.map(v => v.description).join(', ');
      else
        return this.emptyitemtext;
    }
  }
  getHeaderTagsContent(vals) {
    var containsIcons = ControlInfoValue.containsIcons(this.getAtomicValues());
    return vals.map(v => {
      return (h("div", { class: "K2BT_EnhancedComboHeaderTag" }, this.showiconsintags && containsIcons && v.imageUrl !== '' ? h("img", { class: "K2BT_EnhancedComboTagIcon", src: v.imageUrl }) : '', h("span", { class: "K2BT_EnhancedComboHeaderTagDescription" }, v.description), h("span", { class: "K2BT_EnhancedComboHeaderTagDelete", onClick: ev => {
          ev.cancelBubble = true;
          this.setValueWithoutClosing(v.value, false);
        } })));
    });
  }
  valueIsSelected(value) {
    return this.value.filter(v => value.value.trim() == v.toString().trim()).length > 0;
  }
  toggleContentVisibilty() {
    this.resetPrefixSearch();
    this.open = !this.open;
  }
  getRawValues() {
    var result;
    if (this.values == null) {
      result = [];
    }
    else if (typeof this.values === 'string') {
      if (this.values == '')
        result = [];
      else
        result = JSON.parse(this.values);
    }
    else {
      result = [...this.values];
    }
    if (this.includeemptyitem && !this.isCollection()) {
      result.unshift({
        value: '',
        description: this.emptyitemtext,
        imageUrl: '',
        detail: '',
        trailingText: '',
        badgeClass: '',
        items: [],
      });
    }
    return result;
  }
  getFilteredValues() {
    var result = this.getRawValues();
    if (this.includesearch && this.searchvalue != '')
      result = this.getFilteredValues_impl(result);
    return result;
  }
  getFilteredValues_impl(origin) {
    var result = [];
    if (origin != undefined) {
      for (let cv of origin) {
        if (cv.description.toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase()) != -1 ||
          cv.detail.toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase()) != -1 ||
          cv.trailingText.toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase()) != -1) {
          result = result.concat(cv);
        }
        else {
          // Check if child items must be added
          var filteredChildren = this.getFilteredValues_impl(cv.items);
          if (filteredChildren.length > 0) {
            var cv2 = Object.assign({}, cv);
            cv2.items = filteredChildren;
            result = result.concat(cv2);
          }
        }
      }
    }
    return result;
  }
  setValue(value) {
    this.setValueWithoutClosing(value, true);
    this.open = false;
  }
  setValueWithoutClosing(value, triggerChangeEventImmediately) {
    if (this.isCollection()) {
      if (this.value.filter(v => v.toString().trim() === value.toString().trim()).length === 0) {
        if (!this.selectionIsFull())
          this.value = this.value.concat([value]);
        else {
          this.errorCode = K2btEnhancedcombo$1.ERROR_SELECTION_FULL;
          this.selectionErrorEvent.emit({});
        }
      }
      else
        this.value = this.value.filter(v => v.toString().trim() !== value.toString().trim());
    }
    else {
      this.value = [value];
    }
    if (this.setValueDebouncer) {
      clearTimeout(this.setValueDebouncer);
      this.setValueDebouncer = null;
    }
    if (triggerChangeEventImmediately) {
      this.emitChangedEvents(value);
    }
    else {
      this.setValueDebouncer = setTimeout((() => {
        this.setValueDebouncer = null;
        this.emitChangedEvents(value);
      }).bind(this), 200);
    }
  }
  emitChangedEvents(value) {
    this.inputEvent.emit();
    this.changeEvent.emit(value);
  }
  changeSearchValue(value) {
    this.searchvalue = value;
    this.searchChangedEvent.emit({ value });
  }
  onIncludeNewRecordClick() {
    this.open = false;
    this.newRecordClickedEvent.emit(null);
  }
  render() {
    this.selectedElement = null;
    var listClass = '';
    if (!this.displayaslist)
      listClass = this.open ? 'K2BTEnhancedComboContentsOpen' : 'K2BTEnhancedComboContentsClosed';
    else
      listClass = 'K2BTEnhancedListContents';
    return (h("div", null, h("p", { class: "form-control-static", style: this.enabled ? { display: 'none' } : {} }, h("span", { class: this.readonlyclass, "data-gx-readonly": "" }, this.getReadonlyContent())), h("div", { tabindex: "0", class: "K2BTEnhancedCombo", ref: node => (this.container = node), style: !this.enabled ? { display: 'none' } : {} }, this.addHeaderIfNecessary(), h("div", { class: listClass, ref: c => (this.listContainer = c) }, this.includesearch ? (h("input", { type: "text", class: "form-control K2BTEnhancedComboSearchInput", ref: c => (this.searchfield = c), onInput: event => {
        this.changeSearchValue(event.target.value);
        event.stopPropagation();
      }, onChange: event => event.stopPropagation(), placeholder: this.searchfieldplaceholder })) : (''), this.getCollectionActionsHeader(), h("div", { class: "K2BTEnhancedComboItems" }, this.getComboContent()), this.enableadditem ? (h("span", { class: "K2BTEnhancedComboNewAction", onClick: () => this.onIncludeNewRecordClick() }, this.additemcaption)) : ('')))));
  }
  getCollectionActionsHeader() {
    return this.enableselectallaction || this.enableclearselectionaction ? (h("div", { class: "K2BT_EnhancedComboCollectionActions" }, this.getClearSelectionAction(), this.getSelectAllAction())) : ('');
  }
  getSelectAllAction() {
    return this.enableselectallaction ? (h("span", { class: "K2BT_EnhancedComboSelectAll", onClick: () => this.onSelectAllClick() }, this.selectallcaption)) : ('');
  }
  getClearSelectionAction() {
    return this.enableclearselectionaction ? (h("span", { class: "K2BT_EnhancedComboSelectNone", onClick: () => this.onClearSelectionClick() }, this.clearselectioncaption)) : ('');
  }
  onClearSelectionClick() {
    this.value = [];
    this.emitChangedEvents(this.value);
  }
  onSelectAllClick() {
    this.value = this.getAtomicValues().map(v => v.value);
    this.emitChangedEvents(this.value);
  }
  addHeaderIfNecessary() {
    return !this.displayaslist ? (h("div", { class: "K2BTEnhancedComboHeader", onClick: () => this.toggleContentVisibilty() }, h("div", { class: "K2BTHeaderContent" }, this.getHeaderContent()))) : ('');
  }
  getAtomicValues() {
    return ControlInfoValue.getAtomicValues_impl(this.getRawValues());
  }
  getComboContent() {
    const rawValues = ControlInfoValue.getAtomicValues_impl(this.getRawValues());
    var containsDetails = ControlInfoValue.containsDetails(rawValues);
    var containsIcons = ControlInfoValue.containsIcons(rawValues);
    var containsTrailingText = ControlInfoValue.containsTrailingText(rawValues);
    var containsBadges = ControlInfoValue.containsBadges(rawValues);
    const filteredValues = !this.open && !this.displayaslist ? [] : this.getFilteredValues();
    if (filteredValues.length > 0)
      return filteredValues.map(item => this.getItemContent(item, containsDetails, containsIcons, containsTrailingText, containsBadges));
    else
      return h("div", { class: "K2BTEnhancedComboNoItemsFound" }, this.noresultsfoundtext);
  }
  onImageError(e) {
    e.target.classList.add('K2BTEnhancedComboIconInvisible');
  }
  getItemContent(item, containsDetails, containsIcons, containsTrailingText, containsBadges) {
    var _a;
    if (((_a = item.items) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      return this.getCategoryContent(item, containsDetails, containsIcons, containsTrailingText, containsBadges);
    }
    else {
      return this.getAtomicItemContent(item, containsIcons, containsTrailingText, containsDetails, containsBadges);
    }
  }
  getAtomicItemContent(item, containsIcons, containsTrailingText, containsDetails, containsBadges) {
    var itemClass = 'K2BTEnhancedComboItem';
    if (this.valueIsSelected(item))
      itemClass += ' K2BTEnhancedComboSelected';
    else if (this.selectionIsFull())
      itemClass += ' K2BTEnhancedComboDisabled';
    if (this.activeElementValue === item.value)
      itemClass += ' K2BTEnhancedComboActive';
    return (h("div", { class: itemClass, ref: c => {
        if ((!this.isCollection() && this.valueIsSelected(item)) || (this.isCollection() && this.activeElementValue === item.value))
          this.selectedElement = c;
      }, onClick: () => {
        if (this.isCollection())
          this.setValueWithoutClosing(item.value.trim(), true);
        else
          this.setValue(item.value.trim());
      } }, this.addCheckboxIfNecessary(item), this.addIconIfNecessary(containsIcons, item), this.addBadgeIfNecessary(containsBadges, item), this.addMainItemContent(item, containsTrailingText, containsDetails)));
  }
  addMainItemContent(item, containsTrailingText, containsDetails) {
    return (h("div", { class: "K2BTEnhancedComboItem_TextColumn" }, h("div", { class: "K2BTEnhancedComboItem_TextContainer" }, h("span", { class: "K2BTEnhancedComboDescription" }, this.getHighlightedText(item.description)), containsTrailingText ? h("span", { class: "K2BTEnhancedComboTrailingText" }, this.getHighlightedText(item.trailingText)) : ''), h("div", { class: "K2BTEnhancedComboItem_TextContainer" }, containsDetails ? h("span", { class: "K2BTEnhancedComboSubtitle" }, this.getHighlightedText(item.detail)) : '')));
  }
  addBadgeIfNecessary(containsBadges, item) {
    const c = 'K2BTEnhancedComboBadge ' + item.badgeClass;
    if (!containsBadges)
      return '';
    else
      return h("div", { class: c });
  }
  addIconIfNecessary(containsIcons, item) {
    if (!containsIcons)
      return '';
    else
      return (h("div", { class: "K2BTEnhancedComboIconContainer" }, h("img", { class: item.imageUrl === '' ? 'K2BTEnhancedComboIcon K2BTEnhancedComboIconInvisible' : 'K2BTEnhancedComboIcon', src: item.imageUrl, onError: e => this.onImageError(e) })));
  }
  addCheckboxIfNecessary(item) {
    return this.isCollection() ? (h("div", { class: "K2BT_EnhancedComboCheckbox" }, h("input", { type: "checkbox", checked: this.valueIsSelected(item), tabIndex: -1, disabled: this.selectionIsFull() && !this.valueIsSelected(item) }), h("label", { htmlFor: "", "data-gx-sr-only": "" }, "\u00A0"))) : ('');
  }
  getCategoryContent(item, containsDetails, containsIcons, containsTrailingText, containsBadges) {
    return (h("div", { class: "K2BTEnhancedComboCategory" }, h("span", { class: "K2BTEnhancedComboCategoryName" }, item.description), h("div", { class: "K2BTEnchancedComboCategoryContents" }, item.items.map(i => this.getItemContent(i, containsDetails, containsIcons, containsTrailingText, containsBadges)))));
  }
  selectionIsFull() {
    return this.isCollection() && this.maxSelectionSize != 0 && this.maxSelectionSize <= this.value.length;
  }
  getHighlightedText(originalText) {
    var position = originalText.toLowerCase().indexOf(this.searchvalue.toLowerCase());
    if (this.searchvalue == undefined || this.searchvalue == '' || position == -1) {
      return h("span", null, originalText);
    }
    else {
      return (h("span", null, originalText.substring(0, position), h("span", { class: "K2BTEnhancedComboSearchHighlight" }, originalText.substring(position, position + this.searchvalue.length)), this.getHighlightedText(originalText.substring(position + this.searchvalue.length))));
    }
  }
  componentDidRender() {
    if (this.selectedElement != null) {
      this.selectedElement.scrollIntoView({ block: 'nearest' });
    }
    if (this.listContainer.getBoundingClientRect().right + this.listContainer.getBoundingClientRect().width > window.innerWidth) {
      this.listContainer.style.right = '0px';
    }
    else {
      this.listContainer.style.right = null;
    }
  }
  componentDidLoad() {
    var currentValues = this.getAtomicValues();
    if (!this.isCollection() && !this.includeemptyitem && currentValues.filter(v => this.valueIsSelected(v)).length == 0) {
      if (currentValues.length > 0) {
        this.setValueWithoutClosing(currentValues[0].value.trim(), true);
      }
    }
  }
  static get style() { return k2btEnhancedcomboCss; }
};
K2btEnhancedcombo$1.ERROR_SELECTION_FULL = 'SELECTION_FULL';

const k2btEnhancedsuggestCss = ":host{display:block}k2bt-enhancedsuggest:focus-visible{outline:none}.K2BTEnhancedComboContentsOpen{display:flex;flex-direction:column;position:absolute}.K2BTEnhancedComboItems{max-height:300px;overflow:auto;scrollbar-width:thin;scrollbar-color:#d7d7d7 transparent}.K2BTEnhancedComboItems::-webkit-scrollbar{width:6px}.K2BTEnhancedComboItems::-webkit-scrollbar-thumb{background-color:#d7d7d7;border:1px solid transparent;cursor:pointer}.K2BTEnhancedComboContentsClosed{display:none}.K2BTEnhancedComboItem{display:flex;flex-direction:row;align-items:center}.K2BTEnhancedComboItem:hover{cursor:pointer}.K2BTEnhancedComboItem_TextContainer{display:flex;flex-grow:1}.K2BTEnhancedComboSubtitle{font-size:12px}.K2BTEnhancedComboIcon{width:30px;height:30px;object-fit:cover;margin-right:4px}.K2BTEnhancedComboIconInvisible{visibility:hidden}.K2BTEnhancedComboNoItemsFound{width:100%;text-align:center;margin-top:40px;margin-bottom:40px}.K2BTEnhancedComboTrailingText{flex-grow:0}@keyframes spinner{to{transform:rotate(360deg)}}.K2BT_LoadingSpinner{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;left:50%;width:20px;height:19px;margin-top:10px;margin-bottom:10px;border-radius:50%;border:2px solid #ccc;border-top-color:#000;-webkit-animation:spinner 0.6s linear infinite;animation:spinner 0.6s linear infinite;margin-left:-10px}.K2BT_EnhancedComboCheckbox{margin-right:8px;margin-top:6px;pointer-events:none}.K2BTEnhancedComboDisabled{cursor:normal;opacity:0.8}.K2BTEnhancedSuggestTags{display:flex;flex-direction:row;flex-wrap:wrap}";

const K2btEnhancedsuggest$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.selectionErrorEvent = createEvent(this, "selectionError", 7);
    this.focusEvent = createEvent(this, "focus", 7);
    this.changeEvent = createEvent(this, "SuggestValueChanged", 7);
    this.newRecordClickedEvent = createEvent(this, "newRecordClicked", 7);
    this.inputValueChangedEvent = createEvent(this, "inputValueChanged", 7);
    this.value = [];
    this.noresultsfoundtext = 'No results found';
    this.enableadditem = true;
    this.additemcaption = 'New record';
    this.enabled = true;
    this.readonlyclass = '';
    this.searchvalue = '';
    this.placeholder = '';
    this.selectedValueDescription = '';
    this.maxSelectionSize = 1;
    this.suggestmaxitems = 5;
    this.activeElementValue = null;
    this.showiconsintags = true;
    this.emptyitemtext = '(none)';
    this.container = null;
    this.selectedElement = null;
    this.searchfield = null;
    // See problem with transactions in display mode in 0022649: Soportar datasource dataprovider en extended suggest
    this.seekSuggestValuesForMissingValueExecuted = false;
    this.seekSuggestValuesDebouncer = null;
  }
  isCollection() {
    return this.maxSelectionSize != 1;
  }
  // @ts-ignore
  selectionIsFull() {
    return this.isCollection() && this.maxSelectionSize != 0 && this.maxSelectionSize <= this.value.length;
  }
  itemIsSelected(item) {
    var _a, _b;
    return ((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(selectedItem => selectedItem.toString().trim() == item.value.toString().trim()).length) !== null && _b !== void 0 ? _b : 0) > 0;
  }
  async setFocusToSearch() {
    if (this.searchfield != null)
      this.searchfield.focus();
  }
  async updateDescription() {
    if (!this.isCollection()) {
      const atomicValues = this.getAtomicValues();
      const selectedItems = atomicValues.filter(value => this.itemIsSelected(value));
      const selectedItemCount = selectedItems.length;
      if (selectedItemCount > 0) {
        this.searchvalue = this.getValueDescription();
        this.seekSuggestValuesForMissingValueExecuted = false;
      }
      else {
        if (!this.seekSuggestValuesForMissingValueExecuted) {
          this.inputValueChangedEvent.emit(null);
          this.seekSuggestValuesForMissingValueExecuted = true;
        }
        this.searchvalue = '';
      }
    }
  }
  processInput(event) {
    if (event.target == this.searchfield) {
      this.changeSearchValue(this.searchfield.value);
    }
    event.stopPropagation();
    return false;
  }
  processKeydown(event) {
    if (event.key === 'Escape') {
      this.open = false;
      event.stopPropagation();
    }
    if (event.key === 'Tab')
      this.open = false;
    if (!this.isCollection()) {
      this.processKeydownSingleSelection(event);
    }
    else {
      this.processKeydownCollection(event);
    }
  }
  processKeydownCollection(event) {
    if (event.key == 'Enter') {
      this.processEnterKeyWhenCollection(event);
    }
    else if (this.open) {
      if (event.key == 'ArrowDown') {
        this.processArrowDownKeyWhenCollection(event);
      }
      else if (event.key == 'ArrowUp') {
        this.processArrowUpKeyWhenCollection(event);
      }
      else if (event.key === ' ' || event.key === 'Spacebar') {
        this.processSpacebarKeyWhenCollection(event);
      }
    }
  }
  processEnterKeyWhenCollection(event) {
    if (this.open) {
      this.setValueWithoutClosing(this.activeElementValue);
      this.emitChangedEvent();
    }
    this.open = !this.open;
    event.stopPropagation();
  }
  processSpacebarKeyWhenCollection(event) {
    if (this.activeElementValue !== '' && this.activeElementValue !== null) {
      this.setValueWithoutClosing(this.activeElementValue);
      this.emitChangedEvent();
      event.stopPropagation();
      event.preventDefault();
    }
  }
  processArrowUpKeyWhenCollection(event) {
    event.stopPropagation();
    event.preventDefault();
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      var pos = currentValues.findIndex(v => v.value == this.activeElementValue);
      if (pos == -1) {
        pos = currentValues.length - 1;
      }
      else {
        if (pos === 0)
          pos = -1;
        else
          pos -= 1;
      }
      if (pos !== -1)
        this.activeElementValue = currentValues[pos].value;
      else
        this.activeElementValue = null;
    }
  }
  processArrowDownKeyWhenCollection(event) {
    event.stopPropagation();
    event.preventDefault();
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      var pos = currentValues.findIndex(v => v.value == this.activeElementValue);
      if (pos === -1) {
        pos = 0;
      }
      else {
        pos = (((pos + 1) % currentValues.length) + currentValues.length) % currentValues.length;
        if (pos === 0)
          pos = -1;
      }
      if (pos !== -1)
        this.activeElementValue = currentValues[pos].value;
      else
        this.activeElementValue = null;
    }
  }
  processKeydownSingleSelection(event) {
    if (event.key == 'Enter') {
      this.processEnterKeyWhenNotCollection(event);
    }
    else if (event.key == 'Tab') {
      this.processTabKeyWhenNotCollection(event);
    }
    else if (this.open) {
      if (event.key == 'ArrowDown') {
        this.processArrowDownKeyWhenNotCollection(event);
      }
      else if (event.key == 'ArrowUp') {
        this.processArrowUpKeyWhenNotCollection(event);
      }
    }
  }
  processArrowUpKeyWhenNotCollection(event) {
    event.stopPropagation();
    event.preventDefault();
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      var pos = currentValues.findIndex(v => v.value == this.value[0]);
      if (pos == -1) {
        this.setValueWithoutClosing(currentValues[currentValues.length - 1].value);
      }
      else {
        pos = (((pos - 1) % currentValues.length) + currentValues.length) % currentValues.length;
        this.setValueWithoutClosing(currentValues[pos].value);
      }
    }
  }
  processArrowDownKeyWhenNotCollection(event) {
    event.stopPropagation();
    event.preventDefault();
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.getFilteredValues());
    if (currentValues.length > 0) {
      var pos = currentValues.findIndex(v => v.value == this.value[0]);
      if (pos == -1) {
        this.setValueWithoutClosing(currentValues[0].value);
      }
      else {
        pos = (((pos + 1) % currentValues.length) + currentValues.length) % currentValues.length;
        this.setValueWithoutClosing(currentValues[pos].value);
      }
    }
  }
  processEnterKeyWhenNotCollection(event) {
    this.open = !this.open;
    if (!this.open) {
      this.searchvalue = this.getValueDescription();
      this.emitChangedEvent();
    }
    event.stopPropagation();
  }
  processTabKeyWhenNotCollection(event) {
    if (!this.open) {
      this.searchvalue = this.getValueDescription();
      this.emitChangedEvent();
    }
    event.stopPropagation();
  }
  closeMenu(ev) {
    if (this.open && this.container && !this.container.contains(ev.target)) {
      this.open = false;
      if (!this.isCollection())
        this.setValue(this.value[0]);
    }
  }
  async setValue(value) {
    if (!this.isCollection())
      this.open = false;
    this.setValueWithoutClosing(value);
    if (!this.isCollection())
      this.searchvalue = this.getValueDescription();
    this.emitChangedEvent();
  }
  emitChangedEvent() {
    this.changeEvent.emit(this.value);
  }
  setValueWithoutClosing(value) {
    if (!this.isCollection()) {
      if (value !== null && value !== undefined)
        this.value = [value];
      else
        this.value = [];
      this.selectedValueDescription = this.getValueDescription();
    }
    else {
      if (this.value.filter(v => v.toString().trim() === value.toString().trim()).length === 0) {
        if (!this.selectionIsFull())
          this.value = this.value.concat([value]);
        else {
          this.errorCode = K2btEnhancedsuggest$1.ERROR_SELECTION_FULL;
          this.selectionErrorEvent.emit({});
        }
      }
      else
        this.value = this.value.filter(v => v.toString().trim() !== value.toString().trim());
    }
  }
  getRawValues() {
    var result;
    if (this.values == null) {
      result = [];
    }
    else if (typeof this.values === 'string') {
      if (this.values == '')
        result = [];
      else
        result = JSON.parse(this.values);
    }
    else {
      result = [...this.values];
    }
    return result;
  }
  getFilteredValues() {
    if (!this.open)
      return [];
    // The suggest control should not consider categories
    var result = this.getAtomicValues();
    if (this.searchvalue != '')
      result = this.getFilteredValues_impl(result);
    return result;
  }
  getFilteredValues_impl(origin) {
    var result = [];
    if (origin != undefined) {
      for (let cv of origin) {
        if (cv.description.toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase()) != -1) {
          result = result.concat(cv);
        }
        else {
          // Check if child items must be added
          var filteredChildren = this.getFilteredValues_impl(cv.items);
          if (filteredChildren.length > 0) {
            var cv2 = Object.assign({}, cv);
            cv2.items = filteredChildren;
            result = result.concat(cv2);
          }
        }
      }
    }
    return result;
  }
  onIncludeNewRecordClick() {
    this.open = false;
    this.newRecordClickedEvent.emit(null);
  }
  getAtomicValues() {
    const atomicValues = ControlInfoValue.getAtomicValues_impl(this.getRawValues());
    return this.removeDuplicates(atomicValues);
  }
  removeDuplicates(atomicValues) {
    return atomicValues.filter((value, index, self) => index === self.findIndex(t => t.value === value.value));
  }
  getSuggestPopoverContent() {
    const rawValues = this.getRawValues();
    var containsDetails = ControlInfoValue.containsDetails(rawValues);
    var containsIcons = ControlInfoValue.containsIcons(rawValues);
    var containsTrailingText = ControlInfoValue.containsTrailingText(rawValues);
    const filteredValues = this.getFilteredValues().slice(0, this.suggestmaxitems);
    if (filteredValues.length > 0)
      return filteredValues.map(item => this.getItemContent(item, containsDetails, containsIcons, containsTrailingText));
    else if (this.seekSuggestValuesDebouncer)
      return h("div", { class: "K2BT_LoadingSpinner" });
    else
      return h("div", { class: "K2BTEnhancedComboNoItemsFound" }, this.noresultsfoundtext);
  }
  onImageError(e) {
    e.target.classList.add('K2BTEnhancedComboIconInvisible');
  }
  getItemContent(item, containsDetails, containsIcons, containsTrailingText) {
    var _a;
    if (((_a = item.items) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      // Item is a category
      return this.getCategoryContent(item, containsDetails, containsIcons, containsTrailingText);
    }
    else {
      return this.getAtomicItemContent(item, containsIcons, containsTrailingText, containsDetails);
    }
  }
  getAtomicItemContent(item, containsIcons, containsTrailingText, containsDetails) {
    var itemClass = this.getItemClass(item);
    return (h("div", { class: itemClass, ref: c => {
        if (this.itemIsSelected(item) || this.activeElementValue === item.value)
          this.selectedElement = c;
      }, onClick: () => {
        this.setValue(item.value);
      } }, this.addCheckboxIfNecessary(item), this.addIconIfNecessary(containsIcons, item), this.addMainItemContent(item, containsTrailingText, containsDetails)));
  }
  addMainItemContent(item, containsTrailingText, containsDetails) {
    return (h("div", { class: "K2BTEnhancedComboItem_TextColumn" }, h("div", { class: "K2BTEnhancedComboItem_TextContainer" }, h("span", { class: "K2BTEnhancedComboDescription" }, this.getHighlightedText(item.description)), containsTrailingText ? h("span", { class: "K2BTEnhancedComboTrailingText" }, this.getHighlightedText(item.trailingText)) : ''), h("div", { class: "K2BTEnhancedComboItem_TextContainer" }, containsDetails ? h("span", { class: "K2BTEnhancedComboSubtitle" }, this.getHighlightedText(item.detail)) : '')));
  }
  addIconIfNecessary(containsIcons, item) {
    return containsIcons ? (h("div", { class: "K2BTEnhancedComboIconContainer" }, h("img", { class: "K2BTEnhancedComboIcon", src: item.imageUrl, onError: e => this.onImageError(e) }))) : ('');
  }
  addCheckboxIfNecessary(item) {
    return this.isCollection() ? (h("div", { class: "K2BT_EnhancedComboCheckbox" }, h("input", { type: "checkbox", checked: this.itemIsSelected(item), tabIndex: -1, disabled: this.selectionIsFull() && !this.itemIsSelected(item) }), h("label", { htmlFor: "", "data-gx-sr-only": "" }, "\u00A0"))) : ('');
  }
  getItemClass(item) {
    var itemClass = 'K2BTEnhancedComboItem';
    if (this.itemIsSelected(item))
      itemClass += ' K2BTEnhancedComboSelected';
    else if (this.selectionIsFull())
      itemClass += ' K2BTEnhancedComboDisabled';
    if (this.activeElementValue === item.value)
      itemClass += ' K2BTEnhancedComboActive';
    return itemClass;
  }
  getCategoryContent(item, containsDetails, containsIcons, containsTrailingText) {
    return (h("div", { class: "K2BTEnhancedComboCategory" }, h("span", { class: "K2BTEnhancedComboCategoryName" }, item.description), h("div", { class: "K2BTEnchancedComboCategoryContents" }, item.items.map(i => this.getItemContent(i, containsDetails, containsIcons, containsTrailingText)))));
  }
  getHighlightedText(originalText) {
    var position = originalText.toLowerCase().indexOf(this.searchvalue.toLowerCase());
    if (this.searchvalue == undefined || this.searchvalue == '' || position == -1) {
      return h("span", null, originalText);
    }
    else {
      return (h("span", null, originalText.substring(0, position), h("span", { class: "K2BTEnhancedComboSearchHighlight" }, originalText.substring(position, position + this.searchvalue.length)), this.getHighlightedText(originalText.substring(position + this.searchvalue.length))));
    }
  }
  changeSearchValue(value) {
    this.searchvalue = value;
    this.open = true;
    if (!this.isCollection()) {
      var valueSelected = this.getAtomicValues()
        .map(v => v.value)
        .indexOf(this.value[0]) != -1;
      this.value = [];
      if (valueSelected)
        this.emitChangedEvent();
    }
    if (this.seekSuggestValuesDebouncer) {
      clearTimeout(this.seekSuggestValuesDebouncer);
      this.seekSuggestValuesDebouncer = null;
    }
    this.seekSuggestValuesDebouncer = setTimeout((() => {
      this.seekSuggestValuesDebouncer = null;
      this.inputValueChangedEvent.emit(null);
    }).bind(this), 200);
  }
  getValueDescription() {
    if (this.value.length === 1) {
      var values = this.getAtomicValues();
      var v = values.find(val => val.value == this.value[0]);
      if (v != undefined) {
        return v.description;
      }
      return this.value[0];
    }
    return '';
  }
  getReadonlyValue(headerValues) {
    if (headerValues.length == 0)
      return this.emptyitemtext;
    else {
      return headerValues.map(v => v.description).join(', ');
    }
  }
  componentWillRender() {
    if (this.value == null || this.value == undefined || this.value.length === 0) {
      const valuesMatchingDescription = this.getAtomicValues().filter(item => item.description == this.searchfield.value);
      if (valuesMatchingDescription.length > 0) {
        this.setValueWithoutClosing(valuesMatchingDescription[0].value);
      }
    }
  }
  getHeaderTagsContent(vals) {
    var containsIcons = ControlInfoValue.containsIcons(this.getAtomicValues());
    if (this.isCollection())
      return vals.map(v => {
        return (h("div", { class: "K2BT_EnhancedComboHeaderTag" }, this.showiconsintags && containsIcons && v.imageUrl !== '' ? h("img", { class: "K2BT_EnhancedComboTagIcon", src: v.imageUrl }) : '', h("span", { class: "K2BT_EnhancedComboHeaderTagDescription" }, v.description), h("span", { class: "K2BT_EnhancedComboHeaderTagDelete", onClick: ev => {
            ev.cancelBubble = true;
            this.setValueWithoutClosing(v.value);
            this.emitChangedEvent();
          } })));
      });
  }
  render() {
    var atomicValues = this.getAtomicValues();
    const headerValues = this.value.map(sv => atomicValues.filter(v => sv.toString().trim() === v.value.trim())[0]).filter(f => f);
    this.selectedElement = null;
    return (h("div", null, h("p", { class: "form-control-static", style: this.enabled ? { display: 'none' } : {} }, h("span", { class: this.readonlyclass, "data-gx-readonly": "" }, this.getReadonlyValue(headerValues))), h("div", { class: "K2BTEnhancedSuggest", ref: node => (this.container = node), style: !this.enabled ? { display: 'none' } : {} }, h("div", { class: "K2BTEnhancedSuggestTags" }, this.getHeaderTagsContent(headerValues)), h("input", { type: "text", class: "form-control Attribute_Trn K2BTEnhancedSuggestInput", value: this.searchvalue, onInput: event => {
        event.preventDefault();
        this.changeSearchValue(event.target.value);
        return false;
      }, placeholder: this.placeholder, onClick: () => {
        this.open = true;
        this.activeElementValue = null;
      }, onFocus: () => {
        this.open = true;
        this.focusEvent.emit();
      }, ref: control => (this.searchfield = control) }), h("div", { class: this.open ? 'K2BTEnhancedComboContentsOpen' : 'K2BTEnhancedComboContentsClosed' }, h("div", { class: "K2BTEnhancedComboItems" }, this.getSuggestPopoverContent()), this.enableadditem ? (h("span", { class: "K2BTEnhancedComboNewAction", onClick: () => this.onIncludeNewRecordClick() }, this.additemcaption)) : ('')))));
  }
  static get style() { return k2btEnhancedsuggestCss; }
};
K2btEnhancedsuggest$1.ERROR_SELECTION_FULL = 'SELECTION_FULL';

const k2btImageRegionSelectorCss = ":host{display:block}.K2BT_LocationInBlueprintSelectorContainer{position:relative;background-repeat:no-repeat;background-size:100% 100%}.K2BT_LocationInBlueprintSelectorItem{position:absolute;background-repeat:no-repeat;background-size:100% 100%}.K2BT_LocationInBlueprintSelectorItemName{display:none}.K2BT_LocationInBlueprintSelectorContainer .tooltip-inner{white-space:pre-wrap}.K2BT_LocationInBlueprintSelectorItemUnavailable{cursor:initial;pointer-events:none}";

const K2btImageRegionSelector$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.selectionChangedEvent = createEvent(this, "selectionChanged", 7);
    this.selectionErrorEvent = createEvent(this, "selectionError", 7);
    this.maxSelectionSize = 1;
    this.enabled = true;
    this.elementsWithTooltips = [];
    this.elementDivs = [];
  }
  getRegions() {
    var _a, _b;
    return (_b = (_a = this.imageWithRegionsDefinition) === null || _a === void 0 ? void 0 : _a.Regions) !== null && _b !== void 0 ? _b : [];
  }
  itemClicked(id) {
    if (this.enabled) {
      var element = this.getRegions().filter(r => r.id == id)[0];
      if (element.status == ImageRegion.AVAILABLE) {
        if (this.selectedIds.includes(id)) {
          // It is always possible to remove items
          this.selectedIds = this.selectedIds.filter(i => i != id);
          this.selectionChangedEvent.emit({});
        }
        else {
          // Before selecting this item, check that the amount of items is OK
          if (this.maxSelectionSize == 1) {
            this.selectedIds = [id];
            this.selectionChangedEvent.emit({});
          }
          else if (this.maxSelectionSize == 0 || this.maxSelectionSize > this.selectedIds.length) {
            this.selectedIds = this.selectedIds.concat(id);
            this.selectionChangedEvent.emit({});
          }
          else {
            this.errorCode = K2btImageRegionSelector$1.ERROR_SELECTION_FULL;
            this.selectionErrorEvent.emit({});
          }
        }
      }
    }
  }
  componentDidRender() {
    // @ts-ignore
    $(this.elementsWithTooltips).tooltip();
  }
  render() {
    if (this.imageWithRegionsDefinition) {
      return this.renderExistingDefinition();
    }
    else {
      return this.renderNonExistingDefinition();
    }
  }
  renderNonExistingDefinition() {
    return h("div", null, "Image definition not set");
  }
  renderExistingDefinition() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    this.elementsWithTooltips = [];
    this.elementDivs = [];
    return (h(Host, null, h("div", { class: (_c = 'K2BT_LocationInBlueprintSelectorContainer ' + ((_b = (_a = this.imageWithRegionsDefinition) === null || _a === void 0 ? void 0 : _a.Frame) === null || _b === void 0 ? void 0 : _b.class)) !== null && _c !== void 0 ? _c : '', style: {
        height: (_e = (_d = this.imageWithRegionsDefinition) === null || _d === void 0 ? void 0 : _d.Frame) === null || _e === void 0 ? void 0 : _e.height,
        width: (_g = (_f = this.imageWithRegionsDefinition) === null || _f === void 0 ? void 0 : _f.Frame) === null || _g === void 0 ? void 0 : _g.width,
        backgroundImage: ((_k = (_j = (_h = this.imageWithRegionsDefinition) === null || _h === void 0 ? void 0 : _h.Frame) === null || _j === void 0 ? void 0 : _j.backgroundImageURL) !== null && _k !== void 0 ? _k : '') != '' ? 'url(' + this.imageWithRegionsDefinition.Frame.backgroundImageURL + ')' : null,
      } }, this.getRegions().map(r => this.renderRegion(r)))));
  }
  renderRegion(r) {
    var imageUrl = this.getBestImageForItemStatus(r);
    var style = {
      backgroundImage: '',
      height: r.height,
      width: r.width,
      top: r.top,
      left: r.left,
    };
    return (h("div", { class: 'K2BT_LocationInBlueprintSelectorItem' +
        (this.selectedIds.map(v => v.toString().trim()).includes(r.id.toString().trim()) ? ' K2BT_LocationInBlueprintSelectorItemSelected' : '') +
        (r.status == ImageRegion.UNAVAILABLE || !this.enabled ? ' K2BT_LocationInBlueprintSelectorItemUnavailable' : '') +
        (r.class != '' ? ' ' + r.class : ''), ref: e => this.elementDivs.push({ id: r.id, element: e }), style: style }, this.getMapForItem(r), this.getImage(r, imageUrl), h("span", { class: "K2BT_LocationInBlueprintSelectorItemName" }, r.name)));
  }
  getBestImageForItemStatus(r) {
    if (this.selectedIds.map(v => v.toString().trim()).includes(r.id.toString().trim()) && r.selectedImageURL != '')
      return r.selectedImageURL;
    if ((!this.enabled || r.status == ImageRegion.UNAVAILABLE) && r.unavailableImageURL != '')
      return r.unavailableImageURL;
    return r.availableImageURL;
  }
  getImage(r, imageUrl) {
    return (h("img", { ref: e => {
        if (r.selectableRegionCoordinates == '')
          this.elementsWithTooltips.push(e);
      }, title: r.selectableRegionCoordinates == '' ? this.getTooltipLines(r) : '', src: imageUrl, style: { height: '100%', width: '100%', cursor: r.selectableRegionCoordinates == '' ? 'pointer' : null }, usemap: r.selectableRegionCoordinates != '' ? '#K2BT_Image' + r.id : null, onClick: () => {
        if (r.selectableRegionCoordinates == '')
          this.itemClicked(r.id);
      } }));
  }
  getTooltipLines(r) {
    if (r.tooltipLines == null || r.tooltipLines.length == 0)
      return null;
    else
      return r.tooltipLines.join('\n');
  }
  getMapForItem(r) {
    if (r.selectableRegionCoordinates != '') {
      return (h("map", { name: 'K2BT_Image' + r.id }, h("area", { shape: "poly", coords: r.selectableRegionCoordinates, onClick: () => this.itemClicked(r.id), href: "#", title: this.getTooltipLines(r), ref: c => this.elementsWithTooltips.push(c) }), h("area", { shape: "poly", coords: '0,0,' + r.width + ',0,' + r.width + ',' + r.height + ',0,' + r.height, onClick: e => this.clickBelow(e, r.id), onMouseOver: e => this.bringElementBelowToForeground(e, r.id) })));
    }
  }
  bringElementBelowToForeground(e, regionId) {
    var evt = e || window.event;
    var regionDiv = this.elementDivs.filter(d => d.id == regionId)[0].element;
    regionDiv.style.pointerEvents = 'none';
    // get element at point of click
    var starter = document.elementFromPoint(evt.clientX, evt.clientY);
    var elements = this.elementDivs.filter(div => div.element.contains(starter));
    if (elements.length > 0) {
      console.log('hovering: ' + elements[0].id);
      this.elementDivs.forEach(el => (el.element.style.zIndex = 'initial'));
      elements.forEach(el => (el.element.style.zIndex = '1'));
    }
    // bring back the cursor
    regionDiv.style.pointerEvents = 'auto';
  }
  clickBelow(e, regionId) {
    var evt = e || window.event;
    var regionDiv = this.elementDivs.filter(d => d.id == regionId)[0].element;
    regionDiv.style.pointerEvents = 'none';
    // get element at point of click
    var starter = document.elementFromPoint(evt.clientX, evt.clientY);
    var elements = this.elementDivs.filter(div => div.element.contains(starter));
    if (elements.length > 0)
      this.itemClicked(elements[0].id);
    // bring back the cursor
    regionDiv.style.pointerEvents = 'auto';
  }
  static get style() { return k2btImageRegionSelectorCss; }
};
K2btImageRegionSelector$1.ERROR_SELECTION_FULL = 'SELECTION_FULL';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var inputmask = createCommonjsModule(function (module, exports) {
/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
!function(e, t) {
    module.exports = t();
}(self, (function() {
    return function() {
        var e = {
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                };
                var r = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
                t.default = r;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = i;
                };
            },
            3776: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var i, a;
                    function n(e, t, n) {
                        if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), 
                        "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1);
                    }
                    function r(e, a) {
                        var n, r, o = [];
                        if (e.length > 0) if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                            ev: e,
                            namespace: a && a.length > 0 ? a : "global",
                            handler: i[e][a][n]
                        }); else o.push({
                            ev: e,
                            namespace: a && a.length > 0 ? a : "global",
                            handler: t
                        }); else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, 
                        r = i[l][s].length; n < r; n++) o.push({
                            ev: l,
                            namespace: s,
                            handler: i[l][s][n]
                        }); else o.push({
                            ev: l,
                            namespace: s,
                            handler: t
                        });
                        return o;
                    }
                    if (u(this[0]) && e) {
                        i = this[0].eventRegistry, a = this[0];
                        for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                    }
                    return this;
                }, t.on = function(e, t) {
                    function i(e, i) {
                        n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                        a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
                    }
                    if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                        var l = r[o].split("."), s = l[0], c = l[1] || "global";
                        i(s, c);
                    }
                    return this;
                }, t.trigger = function(e) {
                    if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < a.length; r++) {
                        var l = a[r].split("."), s = l[0], c = l[1] || "global";
                        if (void 0 !== document && "global" === c) {
                            var f, d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p); else f = new CustomEvent(s, p);
                                } catch (e) {
                                    (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, n.default)(f, e), i.dispatchEvent(f);
                            } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], 
                            e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
                        } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                        arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments); else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
                    }
                    return this;
                };
                var a, n = s(i(600)), r = s(i(9380)), o = s(i(4963)), l = s(i(8741));
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function u(e) {
                    return e instanceof Element;
                }
                t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }, a.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, a, n, r, o, l, s = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                    "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
                    "object" !== i(s) && "function" != typeof s && (s = {});
                    for (;u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], 
                    s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                    s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));
                    return s;
                };
            },
            4963: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = l(i(600)), n = l(i(9380)), r = l(i(253)), o = i(3776);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = n.default.document;
                function u(e) {
                    return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                }
                u.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
                var c = u;
                t.default = c;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                var a, n = (a = i(9380)) && a.__esModule ? a : {
                    default: a
                };
                var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, l = "ontouchstart" in n.default, s = /iemobile/i.test(r), u = /iphone/i.test(r) && !s;
                t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var a, n = i(8711), r = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, o = i(9845), l = i(7215), s = i(7760), u = i(4713);
                function c(e, t) {
                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!i) {
                        if (Array.isArray(e) || (i = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return f(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === i && e.constructor && (i = e.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(e);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            i && (e = i);
                            var a = 0, n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: n
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, l = !1;
                    return {
                        s: function() {
                            i = i.call(e);
                        },
                        n: function() {
                            var e = i.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            l = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (l) throw r;
                            }
                        }
                    };
                }
                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                    return a;
                }
                var d = {
                    keydownEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib, c = t.maskset, f = this, d = a(f), p = e.keyCode, h = n.caret.call(t, f), v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
                        if (void 0 !== v) return v;
                        if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                        l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                            e.preventDefault();
                            var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                            n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                        } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                        n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                        !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                        h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                        h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                        n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                            var e = n.caret.call(t, f);
                            n.caret.call(t, f, e.begin);
                        }), 0) : p === r.default.LEFT && setTimeout((function() {
                            var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                            n.translatePosition.call(t, f.inputmask.caretPos.end);
                            t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                        }), 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, 
                        n.caret.call(t, f, h.begin, h.begin));
                        t.ignorable = i.ignorables.includes(p);
                    },
                    keypressEvent: function(e, t, i, a, o) {
                        var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0)), u.skipInputEvent = !0, !0;
                        if (v) {
                            44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                            var m, g = t ? {
                                begin: o,
                                end: o
                            } : n.caret.call(u, p), k = String.fromCharCode(v);
                            k = c.substitutes[k] || k, d.writeOutBuffer = !0;
                            var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);
                            if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                            d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                            !1 !== i && (setTimeout((function() {
                                c.onKeyValidation.call(p, v, y);
                            }), 0), d.writeOutBuffer && !1 !== y)) {
                                var b = n.getBuffer.call(u);
                                (0, s.writeBuffer)(p, b, m, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                        }
                    },
                    keyupEvent: function(e) {
                        var t = this.inputmask;
                        !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                        var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                        u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = l + e.clipboardData.getData("text/plain") + u;
                        }
                        var f = r;
                        if (i.isRTL) {
                            f = f.split("");
                            var d, p = c(n.getBufferTemplate.call(i));
                            try {
                                for (p.s(); !(d = p.n()).done; ) {
                                    var h = d.value;
                                    f[0] === h && f.shift();
                                }
                            } catch (e) {
                                p.e(e);
                            } finally {
                                p.f();
                            }
                            f = f.join("");
                        }
                        if ("function" == typeof a.onBeforePaste) {
                            if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                            f || (f = r);
                        }
                        (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                        var l = this, c = l.inputmask._valueGet(!0), f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, l, void 0, void 0, !0);
                        if (f !== c) {
                            c = function(e, i, a) {
                                if (o.iemobile) {
                                    var r = i.replace(n.getBuffer.call(t).join(""), "");
                                    if (1 === r.length) {
                                        var l = i.split("");
                                        l.splice(a.begin, 0, r), i = l.join("");
                                    }
                                }
                                return i;
                            }(0, c, p);
                            var h = function(e, a, r) {
                                for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                for (;d.length < h; ) d.push(k);
                                for (;f.length < v; ) f.unshift(k);
                                for (;p.length < v; ) p.unshift(k);
                                var y = c.concat(f), b = d.concat(p);
                                for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), 
                                m) {
                                  case "insertText":
                                    b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    y[l] === k ? r.end++ : l = o;
                                    break;

                                  default:
                                    y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", 
                                    g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", 
                                    g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", 
                                    g.push(y[l]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(c, f, p);
                            switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), 
                            (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), 
                            h.action) {
                              case "insertText":
                              case "insertReplacementText":
                                h.data.forEach((function(e, i) {
                                    var n = new a.Event("keypress");
                                    n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var v = new a.Event("keydown");
                                v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                                break;

                              default:
                                (0, s.applyInputValue)(l, c);
                            }
                            e.preventDefault();
                        }
                    },
                    compositionendEvent: function(e) {
                        var t = this.inputmask;
                        t.isComposing = !1, t.$el.trigger("input");
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                        i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                        !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [ e, !0 ]), 
                        t.undoValue = t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask, a = this;
                        if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                            var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                            void 0 !== r && n.caret.call(i, a, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, a = this, o = n.caret.call(t, a), u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end), c = t.isRTL ? u.reverse().join("") : u.join("");
                        window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), 
                        l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = (0, t.dependencyLib)(this), r = this;
                        if (r.inputmask) {
                            (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);
                            var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                            !1 === l.isComplete.call(t, u) && (setTimeout((function() {
                                a.trigger("incomplete");
                            }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                            (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            a.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                            t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, s.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
                t.EventHandlers = d;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var a = l(i(2394)), n = l(i(5581)), r = i(8711), o = i(7760);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = {
                    on: function(e, t, i) {
                        var l = e.inputmask.dependencyLib, s = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var s, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                            if (void 0 === c && "FORM" !== this.nodeName) {
                                var d = l.data(u, "_inputmask_opts");
                                l(u).off(), d && new a.default(d).mask(u);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                        t.preventDefault();
                                        break;

                                      case "keydown":
                                        c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                        break;

                                      case "keyup":
                                      case "compositionend":
                                        c.isComposing && (c.skipInputEvent = !1);
                                        break;

                                      case "keypress":
                                        if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                        c.skipKeyPressEvent = !0;
                                        break;

                                      case "click":
                                      case "focus":
                                        return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (s = arguments, setTimeout((function() {
                                            e.inputmask && i.apply(u, s);
                                        }), 0), !1);
                                    }
                                    var p = i.apply(u, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                            for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                for (var r = a[n]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                }
                                delete e.inputmask.events[n];
                            }
                        }
                    }
                };
                t.EventRuler = s;
            },
            219: function(e, t, i) {
                var a = d(i(2394)), n = d(i(5581)), r = d(i(7184)), o = i(8711), l = i(4713);
                function s(e) {
                    return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, s(e);
                }
                function u(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null == i) return;
                        var a, n, r = [], o = !0, l = !1;
                        try {
                            for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                        } catch (e) {
                            l = !0, n = e;
                        } finally {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (l) throw n;
                            }
                        }
                        return r;
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                    return a;
                }
                function f(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, a.key, a);
                    }
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var p = a.default.dependencyLib, h = function() {
                    function e(t, i, a) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts);
                    }
                    var t, i;
                    return t = e, (i = [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t) {
                            var i;
                            for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                if (void 0 !== e) {
                                    if (a) {
                                        var o = P(t).lastIndex, l = O(i.index, t);
                                        P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                                    } else r = e.slice(0, n.length);
                                    e = e.slice(r.length);
                                }
                                Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, i, a, n) {
                            if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), 
                            void 0 !== n) {
                                var r = e[a];
                                ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), 
                                "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), 
                                "ampm" === a && n.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]) && f(t.prototype, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = !1, g = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return _(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return _(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return _(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return _(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return _(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return _(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return _(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return _(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return _(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return _(Date.prototype.getMilliseconds.call(this), 3);
                    } ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return _(Date.prototype.getMilliseconds.call(this), 2);
                    } ],
                    t: [ "[ap]", y, "ampm", b, 1 ],
                    tt: [ "[ap]m", y, "ampm", b, 2 ],
                    T: [ "[AP]", y, "ampm", b, 1 ],
                    TT: [ "[AP]M", y, "ampm", b, 2 ],
                    Z: [ ".*", void 0, "Z", function() {
                        var e = this.toString().match(/\((.+)\)/)[1];
                        e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                            return u(e, 1)[0];
                        })).join(""));
                        return e;
                    } ],
                    o: [ "" ],
                    S: [ "" ]
                }, k = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function y(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function b() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function x(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = g[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (g[e[0]]) return g[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for (var a in g) if (/\.*x$/.test(a)) {
                            var n = a[0] + "\\d+";
                            -1 === i.indexOf(n) && i.push(n);
                        } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                        e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function E(e, t, i) {
                    if (!m) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var a = O(t.pos, i);
                        if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function S(e, t, i, a) {
                    var n, o, l = "";
                    for (P(i).lastIndex = 0; n = P(i).exec(e); ) {
                        if (void 0 === t) if (o = x(n)) l += "(" + o[0] + ")"; else switch (n[0]) {
                          case "[":
                            l += "(";
                            break;

                          case "]":
                            l += ")?";
                            break;

                          default:
                            l += (0, r.default)(n[0]);
                        } else if (o = x(n)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += n[0]; else l += n[0];
                    }
                    return l;
                }
                function _(e, t, i) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                    return e;
                }
                function w(e, t, i) {
                    return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function M(e, t) {
                    return S(t.inputFormat, {
                        date: e
                    }, t);
                }
                function O(e, t) {
                    var i, a, n = 0, r = 0;
                    for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(a[0]);
                        if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                            i = a, a = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: n - r,
                        nextMatch: a,
                        targetMatch: i
                    };
                }
                a.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, i, a, n, r, o, l) {
                            if (l) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var s = O(t, n);
                                if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                                    var u = g[s.targetMatch[0]][0];
                                    if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, a, n, r, o, s) {
                            var u, c;
                            if (o) return !0;
                            if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), 
                            void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, 
                            e[t + 1] = "0", a = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                pos: t + 2
                            })), !1 === a)) return a;
                            if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                                var f = g[u.targetMatch[0]];
                                c = f[0];
                                var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                                if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), 
                                "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                delete r.validPositions[h];
                            }
                            var m = a, k = w(e.join(""), n.inputFormat, n);
                            return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var a = v.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                    if (2 === n.length && n === r) {
                                        var l = new Date(v, e.month - 1, e.day);
                                        e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                        e.year = a, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(k, m, n)), m = function(e, t, i, a, n) {
                                if (!t) return t;
                                if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                    var r;
                                    for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                        var o;
                                        if ((o = x(r)) && o[3]) {
                                            for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], 
                                            d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));
                                            l.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), 
                                t;
                            }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                                buffer: S(n.inputFormat, k, n).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: a.pos
                                },
                                pos: a.caret || a.pos
                            } : m;
                        },
                        onKeyDown: function(e, t, i, a) {
                            e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date, a)), 
                            p(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, a) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
                        },
                        insertMode: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                }, r = i(8711), o = i(4713);
                n.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function s(e, t, i, a, n) {
                    return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                    l.test(e);
                }
                n.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: s
                            },
                            j: {
                                validator: s
                            },
                            k: {
                                validator: s
                            },
                            l: {
                                validator: s
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", i = t;
                            if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
                            return i;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, a, n, l, s) {
                            var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var a = l(i(2394)), n = l(i(5581)), r = l(i(7184)), o = i(8711);
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var s = a.default.dependencyLib;
                function u(e, t) {
                    for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                    return i;
                }
                function c(e, t, i, a) {
                    if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                        var n = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                        n = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    if ("+" === e) {
                        for (i in t.validPositions) ;
                        i = o.seekNext.call(this, parseInt(i));
                    }
                    for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                    return i;
                }
                function d(e, t) {
                    var i = -1;
                    for (var a in t.validPositions) {
                        var n = t.validPositions[a];
                        if (n && n.match.def === e) {
                            i = parseInt(a);
                            break;
                        }
                    }
                    return i;
                }
                function p(e, t, i, a, n) {
                    var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                    return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: n.radixPoint
                        },
                        pos: i
                    } : o;
                }
                a.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                            e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var a, n = "[+]";
                            if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return n += u(e.suffix, e), n += "[-]", a && (n = [ a + u(e.suffix, e) + "[-]", n ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                            n;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && e === n.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, a, n, r, o, l) {
                            if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                            var s = e.indexOf(n.radixPoint), u = t;
                            if (t = function(e, t, i, a, n) {
                                return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                                if (!0 !== n.allowMinus) return !1;
                                var c = !1, p = d("+", r), h = d("-", r);
                                return -1 !== p && (c = [ p, h ]), !1 !== c ? {
                                    remove: c,
                                    caret: u - n.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: n.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: n.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: u + n.negationSymbol.back.length
                                };
                            }
                            if (i === n.groupSeparator) return {
                                caret: u
                            };
                            if (l) return !0;
                            if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                                caret: n._radixDance && t === s - 1 ? s + 1 : s
                            };
                            if (!1 === n.__financeInput) if (a) {
                                if (n.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!n.digitsOptional) {
                                    if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                                        insert: {
                                            pos: s + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: s
                                    } : {
                                        rewritePosition: s + 1
                                    };
                                    if (o.begin < s) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: s
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, a, n, r, o) {
                            if (!1 === a) return a;
                            if (o) return !0;
                            if (null !== n.min || null !== n.max) {
                                var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                                if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                };
                            }
                            return a;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var a = e.replace(i.prefix, "");
                            return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), 
                            "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                            i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), 
                            a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, r.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(i), o = n[0].replace(/[^\-0-9]/g, ""), l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", s = n.length > 1;
                            e = o + ("" !== l ? i + l : l);
                            var u = 0;
                            if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, 
                            "" !== l || !t.digitsOptional)) {
                                var f = Math.pow(10, u || 1);
                                e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(i, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
                        },
                        onBeforeWrite: function(e, t, i, a) {
                            function n(e, t) {
                                if (!1 !== a.__financeInput || t) {
                                    var i = e.indexOf(a.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                return e;
                            }
                            var o, l;
                            if (a.stripLeadingZeroes && (l = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", n = !1;
                                return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
                            }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                            delete t[u + d];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== a.min) {
                                    var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== a.min && p < a.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                    };
                                }
                                if (t[t.length - 1] === a.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else if ("" !== a.radixPoint) {
                                    t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                    o = {
                                        refreshFromBuffer: !0,
                                        buffer: n(t)
                                    }));
                                }
                                if (a.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, a) {
                            var r, o, l = s(this), u = String.fromCharCode(e.keyCode).toLowerCase();
                            if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), 
                            l.trigger("setvalue"), !1;
                            if (e.ctrlKey) switch (e.keyCode) {
                              case n.default.UP:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                l.trigger("setvalue"), !1;

                              case n.default.DOWN:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                l.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), 
                                "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), 
                                l.trigger("setvalue", [ r.join(""), i.begin ]), !1;
                                if (!0 === a._radixDance) {
                                    var f = t.indexOf(a.radixPoint);
                                    if (a.digitsOptional) {
                                        if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [ r.join(""), i.begin >= r.length ? r.length : i.begin ]), 
                                        !1;
                                    } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, 
                                    (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), 
                                    l.trigger("setvalue", [ r, i.begin >= r.length ? f + 1 : i.begin ]), !1;
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var a;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = ((a = i(8741)) && a.__esModule ? a : {
                    default: a
                }).default ? window : {};
                t.default = n;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (s.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var a = o.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                            if (n !== t) {
                                var r = o.getLastValidPosition.call(i);
                                -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), 
                                p(e, a);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    var n = [], r = a.validPositions;
                    for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);
                    var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                    if ("function" == typeof i.onUnMask) {
                        var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                        s = i.onUnMask.call(t, u, s, i);
                    }
                    return s;
                }, t.writeBuffer = p;
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, r = i(4713), o = i(8711), l = i(7215), s = i(9845), u = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, a = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                    d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function f(e) {
                    e.length = 0;
                    for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function d(e, t, i, a, n) {
                    var s = e ? e.inputmask : this, c = s.maskset, f = s.opts, d = s.dependencyLib, h = a.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
                        begin: m
                    };
                    var y = [], b = s.caretPos;
                    if (h.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var a = new d.Event("_checkval");
                            a.keyCode = e.toString().charCodeAt(0), v += e;
                            var n = o.getLastValidPosition.call(s, void 0, !0);
                            !function(e, t) {
                                for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1]; ) a--;
                                var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                                    var l = o.seekNext.call(s, e);
                                    s.caretPos.begin < l && (s.caretPos = {
                                        begin: l
                                    });
                                }
                                return n;
                            }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, 
                            v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                            s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), 
                            s.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
                        }
                    })), y.length > 0) {
                        var x, P, E = o.seekNext.call(s, -1, void 0, !1);
                        if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift()); ) {
                            var _ = new d.Event("_checkval");
                            if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), 
                            (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                            S++;
                        }
                    }
                    t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), 
                    f.skipOptionalPartCharacter = k;
                }
                function p(e, t, i, a, r) {
                    var s = e ? e.inputmask : this, u = s.opts, c = s.dependencyLib;
                    if (a && "function" == typeof u.onBeforeWrite) {
                        var f = u.onBeforeWrite.call(s, a, t, i, u);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), 
                    !0 === r)) {
                        var p = c(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                            h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, i(7149), i(3194);
                var a = i(157), n = m(i(4963)), r = m(i(9380)), o = i(2391), l = i(4713), s = i(8711), u = i(7215), c = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                function v(e) {
                    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, v(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, k = "_inputmask_opts";
                function y(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof y)) return new y(e, t, i);
                        this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                        !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                        this.validationEvent = !1, this.ignorable = !1, this.mouseEnter = !1, 
                        this.originalPlaceholder = void 0, this.isComposing = !1;
                    }
                }
                function b(e, t, i) {
                    var a = y.prototype.aliases[e];
                    return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                    !0) : (null === i.mask && (i.mask = e), !1);
                }
                y.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, i) {
                            var l = n.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, a) {
                                function o(t, n) {
                                    var o = "" === a ? t : a + "-" + t;
                                    null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                    i[t] = n);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var l, s, u, c, f = e.getAttribute(a);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                    s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                                        u = s[c];
                                        break;
                                    }
                                    for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                                        if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                                            u = s[c];
                                            break;
                                        }
                                        o(l, u);
                                    }
                                }
                                n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(i).length;
                            }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                                void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), 
                                a.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
                        }
                        return c.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            n.default.data(this.el, k, null);
                            var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        s.getBufferTemplate.call(this).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        u.isComplete.call(this, s.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            c.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                        for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--) ;
                        return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        c.checkVal.call(this, void 0, !0, !1, i);
                        var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                        return t ? {
                            value: a,
                            metadata: this.getmetadata()
                        } : a;
                    },
                    setValue: function(e) {
                        this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, y.extendDefaults = function(e) {
                    n.default.extend(!0, y.prototype.defaults, e);
                }, y.extendDefinitions = function(e) {
                    n.default.extend(!0, y.prototype.definitions, e);
                }, y.extendAliases = function(e) {
                    n.default.extend(!0, y.prototype.aliases, e);
                }, y.format = function(e, t, i) {
                    return y(t).format(e, i);
                }, y.unmask = function(e, t) {
                    return y(t).unmaskedvalue(e);
                }, y.isValid = function(e, t) {
                    return y(t).isValid(e);
                }, y.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, y.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, y.dependencyLib = n.default, r.default.Inputmask = y;
                var x = y;
                t.default = x;
            },
            5296: function(e, t, i) {
                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, a(e);
                }
                var n = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                function s(e, t) {
                    if (t && ("object" === a(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }
                function u(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return u = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, a);
                        }
                        function a() {
                            return c(e, arguments, p(this).constructor);
                        }
                        return a.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), d(a, e);
                    }, u(e);
                }
                function c(e, t, i) {
                    return c = f() ? Reflect.construct : function(e, t, i) {
                        var a = [ null ];
                        a.push.apply(a, t);
                        var n = new (Function.bind.apply(e, a));
                        return i && d(n, i.prototype), n;
                    }, c.apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function d(e, t) {
                    return d = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e;
                    }, d(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var v = n.default.document;
                if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                    var m = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            Object.defineProperty(e, "prototype", {
                                value: Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                writable: !1
                            }), t && d(e, t);
                        }(c, e);
                        var t, i, a, u = (t = c, i = f(), function() {
                            var e, a = p(t);
                            if (i) {
                                var n = p(this).constructor;
                                e = Reflect.construct(a, arguments, n);
                            } else e = a.apply(this, arguments);
                            return s(this, e);
                        });
                        function c() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, c);
                            var t = (e = u.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), a = v.createElement("input");
                            for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));
                            var o = new r.default;
                            return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
                        }
                        return a = c, Object.defineProperty(a, "prototype", {
                            writable: !1
                        }), a;
                    }(u(HTMLElement));
                    n.default.customElements.define("input-mask", m);
                }
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, i) {
                    var a, o, l, s, u, c, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new n.default, v = [], m = [], g = !1;
                    function k(e, a, n) {
                        n = void 0 !== n ? n : e.matches.length;
                        var o = e.matches[n - 1];
                        if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                            fn: new RegExp(a, i.casing ? "i" : ""),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== a,
                            casing: null,
                            def: a,
                            placeholder: void 0,
                            nativeDef: a
                        }) : (p && (a = a[a.length - 1]), a.split("").forEach((function(t, a) {
                            o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || t,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (p ? "'" : "") + t
                            });
                        }))), p = !1; else {
                            var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                            l && !p ? e.matches.splice(n++, 0, {
                                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                    this.test = l.validator;
                                } : new RegExp("."),
                                static: l.static || !1,
                                optionality: l.optional || !1,
                                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                                casing: l.casing,
                                def: l.definitionSymbol || a,
                                placeholder: l.placeholder,
                                nativeDef: a,
                                generated: l.generated
                            }) : (e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || a,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                nativeDef: (p ? "'" : "") + a
                            }), p = !1);
                        }
                    }
                    function y() {
                        if (v.length > 0) {
                            if (k(s = v[v.length - 1], o), s.isAlternator) {
                                u = v.pop();
                                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                            }
                        } else k(h, o);
                    }
                    function b(e) {
                        var t = new n.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((l = v.pop()).openGroup = !1, void 0 !== l) if (v.length > 0) {
                            if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                                for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, 
                                u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                e = u.matches[t].matches ? u.matches[t].matches.length : 1;
                                v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                            }
                        } else h.matches.push(l); else y();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                    }
                    t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                    for (;a = t ? d.exec(e) : f.exec(e); ) {
                        if (o = a[0], t) {
                            switch (o.charAt(0)) {
                              case "?":
                                o = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                o = "{" + o + "}";
                                break;

                              case "|":
                                if (0 === v.length) {
                                    var E = b(h.matches);
                                    E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                                }
                            }
                            if ("\\d" === o) o = "[0-9]";
                        }
                        if (p) y(); else switch (o.charAt(0)) {
                          case "$":
                          case "^":
                            t || y();
                            break;

                          case i.escapeChar:
                            p = !0, t && y();
                            break;

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x();
                            break;

                          case i.optionalmarker[0]:
                            v.push(new n.default(!1, !0));
                            break;

                          case i.groupmarker[0]:
                            v.push(new n.default(!0));
                            break;

                          case i.quantifiermarker[0]:
                            var S = new n.default(!1, !1, !0), _ = (o = o.replace(/[{}?]/g, "")).split("|"), w = _[0].split(","), M = isNaN(w[0]) ? w[0] : parseInt(w[0]), O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                            "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                                min: M,
                                max: O,
                                jit: T
                            };
                            var C = v.length > 0 ? v[v.length - 1].matches : h.matches;
                            if ((a = C.pop()).isAlternator) {
                                C.push(a), C = a.matches;
                                var A = new n.default(!0), D = C.pop();
                                C.push(A), C = A.matches, a = D;
                            }
                            a.isGroup || (a = b([ a ])), C.push(a), C.push(S);
                            break;

                          case i.alternatormarker:
                            if (v.length > 0) {
                                var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                                c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                            } else c = P(h.matches);
                            if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), 
                            u.matches.push(c), v.push(u), c.openGroup) {
                                c.openGroup = !1;
                                var B = new n.default(!0);
                                B.alternatorGroup = !0, v.push(B);
                            }
                            break;

                          default:
                            y();
                        }
                    }
                    g && x();
                    for (;v.length > 0; ) l = v.pop(), h.matches.push(l);
                    h.matches.length > 0 && (!function e(a) {
                        a && a.matches && a.matches.forEach((function(n, r) {
                            var o = a.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                            t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                            e(n);
                        }));
                    }(h), m.push(h));
                    (i.numericInput || i.isRTL) && function e(t) {
                        for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                            var n = parseInt(a);
                            if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                var r = t.matches[a];
                                t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                            }
                            void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(m[0]);
                    return m;
                }, t.generateMaskSet = function(e, t) {
                    var i;
                    function n(e, i, n) {
                        var o, l, s = !1;
                        if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, 
                        e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                        n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                            var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                            e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
                        }
                        return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                        null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, s, n),
                            validPositions: {},
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                        o;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var o = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
                            })), n(o += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return i;
                };
                var a = o(i(4963)), n = o(i(9695)), r = o(i(2394));
                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, a = this.dependencyLib;
                    l.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                        var s = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!u) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", s), u = "text" === c.type, c = null;
                        } else u = "partial";
                        return !1 !== u ? function(t) {
                            var n, s;
                            function u() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, s = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: u,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                    s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, s = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                                        var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        a.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var a = n(t);
                                                    return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var i = l(e, t);
                                                return e.inputmask && (0, o.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(t) {
                                    l.EventRuler.on(t, "mouseenter", (function() {
                                        var t = this.inputmask._valueGet(!0);
                                        t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, o.applyInputValue)(this, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, u;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                        i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                        s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                        l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                        l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                        l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                        l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), 
                        l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                        l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), 
                        (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), 
                        l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), 
                        r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                        var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                            (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var p = r.getBuffer.call(e).slice();
                            !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                        }
                    }
                };
                var a, n = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, r = i(8711), o = i(7760), l = i(9716), s = i(9845), u = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, a) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), a = i.length >>> 0;
                        if (0 === a) return !1;
                        for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a; ) {
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, a, n) {
                    var r, o = this, l = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                    t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), 
                    {
                        begin: a ? t : u.call(o, t),
                        end: a ? i : u.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
                        var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var c = document.createTextNode("");
                                e.appendChild(c);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, l = this.maskset, s = this.dependencyLib, u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = l.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), 
                    d[t] = s.extend(!0, {}, i);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for (t = c - 1; t > f && (((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match)); t--) c--;
                    return e ? {
                        l: c,
                        def: d[c] ? d[c].match : void 0
                    } : c;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var n = this, u = this.maskset, c = this.opts;
                    t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (i = i || c.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(n).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = s.call(n, o.call(n));
                            break;

                          case "radixFocus":
                            if (function(e) {
                                if ("" !== c.radixPoint && 0 !== c.digits) {
                                    var t = u.validPositions;
                                    if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                        if (e < s.call(n, -1)) return !0;
                                        var i = r.call(n).indexOf(c.radixPoint);
                                        if (-1 !== i) {
                                            for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(n).join("").indexOf(c.radixPoint);
                                e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                                break;
                            }

                          default:
                            var d = e.begin, p = o.call(n, d, !0), h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                            if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d); else {
                                var v = u.validPositions[p], m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = a.getPlaceholder.call(n, h, m.match);
                                if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                    var k = s.call(n, h);
                                    (d >= k || d === h) && (h = k);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                }, t.seekNext = s, t.seekPrevious = function(e, t) {
                    var i = this, n = e - 1;
                    if (e <= 0) return 0;
                    for (;n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0)); ) n--;
                    return n;
                }, t.translatePosition = u;
                var a = i(4713), n = i(7215);
                function r(e) {
                    var t = this.maskset;
                    return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                    void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                }
                function o(e, t, i) {
                    var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                    for (var l in void 0 === e && (e = -1), o) {
                        var s = parseInt(l);
                        o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
                    }
                    return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                }
                function l(e, t, i) {
                    var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                    if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (i) {
                            var l = a.getTests.call(n, e);
                            return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                        }
                        var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), u = a.getPlaceholder.call(n, e, s.match);
                        return s.match.def !== u;
                    }
                    return !1;
                }
                function s(e, t, i) {
                    var n = this;
                    void 0 === i && (i = !0);
                    for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i)); ) r++;
                    return r;
                }
                function u(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), 
                    e;
                }
            },
            4713: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, a, n) {
                    var r = this, o = this.opts, c = this.maskset, f = o.greedy;
                    n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, h, v, m, g = [], k = 0;
                    do {
                        if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], 
                        h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h)); else {
                            v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
                            var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
                        }
                        k++;
                    } while (!0 !== h.static || "" !== h.def || t > k);
                    "" === g[g.length - 1] && g.pop();
                    !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
                    return o.greedy = f, g;
                }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                };
                function r(e, t) {
                    var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function o(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function l(e, t, i) {
                    var a = this.opts, n = this.maskset;
                    if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === n.validPositions[e]) {
                            var r, o = d.call(this, e), l = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), 
                            !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                        }
                        return t.def;
                    }
                    return a.placeholder.charAt(e % a.placeholder.length);
                }
                function s(e, t, i) {
                    return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                }
                function u(e, t) {
                    var i = this.opts, a = function(e, t) {
                        var i = 0, a = !1;
                        t.forEach((function(e) {
                            e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                        })), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
                        return i;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var n, o, l, s = r(c.call(this, e));
                    i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();
                    for (var u = 0; u < t.length; u++) {
                        var f = t[u];
                        n = r(f, s.length);
                        var d = Math.abs(n - s);
                        (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                        l = f);
                    }
                    return l;
                }
                function c(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                }
                function f(e, t, i) {
                    function a(e) {
                        for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                        i.push(e.charAt(n));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function d(e, t, i) {
                    var a, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, d = this.el, p = s.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, k = t ? t.join("") : "";
                    function y(t, i, r, o) {
                        function l(r, o, u) {
                            function p(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every((function(a, n) {
                                    return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), 
                                    !i;
                                })), i;
                            }
                            function v(e, t, i) {
                                var a, n;
                                if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                    if (e.mloc[t]) return a = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                                })), a) {
                                    var r = a.locator[a.alternation];
                                    return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                }
                                return void 0 !== i ? v(e, t) : void 0;
                            }
                            function b(e, t) {
                                var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                    i = n, a = !0;
                                    break;
                                }
                                if (a) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function x(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: o.reverse(),
                                    cd: k,
                                    mloc: {}
                                }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && u !== r) {
                                    if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                                } else if (r.isOptional) {
                                    var P = r, E = m.length;
                                    if (r = y(r, i, o, u)) {
                                        if (m.forEach((function(e, t) {
                                            t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        })), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                                        g = !0, h = e;
                                    }
                                } else if (r.isAlternator) {
                                    var S, _ = r, w = [], M = m.slice(), O = o.length, T = !1, C = i.length > 0 ? i.shift() : -1;
                                    if (-1 === C || "string" == typeof C) {
                                        var A, D = h, j = i.slice(), B = [];
                                        if ("string" == typeof C) B = C.split(","); else for (A = 0; A < _.matches.length; A++) B.push(A.toString());
                                        if (void 0 !== s.excludes[e]) {
                                            for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                                                var F = s.excludes[e][L].toString().split(":");
                                                o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                                            }
                                            0 === B.length && (delete s.excludes[e], B = R);
                                        }
                                        (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));
                                        for (var N = 0; N < B.length; N++) {
                                            A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                                            var V = _.matches[A];
                                            if (V && l(V, [ A ].concat(o), u)) r = !0; else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                                            S = m.slice(), h = D, m = [];
                                            for (var G = 0; G < S.length; G++) {
                                                var H = S[G], K = !1;
                                                H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);
                                                for (var U = 0; U < w.length; U++) {
                                                    var $ = w[U];
                                                    if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                                                        if (H.match.nativeDef === $.match.nativeDef) {
                                                            K = !0, b($, H);
                                                            break;
                                                        }
                                                        if (f(H, $, c)) {
                                                            b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                                                            break;
                                                        }
                                                        if (f($, H, c)) {
                                                            b($, H);
                                                            break;
                                                        }
                                                        if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                                                            x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                K || w.push(H);
                                            }
                                        }
                                        m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                                    } else r = l(_.matches[C] || t.matches[C], [ C ].concat(o), u);
                                    if (r) return !0;
                                } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                                    var W = t.matches[t.matches.indexOf(q) - 1];
                                    if (r = l(W, [ z ].concat(o), W)) {
                                        if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, 
                                        a.optionalQuantifier && p(a, W)) {
                                            g = !0, h = e;
                                            break;
                                        }
                                        return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                                    }
                                } else if (r = y(r, i, o, u)) return !0;
                            } else h++;
                            var Q, Z;
                        }
                        for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
                            var p = l(t.matches[u], [ u ].concat(r), o);
                            if (p && h === e) return p;
                            if (h > e) break;
                        }
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1; ) x--;
                            void 0 !== b && x > -1 && (v = function(e, t) {
                                var i, a = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                }))), a;
                            }(x, b), k = v.join(""), h = x);
                        }
                        if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];
                        for (var P = v.shift(); P < p.length; P++) {
                            if (y(p[P], v, [ P ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: k
                    }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                    r = s.tests[e]), m.forEach((function(e) {
                        e.match.optionality = !1;
                    })), r;
                }
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                    for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);
                    for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, i, a, l) {
                    var u = this, c = this.maskset, f = this.opts;
                    if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                    u.isRTL)) {
                        var d = i.end;
                        i.end = i.begin, i.begin = d;
                    }
                    var p, h = o.getLastValidPosition.call(u, void 0, !0);
                    i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
                    t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);
                    if (!1 !== (p = m.call(u, i))) {
                        if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
                            var v = s.call(u, !0);
                            if (v) {
                                void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                            }
                        }
                        !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
                            begin: c.p,
                            end: c.p
                        }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
                    }
                }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, 
                t.revalidateMask = m;
                var a, n = i(4713), r = (a = i(5581)) && a.__esModule ? a : {
                    default: a
                }, o = i(8711), l = i(6030);
                function s(e, t, i, a, r, l) {
                    var u, c, f, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, S = x.maskset, _ = P.extend(!0, {}, S.validPositions), w = P.extend(!0, {}, S.tests), M = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                    if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), 
                    -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
                        if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
                        u = T, c = S.validPositions[u].alternation, p = f;
                    }
                    if (void 0 !== c) {
                        m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, n.getDecisionTaker)(p) + ":" + p.alternation);
                        var C = [], A = -1;
                        for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                        A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), 
                        delete S.validPositions[h];
                        for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                            for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                            k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                                caretPos: h
                            });
                            if (M) break;
                            if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), 
                            S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                                O = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                O = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                        }
                    }
                    return O && !1 === E.keepStatic || delete S.excludes[m], O;
                }
                function u(e, t, i) {
                    var a = this.opts, n = this.maskset;
                    switch (a.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = n.validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof a.casing) {
                            var l = Array.prototype.slice.call(arguments);
                            l.push(n.validPositions), e = a.casing.apply(this, l);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, a = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var r = !1, l = o.determineLastRequiredPosition.call(t, !0), s = o.seekPrevious.call(t, l.l);
                        if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                            r = !0;
                            for (var u = 0; u <= s; u++) {
                                var c = n.getTestTemplate.call(t, u).match;
                                if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                    r = !1;
                                    break;
                                }
                            }
                        }
                        return r;
                    }
                }
                function f(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function d(e, t, i, a, r, l, p) {
                    var g = this, k = this.dependencyLib, y = this.opts, b = g.maskset;
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return t.pos - e.pos;
                            })).forEach((function(e) {
                                m.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function E(t, i, r) {
                        var l = !1;
                        return n.getTests.call(g, t).every((function(s, c) {
                            var d = s.match;
                            if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                pos: t
                            }))) {
                                var p = void 0 !== l.c ? l.c : i, h = t;
                                return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                                    input: u.call(g, p, d, h)
                                }), a, h) && (l = !1), !1);
                            }
                            return !0;
                        })), l;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, _ = k.extend(!0, {}, b.validPositions);
                    if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, 
                    delete b.tests[w]);
                    if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), 
                    !0 === S) {
                        if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
                            var M = b.validPositions[x];
                            if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                                    var O = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), 
                                    O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                                        S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: o.seekNext.call(g, x)
                            };
                        }
                        !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
                        var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), 
                    b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
                    var D = P(S);
                    void 0 !== g.maxLength && (o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), 
                    b.validPositions = k.extend(!0, {}, _), D = !1));
                    return D;
                }
                function p(e, t, i) {
                    for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
                        if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
                            r = !0;
                            break;
                        }
                        if (o[l].match && o[l].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), 
                    r;
                }
                function h(e, t, i) {
                    var a, n, r = this, s = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? i.slice().reverse() : i;
                    if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, 
                    e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (a = e; a < t; a++) delete s.validPositions[a];
                        n = e;
                    }
                    var p = new c.Event("keypress");
                    for (a = e; a < t; a++) {
                        p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
                        var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                        !1 !== h && void 0 !== h && (n = h.forwardPosition);
                    }
                    u.skipOptionalPartCharacter = f;
                }
                function v(e, t, i) {
                    var a = this, r = this.maskset, l = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                    for (var s = e; s < t; s++) {
                        if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
                            var u = n.getTests.call(a, s).slice();
                            "" === u[u.length - 1].match.def && u.pop();
                            var c, f = n.determineTestTemplate.call(a, s, u);
                            if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                                input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
                            })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                                var p = r.validPositions[t].input;
                                return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
                            }
                        }
                    }
                }
                function m(e, t, i, a) {
                    var r = this, l = this.maskset, s = this.opts, u = this.dependencyLib;
                    function c(e, t, i) {
                        var a = t[e];
                        if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return n && r;
                        }
                        return !1;
                    }
                    var f = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                        var g, k = u.extend(!0, {}, l.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                        for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];
                        var b, x, P = a, E = P;
                        for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                            if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                begin: h,
                                end: v
                            }))) {
                                for (;"" !== n.getTest.call(r, E).match.def; ) {
                                    if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                                        "+" === b.match.def && o.getBuffer.call(r, !0);
                                        var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && f++;
                                        break;
                                    }
                                    if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                                    E++;
                                }
                                "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                        !1;
                    } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));
                    return o.resetMaskSet.call(r, !0), f;
                }
            },
            5581: function(e) {
                e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
            }
        }, t = {};
        function i(a) {
            var n = t[a];
            if (void 0 !== n) return n.exports;
            var r = t[a] = {
                exports: {}
            };
            return e[a](r, r.exports, i), r.exports;
        }
        var a = {};
        return function() {
            var e, t = a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(3851), i(219), i(207), i(5296);
            var n = ((e = i(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = n;
        }(), a;
    }();
}));
});

const Inputmask = /*@__PURE__*/getDefaultExportFromCjs(inputmask);

const k2btMaskedInputCss = ":host{display:block}";

const K2btMaskedInput$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.inputEvent = createEvent(this, "input", 7);
    this.changeEvent = createEvent(this, "change", 7);
    this.enabled = true;
    this.uppercase = false;
    this.nativeInput = null;
    this.SYMBOL_OPTIONAL_DIGIT = 'Z';
    this.SYMBOL_OPTIONAL_LETTER = 'B';
    this.SYMBOL_DIGIT = '9';
    this.SYMBOL_LETTER = 'A';
    this.SYMBOL_CHARACTER = 'X';
    this.SYMBOL_ESCAPE = '\\';
    this.SYMBOL_MASK_SEPARATOR = ';';
    this.LANGUAGE_SYMBOLS = [
      this.SYMBOL_OPTIONAL_DIGIT,
      this.SYMBOL_OPTIONAL_LETTER,
      this.SYMBOL_DIGIT,
      this.SYMBOL_LETTER,
      this.SYMBOL_CHARACTER,
      this.SYMBOL_ESCAPE,
      this.SYMBOL_MASK_SEPARATOR,
    ];
    this.INPUTMASK_SPECIAL_CHARS = 'a9X[]{}()|\\';
    this.changeTimeout = null;
  }
  async getUnformattedValue() {
    var _a, _b, _c;
    // @ts-ignore
    return (_c = (_b = (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.inputmask) === null || _b === void 0 ? void 0 : _b.unmaskedvalue()) !== null && _c !== void 0 ? _c : '';
  }
  async getFormattedValue() {
    var _a, _b;
    // @ts-ignore
    return (_b = (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
  }
  componentDidLoad() {
    if (this.mask) {
      this.getInputMask().mask(this.nativeInput);
    }
  }
  getInputMask() {
    return Inputmask(this.getTransformedMask(this.mask), {
      numericInput: this.numeric,
      keepStatic: true,
      jitMasking: true,
      positionCaretOnTab: !this.numeric,
      casing: this.uppercase ? 'upper' : null,
      definitions: {
        X: {
          validator: '[A-Za-z0-9]',
        },
      },
    });
  }
  getTransformedMask(mask) {
    mask = this.reorderOptionalCharacters(mask);
    var pos = 0; // start processing at beggining
    var result = [];
    while (pos < mask.length) {
      var currentMaskBuffer = '';
      var startNewMask = false;
      // if input is numeric, check if trailing zeroes exist
      if (this.numeric && mask[pos] == this.SYMBOL_OPTIONAL_DIGIT) {
        var closing = ']';
        currentMaskBuffer += '[9';
        pos++;
        var exit_numeric_preamble = false;
        while (pos < mask.length && !exit_numeric_preamble) {
          switch (mask[pos]) {
            case this.SYMBOL_OPTIONAL_DIGIT:
              currentMaskBuffer += '[9';
              closing += ']';
              pos++;
              break;
            case this.SYMBOL_CHARACTER:
            case this.SYMBOL_DIGIT:
            case this.SYMBOL_LETTER:
            case this.SYMBOL_MASK_SEPARATOR:
            case this.SYMBOL_OPTIONAL_LETTER:
              exit_numeric_preamble = true;
              break;
            case this.SYMBOL_ESCAPE:
              pos++; // Move over to next character and treat it as a literal character (default case)
            default:
              currentMaskBuffer = '[' + currentMaskBuffer + closing + this.escape_char(mask[pos]) + ']';
              closing = '';
              pos++;
              break;
          }
        }
        currentMaskBuffer += closing;
      }
      var escaping = false;
      while (pos < mask.length && !startNewMask) {
        if (!escaping) {
          switch (mask[pos]) {
            case this.SYMBOL_MASK_SEPARATOR:
              startNewMask = true;
              break;
            case this.SYMBOL_DIGIT:
            case this.SYMBOL_CHARACTER:
              currentMaskBuffer += mask[pos];
              break;
            case this.SYMBOL_LETTER:
              currentMaskBuffer += 'a';
              break;
            case this.SYMBOL_OPTIONAL_DIGIT:
              currentMaskBuffer += '[9]';
              break;
            case this.SYMBOL_OPTIONAL_LETTER:
              currentMaskBuffer += '[a]';
              break;
            case this.SYMBOL_ESCAPE:
              escaping = true;
            default:
              currentMaskBuffer += this.escape_char(mask[pos]);
          }
        }
        else {
          escaping = false;
          currentMaskBuffer += this.escape_char(mask[pos]);
        }
        pos++;
      }
      result.push(currentMaskBuffer);
    }
    return result;
  }
  reorderOptionalCharacters(mask) {
    var maskArray = [...mask];
    for (var i = 1; i < mask.length; i++) {
      var j = i;
      while ((maskArray[j - 1] == this.SYMBOL_OPTIONAL_LETTER && maskArray[j] == this.SYMBOL_LETTER) ||
        (maskArray[j - 1] == this.SYMBOL_OPTIONAL_DIGIT && maskArray[j] == this.SYMBOL_DIGIT)) {
        var temp = maskArray[j];
        maskArray[j] = maskArray[j - 1];
        maskArray[j - 1] = temp;
        j--;
      }
    }
    return maskArray.join('');
  }
  escape_char(c) {
    if (this.INPUTMASK_SPECIAL_CHARS.indexOf(c) != -1)
      return '\\' + c;
    else
      return c;
  }
  onInput() {
    clearTimeout(this.changeTimeout);
    var component = this;
    this.changeTimeout = setTimeout(function () {
      component.inputEvent.emit({ value: component.nativeInput.value });
    }, 300);
  }
  render() {
    var styleObj = {};
    if (!this.enabled) {
      styleObj.display = 'none';
    }
    if (this.numeric) {
      styleObj.textAlign = 'right';
    }
    var classString = this.inputclass;
    var readonlyClassString = this.readonlyclass + ' ' + this.inputclass;
    return (h("div", null, h("p", { class: "form-control-static", style: this.enabled ? { display: 'none' } : {} }, h("span", { class: readonlyClassString, "data-gx-readonly": "" }, !this.enabled ? this.getInputMask().format(this.value) : '')), h("input", { type: "text", inputmode: "text", class: 'form-control ' + classString, value: this.value, ref: el => (this.nativeInput = el), onInput: () => this.onInput(), onChange: () => this.changeEvent.emit(), style: styleObj })));
  }
  static get style() { return k2btMaskedInputCss; }
};

const k2btNumericInputCss = ":host{display:block}";

const K2btNumericInput$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.inputEvent = createEvent(this, "input", 7);
    this.changeEvent = createEvent(this, "change", 7);
    this.decimals = 2;
    this.integerdigits = 10;
    this.includethousandseparator = true;
    this.includesign = false;
    this.usermustenterdecimalseparator = true;
    this.decimalseparator = '.';
    this.thousandseparator = ',';
    this.valueprefix = '';
    this.zeropadding = false;
    this.inputclass = '';
    this.readonlyclass = '';
    this.editorPosition = 0;
    this.value = '0';
    this.changeTimeout = null;
  }
  onInput() {
    clearTimeout(this.changeTimeout);
    var component = this;
    this.changeTimeout = setTimeout(function () {
      component.inputEvent.emit({ value: component.inputControl.value });
    }, 300);
  }
  /*
  This method must determine if this keypress should be accepted or not.

  In some cases it should move the cursor or alter how the keypress should be processed.
  */
  handleKeydown(event) {
    if (event.key != 'Tab' && event.key != 'Shift' && this.inputControl.selectionStart == 0 && this.inputControl.selectionEnd == this.inputControl.value.length) {
      this.inputControl.value = this.getFormattedValue_impl('0');
      if (!this.usermustenterdecimalseparator) {
        this.setCursorPosition(this.inputControl.value.length);
      }
    }
    var preventDefault = false;
    const currentPosition = this.getCursorPosition();
    if (event.key == 'Delete' || event.key == 'Backspace') {
      preventDefault = this.processDelete(event, currentPosition);
    }
    else if (event.key == this.decimalseparator) {
      preventDefault = this.processDecimalSeparator();
    }
    else if (event.key == '-') {
      preventDefault = this.processMinusSign(currentPosition);
    }
    else if (K2btNumericInput$1.digits.includes(event.key)) {
      preventDefault = this.processDigitInsertion(event, currentPosition);
    }
    else if (event.key.length == 1 && !event.ctrlKey) {
      // ignore all other keys
      preventDefault = true;
    }
    if (preventDefault) {
      event.preventDefault();
      return false;
    }
  }
  processMinusSign(currentPosition) {
    var preventDefault = true; // Generally this key should not be processed
    const firstDigitPosition = Math.min(...K2btNumericInput$1.digits.map(d => this.inputControl.value.indexOf(d)).filter(i => i != -1));
    if (this.includesign && currentPosition == firstDigitPosition && this.inputControl.value[firstDigitPosition - 1] != '-') {
      // If the number should support sign, the cursor is in the position is where the sign should be added, and no minus sign is there, this keypress should be processed
      preventDefault = false;
    }
    return preventDefault;
  }
  processDecimalSeparator() {
    var preventDefault = false;
    if (this.inputControl.value.charAt(this.getCursorPosition()) == this.decimalseparator) {
      this.setCursorPosition(this.getCursorPosition() + 1);
    }
    var selectionBegin = Math.min(this.inputControl.selectionStart, this.inputControl.selectionEnd);
    var selectionFinish = Math.max(this.inputControl.selectionStart, this.inputControl.selectionEnd);
    if (this.decimals > 0 && selectionBegin == 0 && selectionFinish == this.inputControl.value.length) {
      this.setCursorPosition(this.inputControl.value.indexOf(this.decimalseparator) + 1);
    }
    if (this.inputControl.value.indexOf(this.decimalseparator) != -1 || this.decimals == 0) {
      preventDefault = true;
    }
    return preventDefault;
  }
  processDigitInsertion(event, currentPosition) {
    var decimalPosition = this.inputControl.value.indexOf(this.decimalseparator);
    if (event.key == '0') {
      // ignore non-significant zeroes
      const firstSignificantDigitPosition = Math.min(...K2btNumericInput$1.digits
        .filter(d => d != '0')
        .map(d => this.inputControl.value.indexOf(d))
        .filter(i => i != -1));
      if (firstSignificantDigitPosition != -1 &&
        !((decimalPosition != -1 && currentPosition > decimalPosition) || (firstSignificantDigitPosition != -1 && currentPosition > firstSignificantDigitPosition))) {
        return true; // prevent default
      }
    }
    var preventDefault = false;
    if (!this.usermustenterdecimalseparator && currentPosition == this.inputControl.value.length) {
      // This digit is inserted at the end of the number, and the configuration is set for ATM-style.
      // Because of this, the current digits should be left shifted and the new digit added at the end.
      // The decimal separator should stay in place.
      // The digit should be ignored if the amount of digits matches the definition for integer digits + decimals
      var newdigits = (this.inputControl.value.replace(/\D/g, '') + event.key).replace(/^0+/, '');
      if (newdigits.length <= this.decimals + this.integerdigits) {
        if (newdigits.length <= this.decimals) {
          this.inputControl.value = this.getFormattedValue_impl('0.' + '0'.repeat(this.decimals - newdigits.length) + newdigits);
        }
        else {
          this.inputControl.value = this.getFormattedValue_impl(newdigits.substring(0, newdigits.length - this.decimals) + '.' + newdigits.substring(newdigits.length - this.decimals));
        }
        preventDefault = true;
        this.onInputChange();
      }
      preventDefault = true;
    }
    else {
      if (this.decimals > 0 && decimalPosition != -1 && decimalPosition < currentPosition) {
        // The digit is inserted after the decimal sign.
        // Check that the current position is not after the last accepted decimal.
        if (this.decimals != currentPosition - decimalPosition - 1) {
          // If it's not after the last decimal, the "next" digit should be overwritten and the cursor should be moved to the next position.
          this.inputControl.value = this.inputControl.value.substring(0, this.getCursorPosition()) + event.key + this.inputControl.value.substring(this.getCursorPosition() + 1);
          this.setCursorPosition(currentPosition + 1);
        }
        preventDefault = true;
      }
      else {
        // The digit is not in the decimal part.
        var integerPart = this.inputControl.value;
        if (this.decimals > 0 && decimalPosition != -1) {
          integerPart = integerPart.substring(0, integerPart.indexOf(this.decimalseparator));
        }
        // Input is in integer part
        var currentDigits = integerPart.replace(/\D/g, '').replace(/^0+/, '').length;
        if (currentDigits >= this.integerdigits) {
          // If integer part is complete, discard this keypress
          preventDefault = true;
        }
        else {
          if (currentDigits == 0) {
            if (this.inputControl.value.indexOf(this.decimalseparator) != -1) {
              this.inputControl.value = this.getFormattedValue_impl(event.key + this.value.substring(this.value.indexOf(this.decimalseparator)));
            }
            else {
              this.inputControl.value = this.getFormattedValue_impl(event.key);
              this.setCursorPosition(this.inputControl.value.length);
            }
            if (this.inputControl.value.indexOf(this.decimalseparator) != -1) {
              this.setCursorPosition(this.inputControl.value.indexOf(this.decimalseparator));
            }
            else {
              this.setCursorPosition(this.inputControl.value.length);
            }
            preventDefault = true;
            this.onInputChange();
          }
        }
      }
    }
    return preventDefault;
  }
  processDelete(event, currentPosition) {
    var preventDefault = false;
    var selectionBegin = Math.min(this.inputControl.selectionStart, this.inputControl.selectionEnd);
    var selectionFinish = Math.max(this.inputControl.selectionStart, this.inputControl.selectionEnd);
    if (selectionBegin == 0 && selectionFinish == this.inputControl.value.length) {
      this.inputControl.value = this.getFormattedValue_impl('0');
      if (this.usermustenterdecimalseparator) {
        // If user must enter decimal separator, place cursor in the unit's place
        this.setCursorPosition(this.inputControl.value.indexOf(this.decimalseparator) == -1 ? this.inputControl.value.length : this.inputControl.value.indexOf(this.decimalseparator));
      }
      else {
        // Else, place it at the end
        this.setCursorPosition(this.inputControl.value.length);
      }
      preventDefault = true;
      this.onInputChange();
    }
    else if (selectionBegin != selectionFinish) {
      // The user has selected a range delete it
      var newValue = this.inputControl.value.substring(0, selectionBegin) + this.inputControl.value.substring(selectionFinish);
      newValue = newValue.replace(/\D/g, '');
      this.inputControl.value = this.getFormattedValue_impl(newValue.substring(0, newValue.length - this.decimals) + '.' + newValue.substring(newValue.length - this.decimals));
      preventDefault = true;
      // Adjust cursor position
      if (event.key == 'Backspace')
        this.setCursorPosition(selectionBegin);
      else
        this.setCursorPosition(selectionFinish);
      this.onInputChange();
    }
    else if (event.key == 'Backspace') {
      if (!this.usermustenterdecimalseparator && currentPosition == this.inputControl.value.length) {
        var newdigits = this.inputControl.value.replace(/\D/g, '').replace(/^0+/, '');
        newdigits = newdigits.substring(0, newdigits.length - 1);
        var decimals = newdigits.substring(newdigits.length - this.decimals);
        decimals = '0'.repeat(this.decimals - decimals.length) + decimals;
        this.value = newdigits.substring(0, newdigits.length - this.decimals) + '.' + decimals;
        preventDefault = true;
      }
      else {
        if (this.inputControl.value.charAt(this.getCursorPosition() - 1) == this.thousandseparator ||
          this.inputControl.value.charAt(this.getCursorPosition() - 1) == this.decimalseparator) {
          this.setCursorPosition(this.getCursorPosition() - 1);
          preventDefault = true;
        }
        else if (selectionBegin == 0 && this.inputControl.value.charAt(selectionFinish) == this.decimalseparator) {
          const currentPosition = this.getCursorPosition();
          this.inputControl.value = this.inputControl.value.substring(0, this.getCursorPosition() - 1) + this.inputControl.value.substring(this.getCursorPosition());
          this.setCursorPosition(currentPosition - 1);
          preventDefault = true;
          this.onInputChange();
        }
      }
    }
    else if (event.key == 'Delete') {
      if (this.inputControl.value.charAt(this.getCursorPosition()) == this.thousandseparator || this.inputControl.value.charAt(this.getCursorPosition()) == this.decimalseparator) {
        this.setCursorPosition(this.getCursorPosition() + 1);
        preventDefault = true;
      }
      else if (selectionBegin == 0 && this.inputControl.value.charAt(selectionFinish + 1) == this.decimalseparator) {
        this.inputControl.value = this.inputControl.value.substring(0, this.getCursorPosition() - 1) + this.inputControl.value.substring(this.getCursorPosition() + 1);
        this.setCursorPosition(currentPosition);
        preventDefault = true;
        this.onInputChange();
      }
    }
    return preventDefault;
  }
  escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }
  onInputChange() {
    // the contents were changed, try to parse the value
    var originalValue = this.inputControl.value;
    var previousValue = this.value;
    this.editorPosition = this.getCursorPosition();
    this.value = this.inputControl.value.replace(new RegExp('[^\\d' + this.decimalseparator + '-]', 'g'), '').replace(/^0+/, '');
    if (this.value[0] == this.decimalseparator)
      this.value = '0' + this.value;
    if (Number.isNaN(this.value))
      this.value = '0';
    this.inputControl.value = this.getFormattedValue();
    var previousDigits = previousValue.indexOf(this.decimalseparator) == -1 ? previousValue.length : previousValue.indexOf(this.decimalseparator);
    var currentDigits = this.value.indexOf(this.decimalseparator) == -1 ? this.value.length : this.value.indexOf(this.decimalseparator);
    if (this.includethousandseparator && !this.zeropadding) {
      if (currentDigits > previousDigits && currentDigits % 3 == 1) {
        this.editorPosition = this.editorPosition + 1;
      }
      else if (currentDigits < previousDigits && currentDigits % 3 == 0) {
        if (originalValue.substring(0, this.editorPosition) != this.getFormattedValue().substring(0, this.editorPosition)) {
          this.editorPosition = this.editorPosition - 1;
        }
      }
    }
    else if (this.zeropadding) {
      this.editorPosition = this.inputControl.value.length - originalValue.length + this.editorPosition;
    }
  }
  setCursorPosition(val) {
    this.inputControl.selectionStart = val;
    this.inputControl.selectionEnd = val;
  }
  getCursorPosition() {
    if (!this.inputControl)
      return; // No (input) element found
    if ('selectionStart' in this.inputControl) {
      // Standard-compliant browsers
      return this.inputControl.selectionStart;
    }
    else {
      //@ts-ignore
      var sel = document.selection;
      if (sel) {
        // IE
        //@ts-ignore
        this.inputControl.focus();
        var sel = sel.createRange();
        var selLen = sel.createRange().text.length;
        //@ts-ignore
        sel.moveStart('character', -this.inputControl.value.length);
        return sel.text.length - selLen;
      }
    }
  }
  getFormattedValue() {
    return this.getFormattedValue_impl(this.value);
  }
  getFormattedValue_impl(value) {
    var result = '';
    if (this.valueprefix != '')
      result = this.valueprefix + ' ';
    if (value.startsWith('-'))
      result = result + '-';
    const decimalSeparatorPosition = value.indexOf(this.decimalseparator);
    // now include integer part
    var integerPart = (decimalSeparatorPosition != -1 ? value.substring(0, decimalSeparatorPosition) : value).replace('-', '');
    if (this.zeropadding)
      integerPart = '0'.repeat(this.integerdigits - integerPart.length) + integerPart;
    if (this.includethousandseparator) {
      var pendingdigits = integerPart;
      var withSeparator = '';
      while (pendingdigits.length > 3) {
        withSeparator = this.thousandseparator + pendingdigits.substring(pendingdigits.length - 3) + withSeparator;
        pendingdigits = pendingdigits.substring(0, pendingdigits.length - 3);
      }
      withSeparator = pendingdigits + withSeparator;
      result = result + withSeparator;
    }
    else {
      result = result + integerPart;
    }
    // now include decimal part
    if (this.decimals > 0) {
      var decimalValue = decimalSeparatorPosition != -1 ? value.substring(value.indexOf(this.decimalseparator) + 1) : '';
      result = result + this.decimalseparator + decimalValue.substring(0, this.decimals);
      if (this.decimals - decimalValue.length > 0)
        result = result + '0'.repeat(this.decimals - decimalValue.length);
    }
    return result;
  }
  render() {
    var styleObj = {};
    if (!this.enabled) {
      styleObj.display = 'none';
    }
    styleObj.textAlign = 'right';
    var classString = this.inputclass;
    var readonlyClassString = this.readonlyclass + ' ' + this.inputclass;
    return (h("div", null, h("p", { class: "form-control-static", style: this.enabled ? { display: 'none' } : {} }, h("span", { class: readonlyClassString, "data-gx-readonly": "" }, this.value)), h("input", { class: 'form-control ' + classString, type: "text", ref: c => (this.inputControl = c), style: styleObj, onInput: () => this.onInputChange(), onBlur: () => this.onInputChange(), onChange: () => this.changeEvent.emit() })));
  }
  componentDidRender() {
    this.inputControl.value = this.getFormattedValue();
  }
  componentDidUpdate() {
    if (this.editorPosition != -1) {
      this.setCursorPosition(this.editorPosition);
      this.editorPosition = -1;
    }
  }
  static get watchers() { return {
    "value": ["onInput"]
  }; }
  static get style() { return k2btNumericInputCss; }
};
K2btNumericInput$1.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const k2btNumericSliderCss = ":host{display:block}.K2BT_NumericSliderContainer{max-width:300px;display:flex;flex-direction:row}.K2BT_NumericSliderControl{margin-right:8px}input[type='range']{-webkit-appearance:none;width:100%;background:transparent;}input[type='range']:focus{outline:none;}input[type='range']::-webkit-slider-thumb{border:none;-webkit-appearance:none;height:16px;width:16px;border-radius:8px;background:#019f0c;cursor:pointer;margin-top:-4px}input[type='range']::-webkit-slider-thumb:hover{background:#01890a}input[type='range']::-moz-range-thumb{border:none;height:16px;width:16px;border-radius:8px;background:#019f0c;cursor:pointer;box-sizing:border-box}input[type='range']::-moz-range-thumb:hover{background:#01890a}input[type='range']::-ms-thumb{border:none;height:16px;width:16px;border-radius:3px;background:#019f0c;cursor:pointer}input[type='range']::-ms-thumb:hover{background:#01890a}input[type='range']::-webkit-slider-runnable-track{width:100%;height:8.4px;cursor:pointer;background:#ebebeb;border-radius:1.3px}input[type='range']::-moz-range-track{width:100%;height:8.4px;cursor:pointer;background:#ebebeb;border-radius:1.3px}input[type='range']::-moz-range-progress{background:#019f0c32;height:8.4px}input[type='range']::-ms-track{width:100%;height:8.4px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent}input[type='range']::-ms-fill-lower{background:#019f0c32;border-radius:2.6px}input[type='range']:focus::-ms-fill-lower{background:#019f0c32}input[type='range']::-ms-fill-upper{background:#ebebeb;border:0.2px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d}input[type='range']:focus::-ms-fill-upper{background:#ebebeb}";

const K2btNumericSlider$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.inputEvent = createEvent(this, "input", 7);
    this.changeEvent = createEvent(this, "change", 7);
    this.value = '';
    this.readonlyclass = '';
    this.enabled = true;
    this.changeTimeout = null;
  }
  onAuxiliaryInput() {
    clearTimeout(this.changeTimeout);
    var component = this;
    this.value = this.auxiliaryInput.value;
    this.changeTimeout = setTimeout(function () {
      component.inputEvent.emit({ value: component.nativeInput.value });
    }, 300);
  }
  onSliderInput() {
    clearTimeout(this.changeTimeout);
    var component = this;
    this.value = this.nativeInput.value;
    this.changeTimeout = setTimeout(function () {
      component.inputEvent.emit({ value: component.nativeInput.value });
    }, 300);
  }
  render() {
    var inputClasses = 'K2BT_NumericSliderControl ' + this.sliderclass;
    var auxiliaryInputClasses = 'K2BT_NumericSliderAuxiliaryInput form-control ' + this.numberclass;
    var readonlyClassString = this.readonlyclass;
    return (h(Host, null, h("p", { class: "form-control-static", style: this.enabled ? { display: 'none' } : {} }, h("span", { class: readonlyClassString, "data-gx-readonly": "" }, this.value)), h("div", { class: "K2BT_NumericSliderContainer", style: !this.enabled ? { display: 'none' } : {} }, h("input", { type: "range", min: this.min, max: this.max, step: this.step, class: inputClasses, value: this.value, ref: el => (this.nativeInput = el), onInput: () => this.onSliderInput(), onChange: () => this.changeEvent.emit() }), h("span", { style: this.numbervisible && this.numberreadonly ? { minWidth: this.max.toString().length + 3 + 'ch', textAlign: 'right' } : { display: 'none' }, class: readonlyClassString, "data-gx-readonly": "" }, this.value), h("input", { type: "text", inputmode: "numeric", class: auxiliaryInputClasses, value: this.value, ref: el => (this.auxiliaryInput = el), onInput: () => this.onAuxiliaryInput(), onChange: () => this.changeEvent.emit(), size: this.max.toString().length, style: this.numbervisible && !this.numberreadonly ? {} : { display: 'none' } }))));
  }
  static get style() { return k2btNumericSliderCss; }
};

const K2btSignaturePad$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.changeEvent = createEvent(this, "change", 7);
    this.width = 300;
    this.height = 200;
    this.backgroundimageurl = '';
    this.backgroundcolor = '#FFFFFF';
    this.showclearbutton = true;
    this.clearbuttoncaption = 'Clear';
    this.canvas = null;
    this.ctx = null;
    this.isWriting = false;
    this.setValueDebouncer = null;
  }
  render() {
    var _a, _b;
    var style = {
      backgroundImage: ((_a = this.backgroundimageurl) !== null && _a !== void 0 ? _a : '') !== '' ? 'url(' + this.backgroundimageurl + ')' : null,
      backgroundColor: ((_b = this.backgroundcolor) !== null && _b !== void 0 ? _b : '') !== '' ? this.backgroundcolor : null,
    };
    console.log(style);
    return (h(Host, null, h("div", { class: "K2BT_SignaturePadContainer", style: style }, h("canvas", { height: this.height, width: this.width, class: "K2BT_SignaturePad", ref: canvas => {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
      } })), this.showclearbutton ? (h("button", { class: "K2BT_SignaturePadClearButton", onClick: this.clearCanvas.bind(this) }, this.clearbuttoncaption)) : ('')));
  }
  componentDidRender() {
    this.canvas.addEventListener('pointerdown', this.handlePointerDown.bind(this), { passive: true });
    document.addEventListener('pointerup', this.handlePointerUp.bind(this), { passive: true });
    this.canvas.addEventListener('pointermove', this.handlePointerMove.bind(this), { passive: true });
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  handlePointerDown(event) {
    this.isWriting = true;
    this.ctx.beginPath();
    const [positionX, positionY] = this.getCursorPosition(event);
    this.ctx.moveTo(positionX, positionY);
  }
  handlePointerUp() {
    var wasWriting = this.isWriting;
    this.isWriting = false;
    if (wasWriting) {
      if (this.setValueDebouncer !== null) {
        clearTimeout(this.setValueDebouncer);
      }
      this.setValueDebouncer = setTimeout((() => {
        this.setValueDebouncer = null;
        this.changeEvent.emit(this.canvas.toDataURL());
      }).bind(this), 200);
    }
  }
  handlePointerMove(event) {
    if (!this.isWriting)
      return;
    const [positionX, positionY] = this.getCursorPosition(event);
    this.ctx.lineTo(positionX, positionY);
    this.ctx.stroke();
  }
  getCursorPosition(event) {
    var positionX = event.clientX - event.target.getBoundingClientRect().x;
    var positionY = event.clientY - event.target.getBoundingClientRect().y;
    return [positionX, positionY];
  }
};

const k2btToggleBarCss = ":host{display:block}";

const K2btToggleBar$1 = class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.selectionErrorEvent = createEvent(this, "selectionError", 7);
    this.inputEvent = createEvent(this, "input", 7);
    this.changeEvent = createEvent(this, "change", 7);
    this.newRecordClickedEvent = createEvent(this, "newRecordClicked", 7);
    this.SmallChip = 'SmallChip';
    this.MediumChip = 'MediumChip';
    this.Rectangle = 'Rectangle';
    this.value = null;
    this.values = [];
    this.includeemptyitem = true;
    this.emptyitemtext = '(none)';
    this.noresultsfoundtext = 'No results found';
    this.enableadditem = true;
    this.additemcaption = 'New record';
    this.enabled = true;
    this.readonlyclass = '';
    this.togglestyle = this.MediumChip;
    this.maxSelectionSize = 1;
    this.selectedElement = null;
  }
  onImageError(e) {
    e.target.classList.add('K2BT_ToggleBarIconInvisible');
  }
  isCollection() {
    return this.maxSelectionSize != 1;
  }
  selectionIsFull() {
    return this.isCollection() && this.maxSelectionSize != 0 && this.maxSelectionSize <= this.value.length;
  }
  itemIsSelected(item) {
    var _a, _b;
    return ((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(selectedItem => selectedItem.toString().trim() == item.value.trim()).length) !== null && _b !== void 0 ? _b : 0) > 0;
  }
  setValue(value) {
    var _a, _b, _c;
    if (this.maxSelectionSize == 1) {
      this.value = [value];
    }
    else {
      if (((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(v => v.trim() === value.trim()).length) !== null && _b !== void 0 ? _b : 0) === 0) {
        if (!this.selectionIsFull())
          this.value = ((_c = this.value) !== null && _c !== void 0 ? _c : []).concat([value]);
        else {
          this.errorCode = K2btToggleBar$1.ERROR_SELECTION_FULL;
          this.selectionErrorEvent.emit({});
        }
      }
      else
        this.value = this.value.filter(v => v.trim() !== value.trim());
    }
    this.inputEvent.emit();
    this.changeEvent.emit(value);
  }
  getToggleContent(values, containsDetails, containsIcons, containsTrailingText) {
    if (values.length == 0) {
      return h("div", { class: "K2BT_ToggleBar_NoItems" }, this.noresultsfoundtext);
    }
    else {
      const atomic = values.filter(v => { var _a, _b; return ((_b = (_a = v.items) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) == 0; });
      const currentLevelCategories = values.filter(v => { var _a; return ((_a = v.items) === null || _a === void 0 ? void 0 : _a.length) > 0; });
      var containerClasses = this.GetContainerClasses();
      return (h("div", { class: containerClasses }, atomic.length > 0 ? (h("div", { class: "K2BT_ToggleBarItemContainer" }, atomic.map(item => this.getItemContent(item, containsIcons, containsTrailingText, containsDetails)))) : (''), currentLevelCategories.map(c => {
        return (h("div", { class: "K2BT_ToggleBar_CategoryContainer" }, h("div", { class: "K2BT_ToggleBarCategoryName" }, c.description), this.getToggleContent(c.items, containsDetails, containsIcons, containsTrailingText)));
      })));
    }
  }
  getItemContent(item, containsIcons, containsTrailingText, containsDetails) {
    return (h("div", { class: this.itemIsSelected(item) ? 'K2BT_ToggleBarItem K2BT_ToggleBarItemSelected' : 'K2BT_ToggleBarItem', ref: c => {
        if (this.itemIsSelected(item))
          this.selectedElement = c;
      }, onClick: () => this.setValue(item.value.trim()) }, this.getIconHTMLIfNecessary(containsIcons, item), h("div", { class: "K2BT_ToggleBarItem_TextSection" }, h("div", { class: "K2BT_ToggleBarItem_TextContainer" }, h("span", { class: "K2BT_ToggleBarDescription" }, item.description), containsTrailingText ? h("span", { class: "K2BT_ToggleBarTrailingText" }, item.trailingText) : ''), h("div", { class: "K2BT_ToggleBarItem_TextContainer" }, containsDetails ? h("span", { class: "K2BT_ToggleBarSubtitle" }, item.detail) : ''))));
  }
  getIconHTMLIfNecessary(containsIcons, item) {
    return containsIcons ? (h("div", { class: "K2BT_ToggleBarIconContainer" }, h("img", { class: "K2BT_ToggleBarIcon", src: item.imageUrl, onError: e => this.onImageError(e) }))) : ('');
  }
  GetContainerClasses() {
    var containerClasses = 'K2BT_ToggleBar_Container';
    if (this.togglestyle == this.SmallChip) {
      containerClasses += ' K2BT_ToggleBarSmallChip';
    }
    else if (this.togglestyle == this.Rectangle) {
      containerClasses += ' K2BT_ToggleBarRectangle';
    }
    return containerClasses;
  }
  getSelectedItemsContent() {
    if (this.value == null)
      return this.emptyitemtext;
    else {
      var vals = ControlInfoValue.getAtomicValues_impl(this.values).filter(value => this.itemIsSelected(value));
      if (vals.length > 0)
        return vals.map(v => v.description).join(', ');
      else
        return this.emptyitemtext;
    }
  }
  render() {
    var containsDetails = ControlInfoValue.containsDetails(ControlInfoValue.getAtomicValues_impl(this.values));
    var containsIcons = ControlInfoValue.containsIcons(ControlInfoValue.getAtomicValues_impl(this.values));
    var containsTrailingText = ControlInfoValue.containsTrailingText(ControlInfoValue.getAtomicValues_impl(this.values));
    var valueList = this.getValues();
    if (this.enabled) {
      return this.getToggleContent(valueList, containsDetails, containsIcons, containsTrailingText);
    }
    else {
      return (h("p", { class: "form-control-static" }, h("span", { class: this.readonlyclass, "data-gx-readonly": "" }, this.getSelectedItemsContent())));
    }
  }
  getValues() {
    var valueList = [...this.values];
    if (this.includeemptyitem && !this.isCollection()) {
      valueList.unshift({
        value: '',
        description: this.emptyitemtext,
        imageUrl: '',
        detail: '',
        trailingText: '',
        badgeClass: '',
        items: [],
      });
    }
    return valueList;
  }
  componentDidLoad() {
    var currentValues = ControlInfoValue.getAtomicValues_impl(this.values);
    if (!this.includeemptyitem && currentValues.filter(v => this.itemIsSelected(v)).length == 0) {
      if (currentValues.length > 0) {
        this.setValue(currentValues[0].value.trim());
      }
    }
  }
  static get style() { return k2btToggleBarCss; }
};
K2btToggleBar$1.ERROR_SELECTION_FULL = 'SELECTION_FULL';

const K2btBaseColorPicker = /*@__PURE__*/proxyCustomElement(K2btBaseColorPicker$1, [0,"k2bt-base-color-picker",{"columns":[2],"containerclass":[1],"maxSelectionSize":[2,"max-selection-size"],"enabled":[4],"errorCode":[1,"error-code"],"colorOptions":[16],"selectedIds":[16]}]);
const K2btCalendarActionMenu = /*@__PURE__*/proxyCustomElement(K2btCalendarActionMenu$1, [0,"k2bt-calendar-action-menu",{"actions":[16],"isOpen":[32]},[[8,"click","closeMenu"]]]);
const K2btCalendarDayInMonthPicker = /*@__PURE__*/proxyCustomElement(K2btCalendarDayInMonthPicker$1, [0,"k2bt-calendar-day-in-month-picker",{"selectedDate":[16],"weekstartday":[1]}]);
const K2btCalendarDayView = /*@__PURE__*/proxyCustomElement(K2btCalendarDayView$1, [0,"k2bt-calendar-day-view",{"calendars":[16],"startHour":[2,"start-hour"],"endHour":[2,"end-hour"],"year":[2],"month":[2],"day":[2],"readonly":[4],"draftItemDescription":[1,"draft-item-description"],"showhours":[4],"alldayrows":[2],"draftItem":[32],"currentDate":[32]}]);
const K2btCalendarFullView = /*@__PURE__*/proxyCustomElement(K2btCalendarFullView$1, [0,"k2bt-calendar-full-view",{"showheader":[4],"showcalendarnavigation":[4],"showperiodnavigation":[4],"showviewselection":[4],"showcalendarselection":[4],"starthour":[2],"endhour":[2],"readonly":[4],"todaycaption":[1],"daycaption":[1],"weekcaption":[1],"workweekcaption":[1],"monthcaption":[1],"yearcaption":[1],"seemorecaption":[1],"itemsperdayinmonthview":[2],"dayviewenabled":[4],"weekviewenabled":[4],"workweekviewenabled":[4],"monthviewenabled":[4],"weekstartday":[1],"dateFrom":[1040],"dateTo":[1040],"currentview":[32],"calendars":[32],"selectedCalendars":[32],"advancedSelectorOpen":[32]},[[8,"click","closeMenu"]]]);
const K2btCalendarMonthView = /*@__PURE__*/proxyCustomElement(K2btCalendarMonthView$1, [0,"k2bt-calendar-month-view",{"year":[1026],"month":[1026],"readonly":[4],"calendars":[16],"seemorecaption":[1],"itemsperday":[2],"weekstartday":[1],"currentDate":[32]}]);
const K2btCalendarPeriodView = /*@__PURE__*/proxyCustomElement(K2btCalendarPeriodView$1, [0,"k2bt-calendar-period-view",{"calendars":[16],"startHour":[2,"start-hour"],"endHour":[2,"end-hour"],"dateFrom":[16],"dateTo":[16],"readonly":[4],"draftItemDescription":[1,"draft-item-description"],"draftItem":[32]}]);
const K2btEditCollection = /*@__PURE__*/proxyCustomElement(K2btEditCollection$1, [0,"k2bt-edit-collection",{"value":[16],"maxSelectionSize":[2,"max-selection-size"],"datatype":[1],"length":[2],"integers":[2],"decimals":[2],"enabled":[4],"inputclass":[1],"readonlyclass":[1],"invitemessage":[1]}]);
const K2btEnhancedcombo = /*@__PURE__*/proxyCustomElement(K2btEnhancedcombo$1, [0,"k2bt-enhancedcombo",{"value":[16],"values":[1],"includesearch":[4],"includeemptyitem":[4],"emptyitemtext":[1],"noresultsfoundtext":[1],"open":[4],"enableadditem":[4],"additemcaption":[1],"clearselectioncaption":[1],"selectallcaption":[1],"searchfieldplaceholder":[1],"searchvalue":[1],"enabled":[4],"maxSelectionSize":[2,"max-selection-size"],"headermaxvisibleitems":[2],"readonlyclass":[1],"errorCode":[1,"error-code"],"showselectionastags":[4],"showiconsintags":[4],"displayaslist":[4],"enableclearselectionaction":[4],"enableselectallaction":[4],"activeElementValue":[1,"active-element-value"]},[[0,"keydown","processKeydown"],[0,"focusin","onFocusIn"],[8,"click","closeMenu"]]]);
const K2btEnhancedsuggest = /*@__PURE__*/proxyCustomElement(K2btEnhancedsuggest$1, [0,"k2bt-enhancedsuggest",{"value":[16],"values":[1],"noresultsfoundtext":[1],"open":[4],"enableadditem":[4],"additemcaption":[1],"enabled":[4],"readonlyclass":[1],"searchvalue":[1],"placeholder":[1],"selectedValueDescription":[1,"selected-value-description"],"maxSelectionSize":[2,"max-selection-size"],"errorCode":[1,"error-code"],"suggestmaxitems":[2],"activeElementValue":[1,"active-element-value"],"showiconsintags":[4],"emptyitemtext":[1]},[[2,"input","processInput"],[0,"keydown","processKeydown"],[8,"click","closeMenu"]]]);
const K2btImageRegionSelector = /*@__PURE__*/proxyCustomElement(K2btImageRegionSelector$1, [0,"k2bt-image-region-selector",{"imageWithRegionsDefinition":[16],"selectedIds":[16],"maxSelectionSize":[2,"max-selection-size"],"errorCode":[1,"error-code"],"enabled":[4]}]);
const K2btMaskedInput = /*@__PURE__*/proxyCustomElement(K2btMaskedInput$1, [0,"k2bt-masked-input",{"mask":[1],"numeric":[4],"enabled":[4],"inputclass":[1],"readonlyclass":[1],"value":[1],"uppercase":[4]}]);
const K2btNumericInput = /*@__PURE__*/proxyCustomElement(K2btNumericInput$1, [0,"k2bt-numeric-input",{"decimals":[2],"integerdigits":[2],"includethousandseparator":[4],"includesign":[4],"usermustenterdecimalseparator":[4],"decimalseparator":[1],"thousandseparator":[1],"valueprefix":[1],"zeropadding":[4],"inputclass":[1],"readonlyclass":[1],"value":[1],"enabled":[4]},[[2,"keydown","handleKeydown"]]]);
const K2btNumericSlider = /*@__PURE__*/proxyCustomElement(K2btNumericSlider$1, [0,"k2bt-numeric-slider",{"max":[2],"min":[2],"step":[2],"numbervisible":[4],"numberreadonly":[4],"numberclass":[1],"sliderclass":[1],"value":[1],"readonlyclass":[1],"enabled":[4]}]);
const K2btSignaturePad = /*@__PURE__*/proxyCustomElement(K2btSignaturePad$1, [0,"k2bt-signature-pad",{"width":[2],"height":[2],"backgroundimageurl":[1],"backgroundcolor":[1],"showclearbutton":[4],"clearbuttoncaption":[1]}]);
const K2btToggleBar = /*@__PURE__*/proxyCustomElement(K2btToggleBar$1, [0,"k2bt-toggle-bar",{"value":[16],"values":[16],"includeemptyitem":[4],"emptyitemtext":[1],"noresultsfoundtext":[1],"enableadditem":[4],"additemcaption":[1],"enabled":[4],"readonlyclass":[1],"togglestyle":[1],"maxSelectionSize":[2,"max-selection-size"],"errorCode":[1,"error-code"]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      K2btBaseColorPicker,
  K2btCalendarActionMenu,
  K2btCalendarDayInMonthPicker,
  K2btCalendarDayView,
  K2btCalendarFullView,
  K2btCalendarMonthView,
  K2btCalendarPeriodView,
  K2btEditCollection,
  K2btEnhancedcombo,
  K2btEnhancedsuggest,
  K2btImageRegionSelector,
  K2btMaskedInput,
  K2btNumericInput,
  K2btNumericSlider,
  K2btSignaturePad,
  K2btToggleBar
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { K2btBaseColorPicker, K2btCalendarActionMenu, K2btCalendarDayInMonthPicker, K2btCalendarDayView, K2btCalendarFullView, K2btCalendarMonthView, K2btCalendarPeriodView, K2btEditCollection, K2btEnhancedcombo, K2btEnhancedsuggest, K2btImageRegionSelector, K2btMaskedInput, K2btNumericInput, K2btNumericSlider, K2btSignaturePad, K2btToggleBar, defineCustomElements };
