lightUp = function()
{
    document.getElementById('BODY').style.animationIterationCount = 1;
    document.getElementById('BODY').style.animationDuration = 2;
    document.getElementById('BODY').style.animationName = 'lightUp';
}

var focusedLeft = false;
var focusedMain = false;
var focusedRight = false;

focusLeft = function()
{
    if (focusedLeft == false) 
    {
        document.getElementById('LEFT').style.display = 'None';
        document.getElementById('MAIN').style.display = 'None';
        document.getElementById('RIGHT').style.display = 'None';
        document.getElementById('FLEFT').style.display = 'Block';
        focusedLeft = true;
    }
    else
    {
        document.getElementById('LEFT').style.display = 'Initial';
        document.getElementById('MAIN').style.display = 'Initial';
        document.getElementById('RIGHT').style.display = 'Initial';
        document.getElementById('FLEFT').style.display = 'None';
        focusedLeft = false;
    }
}

focusMain = function()
{
    if (focusedMain == false) 
    {
        document.getElementById('LEFT').style.display = 'None';
        document.getElementById('MAIN').style.display = 'None';
        document.getElementById('RIGHT').style.display = 'None';
        document.getElementById('FMAIN').style.display = 'Block';
        focusedMain = true;
    }
    else
    {
        document.getElementById('LEFT').style.display = 'Initial';
        document.getElementById('MAIN').style.display = 'Initial';
        document.getElementById('RIGHT').style.display = 'Initial';
        document.getElementById('FMAIN').style.display = 'None';
        focusedMain = false;
    }
}

focusRight = function()
{
    if (focusedRight == false) 
    {
        document.getElementById('LEFT').style.display = 'None';
        document.getElementById('MAIN').style.display = 'None';
        document.getElementById('RIGHT').style.display = 'None';
        document.getElementById('FRIGHT').style.display = 'Block';
        focusedRight = true;
    }
    else
    {
        document.getElementById('LEFT').style.display = 'Initial';
        document.getElementById('MAIN').style.display = 'Initial';
        document.getElementById('RIGHT').style.display = 'Initial';
        document.getElementById('FRIGHT').style.display = 'None';
        focusedRight = false;
    }
}