Ti.include("namespace.js");
Ti.include("event_aggregator.js");
Ti.include("event_bus.js");

Ti.include("presenter/main_presenter.js");
Ti.include("view/main_view.js");

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//Titanium.UI.setBackgroundColor('#000');

lkw.EventBus.init();

lkw.MainPresenter.init();