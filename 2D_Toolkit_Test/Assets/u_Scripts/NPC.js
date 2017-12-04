#pragma strict
var talk : boolean = false;
var textString  = " ";
var gui_Skin : GUISkin;


function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Player")
	{
		talk = true;
	}
}

function OnTriggerExit(other : Collider)
{
	if (other.tag == "Player")
	{
		talk = false;
	}
}

function OnGUI()
{
	GUI.skin = gui_Skin;
	if (talk == true)
	{
		GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), textString);
	}
}