# Programming-Assignment-2

Ti.include('activity.js'); 
var win1 = Titanium.UI.createWindow({
	title:'Tab 1',
	backgroundColor:'#fff'
});

win1.open();

var label1 = Titanium.UI.createLabel({
	color: '#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily: 'Helvetica Neue'},
	textAlign: 'center',
	width: 'auto'
});
win1.add(label1); 

//create tab group
var tabGroup = titanium.UI.createTabGroup ();

//
//create base UI tab and root window
//
var win1 = Titanium.UI.createWindow ({
	title:'Hello Taylor',
	backgroundColor: '#fff'
});
var tab 1 = titanium.UI.createTab({
	icon: 'KS_nav_views.png',
	title:'HelloTaylor',
	window:win1
});

var label1 = Titanium.UI.createLabel ({
	color: '#999',
	text: 'I am good.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
	textAlign: 'center',
	width:Ti:UI.FILL,
});

var view = Ti.UI.createView({
	top:20,
	bottom:'50%'
	left:20,
	right:'50%',
	backgroundColor: 'red'
});
	
win1.add(view);

var button1 = Titanium.UI.createButton({
	title:'Press Me',
	top:10
	left:10
});

view.add(button);

button1.addEventListener('click', function(e) {alert('You clicked me!')})

var switchOrientation = Ti.UI.createButton ({title:'Make Landspace'});
switchOrientation.addEventListener('click',rotateLayout);

var layout = Ti.UI.createView ({layout:'vertical'});
layout.add(switchOrientation);

function rotateLayout(){
	win1.orientationModes = (Ti.UI.LANDSCAPE_LEFT);
	switchOrientation.hide();
}

