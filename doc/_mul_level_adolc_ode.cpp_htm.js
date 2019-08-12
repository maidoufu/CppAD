var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad.htm',
'example.htm',
'general.htm',
'mul_level_adolc_ode.cpp.htm'
];
var list_current0 = [
'mul_level_adolc_ode.cpp.htm#See Also',
'mul_level_adolc_ode.cpp.htm#Purpose',
'mul_level_adolc_ode.cpp.htm#ODE',
'mul_level_adolc_ode.cpp.htm#ODE Solution',
'mul_level_adolc_ode.cpp.htm#Derivative of ODE Solution',
'mul_level_adolc_ode.cpp.htm#Taylor\'s Method Using AD',
'mul_level_adolc_ode.cpp.htm#base_adolc.hpp',
'mul_level_adolc_ode.cpp.htm#Memory Management',
'mul_level_adolc_ode.cpp.htm#Configuration Requirement',
'mul_level_adolc_ode.cpp.htm#Source'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down3(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down3[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}