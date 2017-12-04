#pragma strict
var text1 : boolean = true;
var text2 : boolean = true;
var text3 : boolean = true;
var text4 : boolean = true;
var introMessage1 = " ";
var introMessage2 = " ";
var introMessage3 = " ";
var introMessage4 = " ";
var introDone : boolean = false;
var gui_Skin : GUISkin;

function OnTriggerEnter(other : Collider){
	if (other.tag == "Player")
	{
		//set text1 to false
		//then change bools over time or on button press
		text1 = false;
	}
}

function OnTriggerExit(other : Collider)
{
	if (other.tag == "Player")
	{
		text1 = true;
		text2 = true;
		text3 = true; 
		text4 = true;
	}
}

function showSecond()
{
	text2 = false;
	text1 = true;
}

function showThird()
{
	text3 = false;
	text2 = true;
}

function showFourth()
{
	text4 = false;
	text3 = true;
}

function clear()
{
	text4 = true;
	introDone = true;
}

function OnGUI()
{
	GUI.skin = gui_Skin;
	if (text1 == false && introDone == false)
	{
		GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), introMessage1);
		Invoke("showSecond", 5);
	}
	else if (text2 == false)
	{
		GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), introMessage2);
		Invoke("showThird", 5);
	}
	else if (text3 == false)
	{
		GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), introMessage3);
		Invoke("showFourth", 5);
	}	
	else if (text4 == false)
	{
		GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), introMessage4);
		Invoke("clear", 5);
	}
}